'use client';
import styles from '@components/V2SectionResources.module.scss';

import React, { useState } from 'react';

import { GRID_TYPES, RESOUCES_SIDEBAR_ITEMS } from '@root/content/resources-content';
import PageGutter from './PageGutter';
import Sidebar, { MobileSidebar } from './Sidebar';
import Link from 'next/link';
import FadeManager, { FadeManagerConfig } from './animations/FadeManager';
import BlockFade from './animations/BlockFade';

export default function V2SectionResources() {
  const sidebar = RESOUCES_SIDEBAR_ITEMS;
  const [selectedItem, setSelectedItem] = useState(sidebar[0]);
  const [selectedTab, setSelectedTab] = useState<any>(null);

  let fadeConfig: FadeManagerConfig = {
    delay: { initial: 0, interval: 0.01 },
    duration: 2.0,
    angle: Math.PI * 0.5,
    distance: 200,
  };

  const selectedNavTitle = selectedItem?.title || 'Resources';

  const handleSidebarSelect = (item: any) => {
    setSelectedItem(item);
    setSelectedTab(null);
  };

  const handleTabSelect = (tab: any) => {
    setSelectedTab(tab);
  };

  const hasTabsSection = selectedItem?.items?.some((item: any) => item.isTab);

  const getCurrentContent = () => {
    if (hasTabsSection) {
      if (selectedTab) {
        return selectedTab.items;
      }
      const firstTab = selectedItem?.items?.find((item: any) => item.isTab);
      return firstTab?.items || [];
    }
    return selectedItem?.items || [];
  };

  // Switch statement for different grid styles using actual data
  const renderGrid = () => {
    let gridType = selectedItem?.gridType || GRID_TYPES.GRID_LARGE;

    if (hasTabsSection && selectedTab && selectedTab.gridType) {
      gridType = selectedTab.gridType;
    } else if (hasTabsSection && !selectedTab) {
      const firstTab = selectedItem?.items?.find((item: any) => item.isTab);
      if (firstTab && firstTab.gridType) {
        gridType = firstTab.gridType;
      }
    }

    const items = getCurrentContent();

    // If no items, show a message
    if (!items || items.length === 0) {
      return (
        <div className={styles.noContent}>
          <p>No content available for this section yet.</p>
        </div>
      );
    }

    switch (gridType) {
      case GRID_TYPES.GRID_LARGE:
        return (
          <div className={styles.gridLarge}>
            {items?.map((subItem, subIndex) => {
              const content = (
                <BlockFade key={`large-${subIndex}`}>
                  <div>
                    {subItem?.img?.src && (
                      <div className={styles.imageContainer}>
                        <img src={subItem?.img?.src} className={styles.image} />
                      </div>
                    )}
                    <div className={styles.itemText}>
                      {subItem?.title && <h3 className={styles.itemTitle}>{subItem.title}</h3>}
                      {subItem?.description && <p className={styles.itemDescription}>{subItem.description}</p>}
                    </div>
                  </div>
                </BlockFade>
              );

              if (subItem.href && subItem.href !== '#') {
                return (
                  <div key={subIndex} className={styles.gridLargeColumn}>
                    <Link href={subItem.href} className={styles.gridItemLink} target="_blank">
                      {content}
                    </Link>
                  </div>
                );
              }

              return (
                <div key={subIndex} className={styles.gridLargeColumn}>
                  {content}
                </div>
              );
            })}
          </div>
        );

      case GRID_TYPES.GRID_READING_LIST:
        return (
          <div className={styles.gridList}>
            {items.map((item, index) => (
              <div key={index} className={styles.gridItemList}>
                {item?.title && <p className={styles.contentHeading}>{item.title}</p>}
                {item?.items && (
                  <div className={styles.listItems}>
                    {item?.items?.map((subItem, subIndex) => {
                      const content = (
                        <BlockFade>
                          <li key={subIndex} className={styles.listItem}>
                            <div className={styles.itemContent}>
                              <span className={styles.number}>{String(subIndex + 1).padStart(2, '0')}</span>
                              <span className={styles.itemTitle}>{subItem.title}</span>
                            </div>
                            <div className={styles.itemAuthor}>
                              <p className={styles.author}>{subItem.author}</p>
                            </div>
                          </li>
                        </BlockFade>
                      );

                      if (subItem.href && subItem.href !== '#') {
                        return (
                          <Link href={subItem.href} key={subIndex} className={styles.link} target="_blank">
                            {content}
                          </Link>
                        );
                      }

                      return content;
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <PageGutter>
      <FadeManager {...fadeConfig}>
        <div className={styles.container}>
          <div className={styles.miniHeader}>
            <div className={styles.logo}>
              {/* <InternetDevelopmentArtsCraftsLogo height="50.5px" /> */}
              <p className={styles.mainTitle}>Index</p>
            </div>
            <div className={styles.mobileSidebarContainer}>
              <MobileSidebar items={sidebar} selectedItem={selectedItem} onItemSelect={handleSidebarSelect} />
            </div>
          </div>

          <div className={styles.contentGrid}>
            <div className={styles.sidebarContainer}>
              <p className={styles.heading}>Resources</p>
              <Sidebar items={sidebar} selectedItem={selectedItem} onItemSelect={handleSidebarSelect} />
            </div>

            <div className={styles.contentList}>
              <div>
                {selectedNavTitle && <p className={styles.heading}>{selectedNavTitle}</p>}

                {hasTabsSection && (
                  <div className={styles.tabContainer}>
                    {selectedItem?.items?.map((item: any, index: number) => {
                      if (!item.isTab) return null;

                      const isActive = selectedTab?.title === item.title || (!selectedTab && index === 0);

                      return (
                        <button key={index} className={`${styles.tab} ${isActive ? styles.tabActive : ''}`} onClick={() => handleTabSelect(item)}>
                          {item.title}
                        </button>
                      );
                    })}
                  </div>
                )}
                <div className={styles.grid}>{renderGrid()}</div>
              </div>
            </div>
          </div>
        </div>
      </FadeManager>
    </PageGutter>
  );
}
