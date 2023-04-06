import axios from "axios";

//This hook is responsible for Post Request.

export const useSubmitNote = (note, resetNote) => {

    const postHandler = async (e) => {

        e.preventDefault();
      
        await axios.post('https://spiral-succinct-tricorne.glitch.me/api/notes', note)
          .then((response) => console.log(response))
          .catch((error) => console.log(error));
          
        resetNote();
        window.location.reload();
        
    };

    return postHandler;
}