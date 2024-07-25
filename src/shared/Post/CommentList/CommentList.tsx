import React from 'react';
import styles from './commentlist.css';
import { KarmaCounter } from '../../Content/CardsList/Card/Controls/KarmaCounter';
import { Break } from '../../Break';
import { MetaData } from '../../Content/CardsList/Card/TextContent/MetaData';
import { MenuItemsList } from '../../Content/CardsList/Card/Menu/MenuButton/MenuItemsList';

interface ICommentListProps {
  bodyComment: string,
  authorComment: string,
  createdComment: number
  idComment?: string,
  answerComment?: any,
}

export function CommentList({ answerComment, bodyComment, authorComment, createdComment, idComment }: ICommentListProps) {
  return (
    <li key={idComment} className={styles.commentItem}>
      <div className={styles.commentItemLeft}>
        <KarmaCounter
          divStyle={{ display: 'flex', flexDirection: 'column' }}
          spanStyle={{ display: 'none' }}
          downStyle={{ paddingLeft: '0' }} />
        <Break size={8} top={true} />
        <div className={styles.divider} />
      </div>
      <div className={styles.commentItemBody}>
        <MetaData
          avatar='https://styles.redditmedia.com/t5_9iiuta/styles/profileIcon_snooab331651-3a90-401c-b63d-b4f47b88aa33-headshot.png?width=256&height=256&crop=256:256,smart&s=0350d4236ca459faef433755268e2b4d77fe4db9'
          datePostUtc={createdComment}
          author={authorComment}
          divUserLinkStyle={{ padding: '0 6px 0 0' }}
          spanMetaDataStyle={{ display: 'none' }}
          divMetaDataStyle={{ flexFlow: "row nowrap", justifyContent: 'flex-start' }} />
        <Break size={8} top={true} />
        <p className={styles.commentItemDescr}>
          {bodyComment}
        </p>
        <Break size={8} top={true} />
        <MenuItemsList
          score={0}
          liHidden={{ display: 'none' }}
          divHidden={{ display: 'none' }}
          ul={{ paddingLeft: '0', padding: '0', flexDirection: 'row', width: '80%' }}
          li={{ padding: '0', marginRight: '7px', display: 'flex' }} />
      </div>
    </li>
  )
}