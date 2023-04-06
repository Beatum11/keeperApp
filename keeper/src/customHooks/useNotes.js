import { useState, useEffect } from "react";

// This is a custom hook. I want to separate GET Request logic into this hook.

const useNotes = () => {

    const [notes, setNotes] = useState([]);

    useEffect(() => {
        fetch('https://spiral-succinct-tricorne.glitch.me/api/notes/')
        .then(response => response.json())
        .then(data => setNotes(data));
    }, []);

    return notes;
}

export default useNotes;