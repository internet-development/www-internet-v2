'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export interface SimulationContext {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
  controls: OrbitControls;
  windEnabled?: boolean;
  registerSimulationUpdate: (callback: (time: number) => void) => void;
  unregisterSimulationUpdate: (callback: (time: number) => void) => void;
}

interface SimulationProps {
  cloudColorHex?: string;
  skyColorHex?: string;
  backgroundImageURL?: string;
  backgroundVertexShader?: string;
  backgroundFragmentShader?: string;
  children?: React.ReactNode;
  windEnabled?: boolean;
}

const Simulation: React.FC<SimulationProps> = ({ cloudColorHex, skyColorHex, backgroundImageURL, backgroundVertexShader, backgroundFragmentShader, children, windEnabled }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [simContext, setSimContext] = useState<SimulationContext | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(25, container.clientWidth / container.clientHeight, 1, 10000);
    camera.position.set(0, 0, 1300);
    scene.add(camera);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.15);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 4.0);
    directionalLight.position.set(-100, 500, 300);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.set(2048, 2048);
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = 2000;
    directionalLight.shadow.camera.left = -500;
    directionalLight.shadow.camera.right = 500;
    directionalLight.shadow.camera.top = 500;
    directionalLight.shadow.camera.bottom = -500;
    directionalLight.shadow.bias = -0.001;
    scene.add(directionalLight);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, -100, 0);
    controls.update();
    controls.maxPolarAngle = Math.PI * 0.5;
    controls.enableZoom = false;

    const simulationCallbacks: Array<(time: number) => void> = [];

    const registerSimulationUpdate = (callback: (time: number) => void) => {
      simulationCallbacks.push(callback);
    };

    const unregisterSimulationUpdate = (callback: (time: number) => void) => {
      const index = simulationCallbacks.indexOf(callback);
      if (index !== -1) simulationCallbacks.splice(index, 1);
    };

    const context: SimulationContext = {
      scene,
      camera,
      renderer,
      controls,
      windEnabled,
      registerSimulationUpdate,
      unregisterSimulationUpdate,
    };

    setSimContext(context);

    let backgroundScene: THREE.Scene | undefined;
    let backgroundCamera: THREE.OrthographicCamera | undefined;
    let shaderUniforms: { [uniform: string]: { value: any } } | undefined = undefined;

    if (backgroundVertexShader && backgroundFragmentShader) {
      backgroundScene = new THREE.Scene();
      backgroundCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
      const textureLoader = new THREE.TextureLoader();
      const bgTexture = backgroundImageURL ? textureLoader.load(backgroundImageURL) : null;

      shaderUniforms = {
        iTime: { value: 0 },
        iResolution: { value: new THREE.Vector2(container.clientWidth, container.clientHeight) },
        skyColor: { value: new THREE.Color(skyColorHex) },
        cloudColor: { value: new THREE.Color(cloudColorHex) },
        backgroundImage: { value: bgTexture },
      };

      const shaderMaterial = new THREE.ShaderMaterial({
        vertexShader: backgroundVertexShader,
        fragmentShader: backgroundFragmentShader,
        uniforms: shaderUniforms,
        depthTest: false,
        depthWrite: false,
      });

      const plane = new THREE.PlaneGeometry(2, 2);
      const backgroundMesh = new THREE.Mesh(plane, shaderMaterial);
      backgroundScene.add(backgroundMesh);
    }

    const animate = (time: number) => {
      requestAnimationFrame(animate);
      simulationCallbacks.forEach((cb) => cb(time));
      if (backgroundScene && backgroundCamera && shaderUniforms) {
        shaderUniforms.iTime.value = time * 0.001;
        renderer.autoClear = false;
        renderer.clear();
        renderer.render(backgroundScene, backgroundCamera);
        renderer.render(scene, camera);
      } else {
        renderer.render(scene, camera);
      }
    };

    animate(0);

    const onWindowResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
      if (shaderUniforms) {
        shaderUniforms.iResolution.value.set(container.clientWidth, container.clientHeight);
      }
    };

    const onKeyDown = (e: KeyboardEvent) => {
      const zoomStep = 15;
      if (e.key === 'q') {
        const direction = new THREE.Vector3();
        camera.getWorldDirection(direction);
        camera.position.addScaledVector(direction, -zoomStep);
        controls.update();
      }
      if (e.key === 'w') {
        const direction = new THREE.Vector3();
        camera.getWorldDirection(direction);
        camera.position.addScaledVector(direction, zoomStep);
        controls.update();
      }
    };

    window.addEventListener('resize', onWindowResize);
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('resize', onWindowResize);
      window.removeEventListener('keydown', onKeyDown);
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, [backgroundImageURL, backgroundVertexShader, backgroundFragmentShader, cloudColorHex, skyColorHex, windEnabled]);

  return (
    <div
      ref={containerRef}
      style={{
        minWidth: '10%',
        width: '100%',
        height: 'calc(100dvh - 40px)',
        margin: 0,
        padding: 0,
      }}
    >
      {simContext &&
        React.Children.map(children, (child) => {
          if (React.isValidElement(child))
            return React.cloneElement(child as React.ReactElement<any>, {
              simulation: simContext,
              parent: simContext.scene,
            });
          return child;
        })}
    </div>
  );
};

export default Simulation;
