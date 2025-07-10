'use client';

import * as Constants from '@common/constants';
import * as Utilities from '@common/utilities';

import React from 'react';
import dynamicLoader from 'next/dynamic';
import styles from '@components/page/flags.module.scss';

const Cloth = dynamicLoader(() => import('@components/three/ClothEntity'), {});
const Simulation = dynamicLoader(() => import('@components/three/Simulation'), {});

const backgroundVertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const backgroundFragmentShader = `
  uniform sampler2D backgroundImage; // Loaded from /client/bg-13.jpg
  uniform vec2 iResolution;
  uniform float iTime;
  uniform vec3 cloudColor;
  varying vec2 vUv;

  const float cloudscale = 0.35;
  const float speed = 0.05;
  const float clouddark = 0.3;
  const float cloudlight = 0.3;
  const float cloudcover = 0.4;
  const float cloudalpha = 2.0;
  const float skytint = 1.0;

  const mat2 m = mat2( 1.6,  1.2, -1.2,  1.6 );

  vec2 hash( vec2 p ) {
    p = vec2(dot(p,vec2(127.1,311.7)), dot(p,vec2(269.5,183.3)));
    return -1.0 + 2.0*fract(sin(p)*43758.5453123);
  }

  float noise( in vec2 p ) {
    const float K1 = 0.366025404;
    const float K2 = 0.211324865;
    vec2 i = floor(p + (p.x+p.y)*K1); 
    vec2 a = p - i + (i.x+i.y)*K2;
    vec2 o = (a.x>a.y) ? vec2(1.0,0.0) : vec2(0.0,1.0);
    vec2 b = a - o + K2;
    vec2 c = a - 1.0 + 2.0*K2;
    vec3 h = max(0.5-vec3(dot(a,a), dot(b,b), dot(c,c)), 0.0 );
    vec3 n = h*h*h*h*vec3( dot(a,hash(i+0.0)), dot(b,hash(i+o)), dot(c,hash(i+1.0)));
    return dot(n, vec3(70.0));  
  }

  float fbm(vec2 n) {
    float total = 0.0, amplitude = 0.1;
    for (int i = 0; i < 7; i++) {
      total += noise(n) * amplitude;
      n = m * n;
      amplitude *= 0.4;
    }
    return total;
  }

  void mainImage( out vec4 fragColor, in vec2 fragCoord ) {
    vec2 p = fragCoord.xy / iResolution.xy;
    vec2 uv = p * vec2(iResolution.x/iResolution.y, 1.0);    
    float time = iTime * speed;
    float q = fbm(uv * cloudscale * 0.5);
    float r = 0.0;
    uv *= cloudscale;
    uv -= q - time;
    float weight = 0.8;
    for (int i = 0; i < 8; i++){
      r += abs(weight * noise(uv));
      uv = m * uv + time;
      weight *= 0.7;
    }
    float f = 0.0;
    uv = p * vec2(iResolution.x/iResolution.y, 1.0);
    uv *= cloudscale;
    uv -= q - time;
    weight = 0.7;
    for (int i = 0; i < 8; i++){
      f += weight * noise(uv);
      uv = m * uv + time;
      weight *= 0.6;
    }
    f *= r + f;
    float c = 0.0;
    time = iTime * speed * 2.0;
    uv = p * vec2(iResolution.x/iResolution.y, 1.0);
    uv *= cloudscale * 2.0;
    uv -= q - time;
    weight = 0.4;
    for (int i = 0; i < 7; i++){
      c += weight * noise(uv);
      uv = m * uv + time;
      weight *= 0.6;
    }
    float c1 = 0.0;
    time = iTime * speed * 3.0;
    uv = p * vec2(iResolution.x/iResolution.y, 1.0);
    uv *= cloudscale * 3.0;
    uv -= q - time;
    weight = 0.4;
    for (int i = 0; i < 7; i++){
      c1 += abs(weight * noise(uv));
      uv = m * uv + time;
      weight *= 0.6;
    }
    c += c1;
    
    // Sample the background image instead of using a grey gradient:
    vec3 skycolour = texture2D(backgroundImage, vUv).rgb;
    
    vec3 cloudcolour = cloudColor * clamp((clouddark + cloudlight * c), 0.0, 1.0);
    f = cloudcover + cloudalpha * f * r;
    vec3 result = mix(skycolour, clamp(skytint * skycolour + cloudcolour, 0.0, 1.0), clamp(f + c, 0.0, 1.0));
    fragColor = vec4(result, 1.0);
  }

  void main() {
    vec2 fragCoord = vUv * iResolution;
    vec4 color;
    mainImage(color, fragCoord);
    gl_FragColor = color;
  }
`;

