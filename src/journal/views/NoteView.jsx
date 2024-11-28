import 'sweetalert2/dist/sweetalert2.css';

import {
  useEffect,
  useMemo,
  useRef,
} from 'react';

import moment from 'moment';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import Swal from 'sweetalert2';

import {
  DeleteOutline,
  SaveAltOutlined,
  UploadFileOutlined,
} from '@mui/icons-material';
import {
  Alert,
  Button,
  Grid2,
  IconButton,
  TextField,
  Typography,
} from '@mui/material';

import { useForm } from '../../hooks/useForm';
import {
  deleteNoteByIdThunk,
  setActiveNote,
  updateNoteThunk,
  uploadFilesThunk,
} from '../../store/journal';
import { ImageGallery } from '../components';

export const NoteView = () => {
    const dispatch = useDispatch()
    const inputRef = useRef()
    const { active: actualNote, messageSaved, isSaving } = useSelector(state => state.journal)
    const { title, body, date, formState, onInputChange } = useForm(actualNote)
    //formatear mi fecha de creacion de la nota
    const formattedDate = useMemo(() => moment(date).format('MMMM Do YYYY, h:mm:ss a'), [date])
    const hasImages = useMemo(() => actualNote.imageUrls.length > 0, [actualNote.imageUrls])
    //actualizar mi nota en el state
    useEffect(() => {
        dispatch(setActiveNote(formState))
    }, [formState])

    useEffect(() => {
        if (messageSaved === '') return
        Swal.fire({
            title: 'Update note!',
            text: messageSaved,
            icon: 'success',
        })
    }, [messageSaved])

    const onSaveNote = () => {
        dispatch(updateNoteThunk())
    }

    const onDeleteNote = () => {
        dispatch(deleteNoteByIdThunk())
    }

    const onInputFileChange = ({ target }) => {
        if (target.files === 0) return
        console.log('uploading files...')
        dispatch(uploadFilesThunk(target.files))
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
                    <input
                        style={{ display: 'none' }}
                        type='file'
                        multiple
                        ref={inputRef}
                        onChange={onInputFileChange}
                    />
                    <IconButton
                        color='primary.main'
                        disabled={isSaving}
                        onClick={() => inputRef.current.click()}
                    >
                        <UploadFileOutlined />
                    </IconButton>
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
            <Grid2
                container
                justifyContent='end'
            >
                <Button 
                color='error'
                onClick={onDeleteNote}
                >
                    <DeleteOutline />
                    <Typography sx={{ display: { xs: 'none', md: 'block' }, ml: 1 }} fontSize={15}>Borrar</Typography>
                </Button>
            </Grid2>
            {
                (hasImages)
                    ? <ImageGallery images={actualNote.imageUrls} />
                    : <Alert severity="warning">Your note is without images</Alert>
            }
        </Grid2>

    )
}
