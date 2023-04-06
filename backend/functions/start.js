// This function takes the Express app instance as a parameter, connects to the database,
// and starts the app by listening on a specific port.

const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const url = process.env.DATABASE_URL;


const start = async (app) => {
    await mongoose.connect(url);
    app.listen('8000', () => {console.log('App is listening on port 8000');});
}

module.exports = start;

