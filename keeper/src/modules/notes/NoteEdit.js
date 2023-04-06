import React from 'react';
import '../../cssFiles/notes/note.css';
import '../../cssFiles/notes/note-edit.css';

const NoteEdit = ({editedNote, onChange, onSave, onCancel}) => {

  return (
    <div className='note-container'>
        <input
          type={'text'}
          name='title'
          value={editedNote.title}
          onChange={onChange}
        />
        <input
          type={'text'}
          name='text'
          value={editedNote.text}
          onChange={onChange}
        />
        <div className='note-buttons'>
            <button className='noteBut' onClick={onSave}>Save</button>
            <button className='noteBut' onClick={onCancel}>Cancel</button>
        </div> 
    </div>
  );
}

export default NoteEdit;