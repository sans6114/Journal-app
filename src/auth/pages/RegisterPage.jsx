import {
  useMemo,
  useState,
} from 'react';

import {
  useDispatch,
  useSelector,
} from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';

import {
  Alert,
  Button,
  Grid2,
  Link,
  TextField,
  Typography,
} from '@mui/material';

import { useForm } from '../../hooks/useForm';
import { registerUser } from '../../store/auth';
import { AuthLayout } from '../layout/AuthLayout';

const formData = {
  displayName: '',
  email: '',
  contraseña: ''
}


const formValidations = {
  displayName: [(value) => value.length >= 1, 'El campo "displayName" es obligatorio'],
  email: [(value) => value.includes('@'), 'El campo "email" debe contener un email valido'],
  contraseña: [(value) => value.length >= 6, 'El campo "contraseña" debe de tener al menos 6 caracteres']
}


export const RegisterPage = () => {
  const dispatch = useDispatch()
  const [haveSubmitted, setHaveSubmitted] = useState(false)
  const { status, errorMessage } = useSelector(state => state.auth)
  const isAuth = useMemo(() => status === 'checking', [status])

  const { formState, displayName, email, contraseña, onInputChange, displayNameValid, emailValid, contraseñaValid, onResetForm, isFormValid } = useForm(formData, formValidations)

  //submit del form
  const onSubmitForm = (e) => {
    e.preventDefault()
    if (!isFormValid) return
    dispatch(registerUser({ displayName, email, contraseña }))
    setHaveSubmitted(true)
    onResetForm()
  }



  return (
    <AuthLayout title="Register">
      <form className='animate__animated animate__fadeIn animate__faster' onSubmit={onSubmitForm}>
        <Typography variant='h5' sx={{ mb: 4 }}>{isFormValid ? 'formulario valido' : 'formulario invalido'}</Typography>
        <Grid2
          spacing={2}
          container>
          {/* nombre */}
          <Grid2 item size={{ xs: 12 }}>
            <TextField
              label='Nombre'
              value={displayName}
              name='displayName'
              onChange={onInputChange}
              type='text'
              placeholder='Tu nombre'
              fullWidth
              error={!!displayNameValid && haveSubmitted}
              helperText={displayNameValid}
            />
          </Grid2>
          {/* correo */}
          <Grid2 item size={{ xs: 12 }}>
            <TextField
              label='Correo'
              value={email}
              name='email'
              onChange={onInputChange}
              type='email'
              placeholder='ejemplo@correo.com'
              fullWidth
              error={!!emailValid && haveSubmitted}
              helperText={emailValid}
            />
          </Grid2>
          {/* contraseña */}
          <Grid2 item size={{ xs: 12 }}>
            <TextField
              label='contraseña'
              type='password'
              value={contraseña}
              name='contraseña'
              onChange={onInputChange}
              placeholder='Contraseña'
              fullWidth
              error={!!displayNameValid && haveSubmitted}
              helperText={contraseñaValid}
            />
          </Grid2>
          {/* error on submit  */}
          <Grid2
            container
            spacing={2}
            size={{ xs: 12 }}
            sx={{ mb: 2, mt: 1 }}
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
            <Grid2 item size={12}>
              <Button type='submit' disabled={isAuth} variant="contained" fullWidth>
                Crear cuenta
              </Button>
            </Grid2>
          </Grid2>

        </Grid2>
        <Grid2
          container
          direction='row'
          justifyContent='end'
        >
          <Link component={RouterLink} color='inherit' to='/auth/login'>
            Iniciar sesion en tu cuenta
          </Link>
        </Grid2>
      </form>
    </AuthLayout>
  )
}
