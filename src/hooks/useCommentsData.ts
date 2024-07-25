import {useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducer';

 export function UseCommentsData(id: string) {
    const [comments, setComments] = useState([]);
    const token = useSelector<RootState, string>(state => state.token)

    useEffect(() => {
        if (token && token !== "undefined") {
            axios.get(`https://oauth.reddit.com/comments/${id}`, {
                headers: { Authorization: `bearer ${token}` }
            })
                .then((resp) => {
                    const commentsData = (resp.data[1].data.children);
                    setComments(commentsData.map((el:any) => {
                        return {
                            bodyComment: el.data.body,
                            authorComment: el.data.author,
                            createdComment: el.data.created_utc*1000,
                            idComment: el.data.id,
                            answerComment: el.data.replies   
                        }
                    }))
                })
                .catch(console.log);
        }
    }, [token])
    return [comments]
}