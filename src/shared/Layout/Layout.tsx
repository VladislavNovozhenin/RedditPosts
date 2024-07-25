import React from 'react';
import styles from './layout.css';
import { Provider } from 'jotai'

interface ILayoutProps {
  children?: React.ReactNode;
}

export function Layout({ children }: ILayoutProps) {
  return (
    <Provider>
      <div className={styles.layout}>
        {children}
      </div>
    </Provider>

  );
}



