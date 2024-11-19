import { useEffect } from 'react';

import { onAuthStateChanged } from 'firebase/auth';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import {
  Route,
  Routes,
} from 'react-router';

import { AuthRoute } from '../auth/router/AuthRoute';
import { journalAuth } from '../firebase';
import { JournalRoute } from '../journal/router/Journalroutes';
import {
  loginEmail,
  logout,
} from '../store/auth';
import { CheckingAuth } from '../ui';

export const AppRouter = () => {
    const { status } = useSelector(state => state.auth)
    const dispatch = useDispatch()

    useEffect(() => {
        onAuthStateChanged(journalAuth, async (user) => {
            console.log(user)
            if (!user) return dispatch(logout())
            dispatch(loginEmail(user))
        })
    }, [])

    if (status === 'checking') return (
        <CheckingAuth />
    )

    return (
        <Routes>
            {/* Login y Registro  */}
            <Route path='/auth/*' element={<AuthRoute />} />
            {/* JounalApp  */}
            <Route path='/*' element={<JournalRoute />} />
        </Routes>
    )
}
