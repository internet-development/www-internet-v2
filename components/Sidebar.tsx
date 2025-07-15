import styles from './Sidebar.module.scss';

import React from 'react';

interface SidebarProps {
  items: any[];
  selectedItem: any;
  onItemSelect: (item: any) => void;
}

export default function Sidebar({ items, selectedItem, onItemSelect }: SidebarProps) {
  return (
    <nav className={styles.sidebar}>
      <ul className={styles.item}>
        {items.map((item, index) => (
          <li key={index}>
            <button className={`${styles.link} ${selectedItem?.title === item.title ? styles.active : ''}`} onClick={() => onItemSelect(item)} type="button">
              <span className={styles.number}>{String(index + 1).padStart(2, '0')}</span>
              <span className={styles.title}>{item.title}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

interface MobileSidebarProps {
  items: any[];
  selectedItem: any;
  onItemSelect: (item: any) => void;
}

export function MobileSidebar({ items, selectedItem, onItemSelect }: MobileSidebarProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isAnimating, setIsAnimating] = React.useState(false);

  const toggleSidebar = () => {
    if (!isOpen) {
      // Opening
      setIsOpen(true);
      setIsAnimating(true);
    } else {
      // Closing
      setIsAnimating(false);
      setTimeout(() => {
        setIsOpen(false);
      }, 300); // Match the CSS transition duration
    }
  };

  const handleItemSelect = (item: any) => {
    onItemSelect(item);
    // Close with animation
    setIsAnimating(false);
    setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };

  const handleOverlayClick = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };

  return (
    <div className={styles.mobileSidebar}>
      <button className={styles.toggleButton} onClick={toggleSidebar}>
        <p className={styles.toggleText}>MENU</p>
      </button>

      {isOpen && (
        <>
          <div className={`${styles.overlay} ${isAnimating ? styles.overlayVisible : ''}`} onClick={handleOverlayClick}></div>
          <div className={`${styles.sidebarContent} ${isAnimating ? styles.sidebarVisible : ''}`}>
            <div className={styles.sidebarHeader}>
              <p className={styles.toggleText}>INDEX</p>
              <button className={styles.closeButton} onClick={toggleSidebar}>
                <p className={styles.toggleText}>Close</p>
              </button>
            </div>
            <div className={styles.sidebarItems}>
              {items.map((item, index) => (
                <button key={index} className={`${styles.sidebarItem} ${selectedItem?.title === item.title ? styles.active : ''}`} onClick={() => handleItemSelect(item)}>
                  {item.title}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
