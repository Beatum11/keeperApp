import React from 'react';
import '../../cssFiles/notes/notes.css';
import NoteItem from './NoteItem';
import useNotes from '../../customHooks/useNotes';

//This module is responsible for rendering a list of notes. 
//It imports the NoteItem component and uses the custom hook useNotes 
//to retrieve the notes from the backend.

const Notes = () => {

  const notes = useNotes();

  const finalNotes = notes.map(note => 
    <li key={note._id}>
      <NoteItem id={note._id} 
                title={note.title} 
                text={note.content}/>
    </li>);

  return (
    <ul className='notes-ul'>
      {finalNotes}
    </ul>
  )
}

export default Notes;