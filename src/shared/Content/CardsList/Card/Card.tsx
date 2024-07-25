import React from 'react';
import styles from './card.css';
import { TextContent } from './TextContent';
import { Preview } from './Preview';
import { Controls } from './Controls';
import { Menu } from './Menu';

interface ICardProps {
  id: string
  title: string,
  author: string,
  avatar: string,
  previewImg: string,
  rating: number,
  score: number,
  datePostUtc: number,
}

export function Card(props: ICardProps) {
  const {
    id, 
    title, 
    author, 
    avatar, 
    previewImg, 
    rating, 
    score,
    datePostUtc,
  } = props;
 


  return (
    <li key = {id} className={styles.card}>
      <TextContent
      id={id}
      title={title} 
      author={author} 
      avatar={avatar} 
      datePostUtc={datePostUtc} 
      previewImg={previewImg} 
      rating={rating} 
      score={score} />
      <Preview previewImg={previewImg} />
      <Controls rating={rating} score={score} />
      <Menu />
    </li>
  );
}