const IMAGE_SOURCE = `https://assets.flagpost.org`;
const BACKGROUND_IMAGE = `/bg.gif`;
const BACKGROUND_VIDEO = `/bg.mp4`;
// backgroundVideoURL={BACKGROUND_VIDEO}
// backgroundImageURL={BACKGROUND_IMAGE}

const CARDS = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 10 }, { id: 11 }, { id: 12 }, { id: 13 }, { id: 14 }, { id: 15 }, { id: 16 }, { id: 17 }, { id: 18 }, { id: 19 }, { id: 20 }, { id: 21 }, { id: 22 }, { id: 23 }, { id: 24 }, { id: 25 }, { id: 26 }, { id: 27 }, { id: 28 }, { id: 29 }, { id: 30 }, { id: 31 }, { id: 32 }, { id: 33 }, { id: 34 }, { id: 35 }, { id: 36 }, { id: 37 }, { id: 38 }, { id: 39 }, { id: 40 }, { id: 41 }, { id: 42 }, { id: 43 }, { id: 44 }, { id: 45 }, { id: 46 }, { id: 47 }, { id: 48 }, { id: 49 }, { id: 50 }, { id: 51 }, { id: 52 }, { id: 53 }, { id: 54 }, { id: 55 }, { id: 56 }, { id: 57 }, { id: 58 }, { id: 59 }, { id: 60 }, { id: 61 }, { id: 62 }, { id: 63 }, { id: 64 }, { id: 65 }, { id: 66 }, { id: 67 }, { id: 68 }, { id: 69 }, { id: 70 }, { id: 71 }, { id: 72 }, { id: 73 }, { id: 74 }, { id: 75 }, { id: 76 }, { id: 77 }, { id: 78 }, { id: 79 }, { id: 80 }, { id: 81 }, { id: 82 }, { id: 83 }, { id: 84 }, { id: 85 }, { id: 86 }, { id: 87 }, { id: 88 }, { id: 89 }, { id: 90 }, { id: 91 }, { id: 92 }, { id: 93 }, { id: 94 }, { id: 95 }, { id: 96 }, { id: 97 }, { id: 98 }, { id: 99 }, { id: 100 }, { id: 101 }, { id: 102 }, { id: 103 }, { id: 104 }, { id: 105 }].reverse();

export default function FlagSimulationPage(props) {
  const [currentTextureId, setCurrentTextureId] = React.useState(CARDS[0].id);

  return (
    <>
      <div className={styles.layout}>
        <Simulation backgroundVideoURL={BACKGROUND_VIDEO} windEnabled={true} backgroundVertexShader={backgroundVertexShader} backgroundFragmentShader={backgroundFragmentShader}>
          <Cloth clothTextureURL={`${IMAGE_SOURCE}/${currentTextureId}.jpg?t=${Date.now()}`} initialPosition={{ x: 0, y: 150, z: 0 }} />
        </Simulation>
        <div className={styles.context}>
          <strong>144 Northwest Flags</strong>
          <br />A story about people, craft and friendship
          <br />
          <br />
          This project is a gathering of kindred souls in the Pacific Northwest—individuals whose dedication to imaginative labor reminds us of what a beautiful world might look like. Once we upload 144 flags, the full collection will be transformed by{' '}
          <a href="https://internet.dev" target="_blank">
            The Internet Development Studio Company (“INTDEV”)
          </a>{' '}
          into a set of trading cards.
          <br />
          <br />
          There is something VeryVeryCool about watching people strive toward what they love. In these efforts, we glimpse something special—proof that the capacity to build meaning, to shape great things from vision, lies dormant in all of us. Each person carries the possibility of creating something awesome.
          <br />
          <br />
          In the summer of 2024,{' '}
          <a href="https://internet.dev" target="_blank">
            INTDEV
          </a>{' '}
          opened its studio in the heart of downtown—a kind of beacon. We then invited others to work, to dream, and to push their creative life toward its highest expression. Thank you for hearing that call, and for being part of this time in our lives.
        </div>
      </div>

      <div className={styles.root}>
        {CARDS.map((each, index) => (
          <img className={styles.card} key={`flag-${index}`} src={`${IMAGE_SOURCE}/${each.id}.jpg`} onClick={() => setCurrentTextureId(each.id)} alt={`Flag ${each.id}`} />
        ))}
      </div>
    </>
  );
}
