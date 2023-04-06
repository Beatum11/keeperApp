import { useState } from "react";

export const useEditNote = (initialNote) => {

    const[isEditing, setIsEditing] = useState(false);
    const[editedNote, setEditedNote] = useState(initialNote);

    const editHandler = (e) => {
        setEditedNote({
            [e.target.name]: e.target.value
        });
    };

    const enableEditing = () => {
        setIsEditing(true);
      };
    
    const disableEditing = () => {
        setIsEditing(false);
      }

      return{isEditing, editedNote, editHandler,
             enableEditing, disableEditing};
}