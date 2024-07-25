import React from 'react';
import styles from './username.css';

interface IUserNameProps {
  author: string
}

export function UserName({author}: IUserNameProps) {
  return (
      <a className={styles.username} href="#user-url" >{author}</a>
  );
}
