import { useMemo } from 'react';

import {
  useDispatch,
  useSelector,
} from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';

import { Google } from '@mui/icons-material';
import {
  Alert,
  Button,
  Grid2,
  Link,
  TextField,
  Typography,
} from '@mui/material';

import { useForm } from '../../hooks/useForm';
import {
  loginEmail,
  registerAuthGoogle,
} from '../../store/auth';
import { AuthLayout } from '../layout/AuthLayout';

const formData = {
    email: '',
    contraseña: '',
}

export const LoginPage = () => {
  const { status, errorMessage } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const { email, contraseña, onInputChange, onResetForm } = useForm(formData)
  const isAuth = useMemo(() => status === 'checking', [status])


  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(loginEmail({ email, contraseña }))
    onResetForm()
  }

  const onGoogleSignIn = () => {
    dispatch(registerAuthGoogle())
  }

  return (
    <AuthLayout title='Login'>
      <form className='animate__animated animate__fadeIn animate__faster' onSubmit={onSubmit}>
        <Grid2
          spacing={2}
          container>
          {/* correo */}
          <Grid2 item size={{ xs: 12 }}>
            <TextField
              label='Correo'
              name='email'
              value={email}
              type='email'
              placeholder='ejemplo@correo.com'
              onChange={onInputChange}
              fullWidth
            />
          </Grid2>
          {/* contraseña */}
          <Grid2 item size={{ xs: 12 }}>
            <TextField
              label='Contraseña'
              name='contraseña'
              value={contraseña}
              onChange={onInputChange}
              type='password'
              placeholder='Contraseña'
              fullWidth
            />
          </Grid2>
          {/* error on submit  */}
          <Grid2
            container
            spacing={2}
            size={{ xs: 12 }}
            sx={{ mb: 1, mt: 1 }}
          >
            <Grid2
              item
              size={{ xs: 12 }}
              display={!!errorMessage ? '' : 'none'}
            >
              <Alert severity="error">{errorMessage}</Alert>
            </Grid2>

          </Grid2>

          {/* botones */}
          <Grid2
            container
            spacing={2}
            size={12}
            sx={{ mb: 2, mt: 2 }}
          >
            <Grid2 item size={{ xs: 12, sm: 6 }}>
              <Button disabled={isAuth} type='submit' variant="contained" fullWidth>
                Login
              </Button>
            </Grid2>
            <Grid2 item size={{ xs: 12, sm: 6 }}>
              <Button disabled={isAuth} onClick={onGoogleSignIn} variant="contained" fullWidth>
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid2>
          </Grid2>

        </Grid2>
        <Grid2
          container
          direction='row'
          justifyContent='end'
        >
          <Link component={RouterLink} color='inherit' to='/auth/register'>
            Crear una cuenta
          </Link>
        </Grid2>
      </form>
    </AuthLayout>
  )
}
