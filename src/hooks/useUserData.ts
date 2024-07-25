import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducer';
import { useDispatch } from 'react-redux';
import { MeRequestAsync } from '../store/me/actions';

 interface IUserData {
  name?: string;
  iconImg?: string;
  loading?: boolean
}

export function useUserData() {

  const data = useSelector<RootState, IUserData>(state => state.me.data)
  const token = useSelector<RootState, string>(state => state.token)
  const dispatch = useDispatch<any>()

  useEffect(() => {
    if (!token) return
    if (token && token !== "undefined") {
      dispatch(MeRequestAsync());
    }
    
  }, [token])

  return {
    data,
  }
} 
