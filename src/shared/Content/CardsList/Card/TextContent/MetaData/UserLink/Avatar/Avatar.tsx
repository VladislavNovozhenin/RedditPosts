import React from 'react';
import styles from './avatar.css';
import avatarImg from './avatar.png'

interface IAvatarProps {
  avatar: string
}

export function Avatar({avatar}: IAvatarProps) {
  return (
    <img className={styles.avatar} src={avatar} alt="avatar" />
  );
}
