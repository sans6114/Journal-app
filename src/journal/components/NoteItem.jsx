import { useMemo } from 'react';

import { useDispatch } from 'react-redux';

import BookmarksIcon from '@mui/icons-material/Bookmarks';
import {
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';

import { setActiveNote } from '../../store/journal';

export const NoteItem = ({ note, open }) => {
     
    const dispatch = useDispatch()
    const { title, body, date } = note

    const newTitle = useMemo(() => {
        return title.length > 17
            ? title.substring(0, 17) + '...'
            : title
    }, [title])

    const newBody = useMemo(() => {
        return body.length > 17
            ? body.substring(0, 17) + '...'
            : body
    }, [body])

    const onPutActiveNote = () => {
        dispatch(setActiveNote(note))
    }

    return (
        <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemButton onClick={onPutActiveNote} sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5 }}>
                <BookmarksIcon sx={{ ...(open && { mr: 2 }) }} />
                <ListItemText primary={newTitle || 'untitle'} secondary={newBody} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
        </ListItem>
    )
}