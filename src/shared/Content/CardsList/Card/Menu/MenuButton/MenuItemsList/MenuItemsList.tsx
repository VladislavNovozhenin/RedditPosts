import React, { useState, useRef } from 'react';
import styles from './menuitemslist.css';
import { Text, EColors } from '../../../../../../Text';
import { Icon } from '../../../../../../Icon';
import { Commentanswerform } from '../../../../../../Post/CommentAnswerForm';

interface IMenuListProps {
  postId?: string,
  score: number,
  divHidden?: React.CSSProperties,
  liHidden?: React.CSSProperties,
  ul?: React.CSSProperties,
  li?: React.CSSProperties,
  answerLiHidden?: React.CSSProperties,
}

export function MenuItemsList({ postId, score, divHidden, liHidden, ul, li, answerLiHidden}: IMenuListProps) {
  

  const ref = useRef<HTMLLIElement>(null);
  const [isCommentOpened, setIsCommentOpened] = useState(false);
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
    <ul className={styles.menuItemsList} style={ul}>
      <li className={`${styles.menuItem} ${styles.hidden}`} style={{ ...li, ...liHidden }}>
        <Icon name='comment' size={14} mobileSize={12} />
        <Text size={12} tabletSize={14} desktopSize={14} color={EColors.grey99}>
          {score !== 0
            ? `${commentNumber}`
            : 'Комментарии'}
        </Text>
      </li>

      <div className={`${styles.divider} ${styles.hidden}`} style={divHidden} />

      <li className={`${styles.menuItem} ${styles.hidden}`} style={{ ...li, ...answerLiHidden }} onClick={() => console.log(postId)} ref={ref}>
        <Icon name='comment' size={14} mobileSize={12} />
        <a className={styles.menuItemLink}  onClick={() => { setIsCommentOpened(true) }}>
          <Text size={12} tabletSize={14} desktopSize={14} color={EColors.grey99}>
            Ответить
          </Text>
        </a>
      </li>
      {isCommentOpened && (
        <Commentanswerform
          modalForm={{ top: (ref.current?.getBoundingClientRect().y || 0) + window.scrollY - 120, }}
          onClose={() => { setIsCommentOpened(false) }}
        />
      )}

      <li className={`${styles.menuItem} ${styles.hidden}`} style={li} >
        <Icon name='send' size={14} mobileSize={12} />
        <Text size={12} tabletSize={14} desktopSize={14} color={EColors.grey99}>
          Поделиться
        </Text>
      </li>

      <div className={`${styles.divider} ${styles.hidden}`} style={divHidden} />

      <li className={styles.menuItem} style={{ ...li, ...liHidden }}>
        <Icon name='block' size={14} mobileSize={12} />
        <Text size={12} tabletSize={14} desktopSize={14} color={EColors.grey99}>
          Скрыть
        </Text>
      </li>

      <div className={styles.divider} style={divHidden} />

      <li className={`${styles.menuItem} ${styles.hidden}`} style={{ ...li, ...liHidden }}>
        <Icon name='save' size={14} mobileSize={12} />
        <Text size={12} tabletSize={14} desktopSize={14} color={EColors.grey99}>
          Сохранить
        </Text>
      </li>

      <div className={`${styles.divider} ${styles.hidden}`} style={divHidden} />

      <li className={styles.menuItem} style={li}>
        <Icon name='warning' size={14} mobileSize={12} />
        <Text size={12} tabletSize={14} desktopSize={14} color={EColors.grey99}>
          Пожаловаться
        </Text>
      </li>
    </ul>
  );
}
