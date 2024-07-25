import React from 'react';
import styles from './menubutton.css';
import { MenuIcon } from '../../../../../Icons';
import { Dropdown } from '../../../../Dropdown';
import { MenuItemsList } from './MenuItemsList';
import { Text, EColors } from '../../../../../Text';

export function MenuButton() {
  
  return (
    <Dropdown
      button={
        <button className={styles.menuButton} >
          <MenuIcon />
        </button>
      }
    >
      <div className={styles.dropdown}  >
        <MenuItemsList
        postId='1234' 
        score={0}
        answerLiHidden={{ display: 'none' }}/>
        <button className={styles.closeButton} >
          <Text mobileSize={12} size={14} color={EColors.grey66}>
            Закрыть
          </Text>
        </button>
      </div>
    </Dropdown>
  );
}
