import React from 'react';
import styles from './notfound.css';
import ReactDOM from 'react-dom';

export function NotFound() {
  const node = document.querySelector('#error_root');
  if (!node) return null


  return ReactDOM.createPortal((
    <div className={styles.errorBlock}>
      <div className={styles.error}>404 — страница не найдена</div>
    </div>

  ), node);

}
