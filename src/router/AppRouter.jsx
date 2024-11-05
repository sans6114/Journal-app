import {
  Route,
  Routes,
} from 'react-router';

import { AuthRoute } from '../auth/router/AuthRoute';
import { JournalRoute } from '../journal/router/Journalroutes';

export const AppRouter = () => {
    return (
        <Routes>
            {/* Login y Registro  */}
            <Route path='/auth/*' element={<AuthRoute/>} />
            {/* JounalApp  */}
            <Route path='/*' element={<JournalRoute/>} />
        </Routes>
    )
}
