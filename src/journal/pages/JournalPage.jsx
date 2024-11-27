import {
  useDispatch,
  useSelector,
} from 'react-redux';

import { AddOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';

import { createNewNoteThunk } from '../../store/journal';
import { JournalLayout } from '../layouts/JournalLayout';
import {
  NoteView,
  NothingSelectedView,
} from '../views';

export const JournalPage = () => {
  const { isSaving, active: hasNote } = useSelector(state => state.journal)
  const dispatch = useDispatch()
  const { displayName } = useSelector(state => state.auth)

  const onNewEmptyNote = () => {
    dispatch(createNewNoteThunk())
  }


  return (
    <JournalLayout title={displayName}>
      {
        (!!hasNote)
          ? <NoteView />
          : <NothingSelectedView />
      }
      <IconButton
        disabled={isSaving}
        onClick={onNewEmptyNote}
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  )
}
