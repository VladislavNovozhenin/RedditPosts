import React from 'react';
import styles from './menu.css';
import { MenuButton } from './MenuButton';

export function Menu() {
  return (
    <div className={styles.menu}>
      <MenuButton />
    </div>
  );
}
