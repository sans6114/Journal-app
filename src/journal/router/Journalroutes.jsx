import {
  Navigate,
  Route,
  Routes,
} from 'react-router';

import { JournalPage } from '../pages/JournalPage';

export const JournalRoute = () => {
    return (
        <Routes>
            <Route path='/' element={<JournalPage />} />
            <Route path='/*' element={<Navigate to='/' />} />
        </Routes>
    )
}
