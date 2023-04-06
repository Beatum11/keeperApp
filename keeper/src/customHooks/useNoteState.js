import { useState } from "react";

// This custom hook is responsible for handling the state of a note object
// with its title and content. It manages the note state and provides
// functions for updating and resetting the state.
//
// The hook returns an object containing the note state, a change handler
// function to update the note based on user input, and a reset function to
// clear the note state.

export const useNoteState = () => {

    const [note, setNote] = useState({
        title: '',
        content: ''
    });

    const changeHandler = (e) => {
        setNote({
            ...note,
            [e.target.name]: e.target.value
        });
    };

    const resetNote = () => {
        setNote({
            title: '',
            content: ''
        });
    };

    return { note, changeHandler, resetNote };
}