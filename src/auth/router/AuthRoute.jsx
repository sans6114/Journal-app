import {
  Navigate,
  Route,
  Routes,
} from 'react-router';

import {
  LoginPage,
  RegisterPage,
} from '../pages/index';

export const AuthRoute = () => {
    return (
        <Routes>
            <Route path='login' element={<LoginPage/>} />
            <Route path='register' element={<RegisterPage/>} />


            <Route path='/*' element={<Navigate to='/auth/login' />}/>
        </Routes>
    )
}
