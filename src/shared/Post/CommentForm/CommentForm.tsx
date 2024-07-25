
import React, {FormEvent, ChangeEvent } from 'react';
import styles from './commentform.css';
import { MenuComment } from './MenuComment';
import { useUserData } from '../../../hooks/useUserData';
import { textDate} from '../../../store/atom';
import { useAtom } from 'jotai';

export function CommentForm() {

  const [text, setText] = useAtom(textDate)
  const {data} = useUserData()
  
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setText(event.target.value)
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea required className={styles.input}  value={text} onChange={handleChange}/>
      <div className={styles.placeholderName}>{data.name},<span> оставьте ваш комментарий</span></div>
      <div className={styles.content}>
        <MenuComment />
        <button type='submit' className={styles.button}>Комментировать</button>
      </div>

    </form>
  );
}
