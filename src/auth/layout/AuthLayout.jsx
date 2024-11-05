import {
  Grid2,
  Typography,
} from '@mui/material';

export const AuthLayout = ({children, title = ''}) => {
    return (
        <Grid2
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
        >
            <Grid2 item

                className='box-shadow'
                alignItems='center'
                size={{ xs: 12, md: 6 }}
                sx={{ backgroundColor: 'white', padding: 3, borderRadius: 2 }}
            >
                <Typography variant='h5' sx={{ mb: 2 }}>{title}</Typography>
                {/* my slot, children */}
                {children}
            </Grid2>
        </Grid2>
    )
}
