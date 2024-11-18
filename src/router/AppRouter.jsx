import { useSelector } from 'react-redux';
import {
  Route,
  Routes,
} from 'react-router';

import { AuthRoute } from '../auth/router/AuthRoute';
import { JournalRoute } from '../journal/router/Journalroutes';
import { CheckingAuth } from '../ui';

export const AppRouter = () => {
    const { status } = useSelector(state => state.auth)

    if (status === 'checking') return (
    <CheckingAuth/>
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
