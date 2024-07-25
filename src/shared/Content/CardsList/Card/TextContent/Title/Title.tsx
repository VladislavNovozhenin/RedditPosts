import React, { useState } from 'react';
import styles from './title.css';
import { Link } from 'react-router-dom';

interface ITitleProps {
  title: string
  author: string,
  avatar: string,
  datePostUtc: number,
  previewImg: string,
  score: number,
  rating: number
  id: string

}

export function Title(props: ITitleProps) {

  const {
    title,
    id,
    author,
    avatar,
    datePostUtc,
    previewImg,
    score,
    rating,
  } = props;
  return (
    <h2 className={styles.title}>
      <Link
        to={`/posts/${id}`}
        className={styles.postLink}
        state={{
          title: title,
          rating: rating,
          score: score,
          previewImg: previewImg,
          author: author,
          avatar: avatar,
          datePostUtc: datePostUtc,
          id: id,
        }}>
        {title}
      </Link>
    </h2>
  );
}

