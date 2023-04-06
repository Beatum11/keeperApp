import React from 'react';
import '../../cssFiles/notes/note.css';
import { useDeleteNote } from '../../customHooks/useDeleteNote';
import { useUpdateNote } from '../../customHooks/useUpdateNote';
import { useEditNote } from '../../customHooks/useEditNote';
import NoteEdit from './NoteEdit';
import NoteView from './NoteView';

const NoteItem = ({id, title, text}) => {

  const { isEditing, editedNote, editHandler, enableEditing, disableEditing } = 
                                                            useEditNote({ title, text });

  const deleteHandler = useDeleteNote(id);
  const updateHandler = useUpdateNote(disableEditing);

  return isEditing ? 
  <NoteEdit editedNote={editedNote} 
            onChange={editHandler} 
            onSave={() => updateHandler(id, editedNote)} 
            onCancel={disableEditing}/> : 

  <NoteView title={title} 
            text={text} 
            onEdit={enableEditing} 
            onDelete={deleteHandler}/>;
};

export default NoteItem;