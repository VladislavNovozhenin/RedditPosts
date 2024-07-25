import React from 'react';
import styles from './down.css';
import { DownIcon } from '../../../../../../Icons/DownIcon';

interface IDownProps {
  downStyle?: React.CSSProperties
}

export function Down({downStyle}: IDownProps) {
  return (
    <button className={styles.down} style={downStyle}>
      <DownIcon />
    </button>
  );
}
