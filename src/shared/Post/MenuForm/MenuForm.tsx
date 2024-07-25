import React from 'react';
import styles from './menuform.css';
import { CommentIcon, SendIcon, BlockIcon, SaveIcon, WarningIcon } from '../../Icons';
import { Text, EColors } from '../../Text';

interface IMenuFormProps {
  score: number,
}

export function MenuForm({ score, }: IMenuFormProps) {
  const lastDigit2Str = String(score).slice(-2);
  const lastDigit2Num = Number(lastDigit2Str); 
  let commentNumber = ((lastDigit2Num === 11) || (lastDigit2Num === 12) || (lastDigit2Num === 13) || (lastDigit2Num === 14))
    ? `${score} комментариев`
    : score % 10 === 1
      ? `${score} комментарий`
      : (score % 10 === 2) || (score % 10 === 3) || (score % 10 === 4)
        ? `${score} комментария`
        : `${score} комментариев`
  return (
    <div className={styles.menuContainer}>
      <ul className={styles.menuItemsList}>
        <li className={styles.menuItem}>
          <CommentIcon />
          <Text size={12} tabletSize={12} desktopSize={14} color={EColors.grey99}>
            {commentNumber}
          </Text>
        </li>

        <li className={styles.menuItem}>
          <SendIcon />
          <Text size={12} tabletSize={12} desktopSize={14} color={EColors.grey99}>
            Поделиться
          </Text>
        </li>

        <li className={styles.menuItem}>
          <BlockIcon />
          <Text size={12} tabletSize={12} desktopSize={14} color={EColors.grey99}>
            Скрыть
          </Text>
        </li>

        <li className={styles.menuItem} >
          <SaveIcon />
          <Text size={12} tabletSize={12} desktopSize={14} color={EColors.grey99}>
            Сохранить
          </Text>
        </li>

        <li className={styles.menuItem}>
          <WarningIcon />
          <Text size={12} tabletSize={12} desktopSize={14} color={EColors.grey99}>
            Пожаловаться
          </Text>
        </li>
      </ul>
      <Text size={12} tabletSize={12} desktopSize={14} color={EColors.grey99}>
        ---------
      </Text>
    </div>
  );
}
