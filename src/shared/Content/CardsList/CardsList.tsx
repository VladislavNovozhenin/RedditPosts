import React, { useEffect, useRef, useState } from 'react';
import styles from './cardslist.css';
import { Card } from './Card';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/reducer';
import { Outlet } from 'react-router-dom';

export function CardsList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorLoading, setErrorLoading] = useState('');
  const [nextAfter, setNextAfter] = useState('');
  const [count, setCount] = useState(0);
  const token = useSelector<RootState, string>(state => state.token)
  const bottomOfList = useRef<HTMLDivElement>(null)
  const showMore = useRef<HTMLButtonElement>(null)
 
  useEffect(() => {
    if (!token) return

    async function load() {

      if (bottomOfList.current && showMore.current) {
        showMore.current.style.display = 'none'
      }

      setLoading(true)
      setErrorLoading('')
      try {
        const { data: { data: { after, children } } } = await axios.get('https://oauth.reddit.com/best.json?sr_detail=true', {
          headers: { Authorization: `bearer ${token}` },
          params: {
            limit: 1,
            after: nextAfter
          }
        })
    
        setNextAfter(after)
        setPosts(prevChildren => prevChildren.concat(...children.map((el: any) => {
          return {
            id: el.data.id,
            title: el.data.title,
            author: el.data.author,
            rating: el.data.ups,
            score: el.data.num_comments,
            datePostUtc: el.data.created_utc * 1000,
            avatar: el.data.sr_detail.icon_img
              ? el.data.sr_detail.icon_img
              : "https://imageup.ru/img299/4554541/avatar.jpg",
            previewImg: el.data.previewImg
              ? el.data.previewImg.images?.[0].source.url.replace(/(&amp\;)/g, '&')
              : "https://imageup.ru/img62/4554540/prev.jpg"
          }
        })))
       
      }
      catch (error) {
        setErrorLoading(String(error));
      }
      setLoading(false)
    }

    showMore.current?.addEventListener('click', handleClick)

    function handleClick() {
      load()
      setCount(count + 1);
    }

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        if (count % 2 !== 0 || count === 0) {
          if (bottomOfList.current && showMore.current) {
            load()
            setCount(count + 1);
            
          }
        }
        else if (bottomOfList.current && showMore.current) {
          showMore.current.style.cssText = 'display: flex; margin: 0 auto'
        }
      }

    }, {
      rootMargin: '10px',
    });

    if (bottomOfList.current) {
      observer.observe(bottomOfList.current);
    }

    return () => {
      if (bottomOfList.current && showMore.current) {
        observer.unobserve(bottomOfList.current);
        showMore.current.removeEventListener('click', handleClick)
      }
    }
  
  }, [ token, nextAfter])

  return (
    <ul className={styles.cardsList}>
      {posts.length === 0 && !loading && !errorLoading && (
        <div style={{ textAlign: 'center' }}>Нет ни одного поста</div>
      )}
      {posts.map((post: any) => (
        <Card
          key={post.id}
          id={post.id}
          title={post.title}
          author={post.author}
          avatar={post.avatar}
          previewImg={post.previewImg}
          rating={post.rating}
          score={post.score}
          datePostUtc={post.datePostUtc}
        />
      ))}
      <div ref={bottomOfList}></div>
      <button style={{ display: 'none' }} ref={showMore}>Показать еще</button>
      {loading && (
        <div style={{ textAlign: 'center' }}>Загрузка...</div>
      )}
      {errorLoading && (
        <div role='alert' style={{ textAlign: 'center' }}>{errorLoading}</div>
      )}
      <Outlet/>
    </ul>
  );
}

