import {
  useEffect,
  useMemo,
} from 'react';

import moment from 'moment';
import {
  useDispatch,
  useSelector,
} from 'react-redux';

import { SaveAltOutlined } from '@mui/icons-material';
import {
  Button,
  Grid2,
  TextField,
  Typography,
} from '@mui/material';

import { useForm } from '../../hooks/useForm';
import {
  setActiveNote,
  updateNoteThunk,
} from '../../store/journal';
import { ImageGallery } from '../components';

export const NoteView = () => {
    const dispatch = useDispatch()
    const { active: actualNote } = useSelector(state => state.journal)
    const { title, body, date, formState, onInputChange } = useForm(actualNote)
    //formatear mi fecha de creacion de la nota
    const formattedDate = useMemo(() => moment(date).format('MMMM Do YYYY, h:mm:ss a'), [date])
    //actualizar mi nota en el state
    useEffect(() => {
        dispatch(setActiveNote(formState))
    }, [formState])

    const onSaveNote = () => {
        dispatch(updateNoteThunk())
    }


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

                    <Button
                    onClick={onSaveNote}
                    >
                        <SaveAltOutlined />
                        <Typography sx={{ display: { xs: 'none', md: 'block' }, ml: 1 }} fontSize={15}>Guardar</Typography>
                    </Button>
                </Grid2>
                {/* content of my note */}
            </Grid2>
            {/* contenedor 2 */}
            <Grid2 sx={{ mt: 3 }} container direction='column' alignContent='center' justifyContent='center'>
                <TextField name='title' value={title} onChange={onInputChange} label='título' variant='filled' type='text' placeholder='Nota del dia' fullWidth sx={{ border: 'none', mb: 2 }} />
                <TextField name='body' value={body} onChange={onInputChange} label='descripción' multiline variant='filled' type='text' placeholder='Descrición de tu nota' fullWidth sx={{ border: 'none', mb: 2 }} minRows={5} />
            </Grid2>
            {/* componente gallery  */}
            <ImageGallery />
        </Grid2>

    )
}
