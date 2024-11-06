import { StarOutline } from '@mui/icons-material';
import {
  Grid2,
  Typography,
} from '@mui/material';

export const NothingSelectedView = () => {
    return (
        <Grid2
            container
            spacing={0}
            direction='column'
            alignItems='center'
            justifyContent='center'
            sx={{ minHeight: 'calc(100vh - 110px)', backgroundColor: 'primary.main', borderRadius: 5, textAlign: 'center' }}
        >
            <Grid2
                item
                size={{ xs: 12 }}
            >
                <StarOutline sx={{ fontSize: 100, color: 'white' }} />
            </Grid2>

            <Grid2
                item
                size={{ xs: 12 }}
            >
                <Typography color='white' variant='h5'>Crea una entrada</Typography>
            </Grid2>
        </Grid2>
    )
}
