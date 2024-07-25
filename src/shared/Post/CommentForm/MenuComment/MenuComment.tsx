import React from 'react';
import styles from './menucomment.css';
import { Text } from '../../../Text';
import { ArrowsIcon } from '../../../Icons/ArrowsIcon';
import { ImgIcon } from '../../../Icons/ImgIcon';
import { FileIcon } from '../../../Icons/FileIcon';
import { LoadIcon } from '../../../Icons/LoadIcon';
import { BookIcon } from '../../../Icons/BookIcon';
import { UpdateIcon } from '../../../Icons/UpdateIcon';
import { OvalIcon } from '../../../Icons/OvalIcon';
import { AudioIcon } from '../../../Icons/AudioIcon';
import { MessagesIcon } from '../../../Icons/MessagesIcon';
import { PencilIcon } from '../../../Icons/PencilIcon';
import { AIcon } from '../../../Icons/AIcon';
import { PdfIcon } from '../../../Icons/PdfIcon';

export function MenuComment() {
  return (
    <ul className={styles.menuItemsList}>
      <li className={styles.menuItem}>
        <ArrowsIcon />
      </li>
      
      <li className={styles.menuItem}>
        <ImgIcon />
      </li>

      <li className={styles.menuItem}>
        <FileIcon />
      </li>

      <li className={styles.menuItem} >
        <LoadIcon />
      </li>

      <li className={styles.menuItem}>
        <BookIcon />
      </li>
      
      <li className={styles.menuItem}>
        <UpdateIcon />
      </li>

      <li className={styles.menuItem}>
        <OvalIcon />
      </li>

      <li className={styles.menuItem}>
        <AudioIcon />
      </li>

      <li className={styles.menuItem} >
        <MessagesIcon />
      </li>

      <li className={styles.menuItem}>
        <PencilIcon />
      </li>
      <li className={styles.menuItem} >
        <AIcon />
      </li>

      <li className={styles.menuItem}>
        <PdfIcon />
      </li>
    </ul>
  );
}
