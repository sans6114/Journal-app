import {
  Navigate,
  Route,
  Routes,
} from 'react-router';

import { AuthRoute } from '../auth/router/AuthRoute';
import { useAuthCheck } from '../hooks/useAuthCheck';
import { JournalRoute } from '../journal/router/Journalroutes';
import { CheckingAuth } from '../ui';

export const AppRouter = () => {
  const status = useAuthCheck()

  if (status === 'checking') return (
    <CheckingAuth />
  )

  return (
    <Routes>
      {
        (status === 'authorized')
          ? <Route path='/*' element={<JournalRoute />} />
          : <Route path='/auth/*' element={<AuthRoute />} />
      }
      <Route path='/*' element={<Navigate to={'auth/login'} />} />
    </Routes>
  )
}
