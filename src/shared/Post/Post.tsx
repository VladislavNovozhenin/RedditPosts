import React, { useEffect, useRef} from 'react';
import styles from './post.css';
import ReactDOM from 'react-dom';
import { CommentForm } from './CommentForm';
import { MetaData } from '../Content/CardsList/Card/TextContent/MetaData';
import { KarmaCounter } from '../Content/CardsList/Card/Controls/KarmaCounter';
import { Text } from '../Text';
import { Break } from '../Break';
import { CommentList } from './CommentList';
import { MenuItemsList } from '../Content/CardsList/Card/Menu/MenuButton/MenuItemsList';
import { EColors } from '../Text';
import { UseCommentsData } from '../../hooks/useCommentsData';
import { useLocation, useNavigate} from 'react-router-dom';

export function Post() {

  const { state } = useLocation()
  const [coments] = UseCommentsData(state.id)
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate()

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (event.target instanceof Node && !ref.current?.contains(event.target)) {
        navigate('/posts')
      }
    }
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    }
  }, []);

  const node = document.querySelector('#modal_root');
  if (!node) return null

  return ReactDOM.createPortal((
    <div className={styles.modal} ref={ref}>
      <div className={styles.titleContainer}>
        <KarmaCounter
          rating={state.rating}
          divStyle={{ display: 'flex', flexDirection: 'column' }}
          spanStyle={{ paddingLeft: '0' }}
          downStyle={{ paddingLeft: '0' }} />
        <Break size={12} />
        <div className={styles.titleContainerRight}>
          <h2 className={styles.title}>{state.title}</h2>
          <MetaData author={state.author} avatar={state.avatar} datePostUtc={state.datePostUtc} />
        </div>
      </div>
      <Break size={12} top={true} />
      <div className={styles.content}>
        <p className={styles.contentDescr}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione harum dolorum adipisci at perferendis, exercitationem quibusdam minima voluptatibus esse pariatur natus numquam corporis neque aperiam ipsum delectus. Reiciendis, et laost.</p>
        <Break size={12} top={true} />
        <img src={state.previewImg} className={styles.previewImg} alt="preview" />
        <Break size={12} top={true} />
        <div className={styles.divider}></div>
        <Break size={12} top={true} />
        <div className={styles.menuContainer}>
          <MenuItemsList
            score={state.score}
            divHidden={{ display: 'none' }}
            answerLiHidden={{ display: 'none' }}
            ul={{ paddingLeft: '0', justifyContent: 'space-between', padding: '0', flexDirection: 'row', width: '80%' }}
            li={{ padding: '0' }} />
          <Text size={12} tabletSize={12} desktopSize={14} color={EColors.grey99}>
            ---------
          </Text>
        </div>
        <Break size={20} top={true} />
        <CommentForm />
        <Break size={12} top={true} />
        <div className={styles.divider}></div>
        <Break size={12} top={true} />
        <ul>
          {coments.map((comment: any) => (
            <CommentList
              key={comment.idComment}
              bodyComment={comment.bodyComment}
              authorComment={comment.authorComment}
              createdComment={comment.createdComment}
              idComment={comment.idComment}
              answerComment={comment.answerComment}
            />
          ))}
        </ul>
      </div>
    </div>
  ), node);
}

