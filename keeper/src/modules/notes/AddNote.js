import React, { useState } from 'react';
import '../../cssFiles/notes/add-note.css';
import  { useNoteState }  from '../../customHooks/useNoteState';
import  { useSubmitNote }  from '../../customHooks/useSubmitNote';

const AddNote = () => {

    const { note, changeHandler, resetNote } = useNoteState();
    const postHandler = useSubmitNote(note, resetNote);
    
  return (
    <div className='addNote-container'>
        <form className='addNote-form' onSubmit={postHandler}>
            <input type={'text'} placeholder='Title'
                                 value={note.title}
                                 name='title'
                                 onChange={changeHandler}/>
            <input type={'text'} placeholder='Take a note...'
                                 value={note.content}
                                 name='content'
                                 onChange={changeHandler}/>
            <button type={'submit'}>Add</button>
        </form>
    </div>
  );
}

export default AddNote;