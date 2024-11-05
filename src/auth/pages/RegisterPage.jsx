import { Link as RouterLink } from 'react-router-dom';

import {
  Button,
  Grid2,
  Link,
  TextField,
} from '@mui/material';

import { AuthLayout } from '../layout/AuthLayout';

export const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
            <form>
              
          <Grid2
            spacing={2}
            container>
              {/* nombre */}
            <Grid2 item size={{ xs: 12 }}>
              <TextField
                label='Nombre'
                type='text'
                placeholder='Tu nombre'
                fullWidth
              />
            </Grid2>
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
              <Grid2 item size={12}>
                <Button variant="contained" fullWidth>
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
