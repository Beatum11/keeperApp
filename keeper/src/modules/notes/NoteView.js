import React from 'react';
import '../../cssFiles/notes/note.css';

const NoteView = ({title, text, onEdit, onDelete}) => {

  return (
    <div className='note-container'>
      <p className='noteTitle'>{title}</p>
      <p>{text}</p>
      <div className='note-buttons'>
        <button className='noteBut' onClick={onEdit}>Edit</button>
        <button className='noteBut' onClick={onDelete}>Delete</button>
      </div>
    </div>
  );

}

export default NoteView;