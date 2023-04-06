import axios from "axios";

export const useDeleteNote = (id) => {

    const deleteHandler = async () =>{
        await axios.delete(`https://spiral-succinct-tricorne.glitch.me/api/notes/${id}`)
        .then((res) => {
            console.log(res);
            window.location.reload();
        });
    }

    return deleteHandler;
}