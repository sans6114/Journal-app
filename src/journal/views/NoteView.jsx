import moment from 'moment';
import { useSelector } from 'react-redux';

import { SaveAltOutlined } from '@mui/icons-material';
import {
  Button,
  Grid2,
  TextField,
  Typography,
} from '@mui/material';

import { ImageGallery } from '../components';

export const NoteView = () => {
    const { active} = useSelector(state => state.journal)
    console.log(active)
    const formattedDate = moment(active.date).format('DD/MM/YYYY HH:mm')

    return (
        <Grid2
            className='animate__animated animate__fadeIn animate__faster'
            container direction='column'>
            {/* contenedor 1 */}
            <Grid2
                container
                alignItems='center'
                direction='row'
                justifyContent='space-between'

            >
                <Grid2 item>
                    <Typography fontSize={{ xs: 20, md: 39 }} fontWeight='light'>{formattedDate}</Typography>
                </Grid2>
                <Grid2 item>

                    <Button>
                        <SaveAltOutlined />
                        <Typography sx={{ display: { xs: 'none', md: 'block' }, ml: 1 }} fontSize={15}>Guardar</Typography>
                    </Button>
                </Grid2>
                {/* content of my note */}
            </Grid2>
            {/* contenedor 2 */}
            <Grid2 sx={{ mt: 3 }} container direction='column' alignContent='center' justifyContent='center'>
                <TextField label='título' variant='filled' type='text' placeholder='Nota del dia' fullWidth sx={{ border: 'none', mb: 2 }} />
                <TextField label='descripción' multiline variant='filled' type='text' placeholder='Descrición de tu nota' fullWidth sx={{ border: 'none', mb: 2 }} minRows={5} />
            </Grid2>
            {/* componente gallery  */}
            <ImageGallery />
        </Grid2>

    )
}
