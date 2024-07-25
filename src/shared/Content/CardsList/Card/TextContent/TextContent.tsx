import React from 'react';
import styles from './textcontent.css';
import { MetaData } from './MetaData';
import { Title } from './Title';

interface ITextContentProps {
  title: string,
  author: string,
  avatar: string,
  datePostUtc: number,
  rating: number
  score: number,
  previewImg: string
  id: string

}

export function TextContent(props: ITextContentProps) {
  const {
    title,
    author,
    avatar,
    datePostUtc,
    rating,
    score,
    previewImg,
    id
  } = props
  return (
    <div className={styles.textContent}>
      <MetaData
        author={author}
        avatar={avatar}
        datePostUtc={datePostUtc} />
      <Title
        author={author}
        avatar={avatar}
        datePostUtc={datePostUtc}
        title={title}
        rating={rating}
        score={score}
        previewImg={previewImg}
        id={id}
      />
    </div>
  );
}
