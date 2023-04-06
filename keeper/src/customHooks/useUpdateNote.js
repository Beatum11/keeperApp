import axios from "axios";

export const useUpdateNote = (onUpdated) => {

  const updateHandler = async (id, updatedNote) => {
    await axios
      .patch(`https://spiral-succinct-tricorne.glitch.me/api/notes/${id}`, updatedNote)
      .then((res) => {
        console.log(res);
        onUpdated();
        window.location.reload();
      });
  };

  return updateHandler;
};