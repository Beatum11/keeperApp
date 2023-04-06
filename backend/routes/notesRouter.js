const express = require('express');
const notesController = require('../controllers/notesController');
//-----------------------------------------------
const router = express.Router();

//----------------------------------------------- GET METHODS

router.get('/', notesController.getAllNotes);

router.get('/:id', notesController.getNoteById);

//----------------------------------------------- POST METHOD

router.post('/', notesController.createNote);

//----------------------------------------------- PUT&PATCH METHODS

router.put('/:id', notesController.updateNote);

router.patch('/:id', notesController.patchNote);

//----------------------------------------------- DELETE METHOD

router.delete('/:id', notesController.deleteNote);


module.exports = router;