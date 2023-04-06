const Note = require('../models/note');

exports.getAllNotes = async (req, res) => {

    try{
        const notes = await Note.find();
        res.json(notes);
    } catch(e){
        res.sendStatus(500);
    }

  };

  exports.getNoteById = async (req, res) => {

    const id = req.params.id;

    try{
        const note = await Note.findById(id);
        res.json(note);
    } catch(e){
        res.sendStatus(500);
    }

  };

  exports.createNote = async (req, res) => {

    const note = new Note({
        title: req.body.title,
        content: req.body.content
    });

    try{
        await note.save();
        res.sendStatus(201);
    } catch(e){
        res.sendStatus(400);
    }

  };

  exports.updateNote = async (req, res) => {
    
    const noteId = req.params.id;

    try{
        await Note.replaceOne({
            _id: noteId
        }, {
            title: req.body.title,
            content: req.body.content
        });

        res.sendStatus(200);

    } catch(e){
        res.sendStatus(400);
    }

  };

  exports.patchNote = async (req, res) => {
    
    const neededId = req.params.id;
    const updateFields = {};

    req.body.title ? updateFields.title = req.body.title : 
                     updateFields.content = req.body.content;

    try{
        await Note.findOneAndUpdate({
            _id: neededId
        }, updateFields);

        res.sendStatus(200);
    } catch(e){
        res.sendStatus(400);
    }

  };
  
  exports.deleteNote = async (req, res) => {
    
    const noteId = req.params.id;

    try{
        await Note.deleteOne({
            _id: noteId
        });
        res.sendStatus(200);

    } catch(e){
        res.sendStatus(400);
    }
    
  };