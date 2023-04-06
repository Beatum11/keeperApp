require('dotenv').config();
const express = require('express');
const cors = require('cors');

const router = require('./routes/router');
const start = require('./functions/start');
//------------------------------------------
const app = express();
app.use(cors());
app.use('/api', router);

start(app);