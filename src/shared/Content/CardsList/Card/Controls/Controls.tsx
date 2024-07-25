import React from 'react';
import styles from './controls.css';
import { KarmaCounter } from './KarmaCounter';
import { ComentsButton } from './ComentsButton';
import { Actions } from './Actions';

interface IControlsProps {
  rating: number
  score: number
}

export function Controls({rating, score}: IControlsProps) {
  return (
    <div className={styles.controls}>
      <KarmaCounter rating={rating} />
      <ComentsButton score={score} />
      <Actions />
    </div>
  );
}
