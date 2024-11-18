import { Grid2 } from '@mui/material';

import { LoaderComponent } from './LoaderComponent';

export const CheckingAuth = () => {


    return (
        <Grid2
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
        >
                <LoaderComponent />
        </Grid2>
    )
}