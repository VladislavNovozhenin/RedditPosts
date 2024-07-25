import React from 'react';
import styles from './karmacounter.css';
import { Up } from './Up';
import { Down } from './Down';

interface IKaramaCounterProps {
  rating?: number
  spanStyle?: React.CSSProperties
  divStyle?: React.CSSProperties
  downStyle?: React.CSSProperties
}

export function KarmaCounter({ rating, spanStyle, divStyle, downStyle }: IKaramaCounterProps) {
  return (
    <div className={styles.karmaCounter} style={divStyle}>
      <Up />
      <span className={styles.karmaValue} style={spanStyle}>{rating}</span>
      <Down downStyle={downStyle}/>
    </div>

  );
}
