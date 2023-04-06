const express = require('express');
const notesRouter = require('./notesRouter');
const bodyParser = require('body-parser');
//______________________________________________
const router = express.Router();
router.use(bodyParser.urlencoded({extended: true})).use(bodyParser.json());

router.use('/notes', notesRouter);





module.exports = router;