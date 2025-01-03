import { useEffect } from 'react';

import { onAuthStateChanged } from 'firebase/auth';
import {
  useDispatch,
  useSelector,
} from 'react-redux';

import { journalAuth } from '../firebase';
import {
  login,
  logout,
} from '../store/auth';
import { getNoteFromStorageThunk } from '../store/journal';

export const useAuthCheck = () => {
  const { status } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged(journalAuth, async (user) => {
      if (!user) return dispatch(logout())
        const {uid, email, displayName, photoURL} = user
      dispatch(login({uid, email, displayName, photoURL}))
      dispatch(getNoteFromStorageThunk())
    })
  }, [])
  return status
}