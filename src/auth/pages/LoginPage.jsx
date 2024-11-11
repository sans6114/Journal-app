import { Link as RouterLink } from 'react-router-dom';

import { Google } from '@mui/icons-material';
import {
  Button,
  Grid2,
  Link,
  TextField,
  Typography,
} from '@mui/material';

import { useForm } from '../../hooks/useForm';
import { AuthLayout } from '../layout/AuthLayout';

export const LoginPage = () => {
const {formState, onInputChange, onResetForm} = useForm({
  email: 'ejemplo@gmail.com',
  contraseña: '',
})

  return (
    <AuthLayout title='Login'>
        <form>
          <Grid2
            spacing={2}
            container>
            {/* correo */}
            <Grid2 item size={{ xs: 12 }}>
              <TextField
                label='Correo'
                type='email'
                placeholder='ejemplo@correo.com'
                fullWidth
              />
            </Grid2>
            {/* contraseña */}
            <Grid2 item size={{ xs: 12 }}>
              <TextField
                label='Contraseña'
                type='password'
                placeholder='Contraseña'
                fullWidth
              />
            </Grid2>
            {/* botones */}
            <Grid2
              container
              spacing={2}
              size={12}
              sx={{ mb: 2, mt: 2 }}
            >
              <Grid2 item size={{ xs: 12, sm: 6 }}>
                <Button variant="contained" fullWidth>
                  Login
                </Button>
              </Grid2>
              <Grid2 item size={{ xs: 12, sm: 6 }}>
                <Button variant="contained" fullWidth>
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
