import React from 'react';
import styles from './userlink.css';
import { Avatar } from './Avatar';
import { UserName } from './UserName';

interface IUserLinkProps {
  author: string,
  avatar: string,
  divUserLinkStyle?: React.CSSProperties
}

export function UserLink({author, avatar, divUserLinkStyle}: IUserLinkProps) {
  return (
    <div className={styles.userLink} style={divUserLinkStyle}>
      <Avatar avatar={avatar}/>
      <UserName author={author} />
    </div>
  );
}
