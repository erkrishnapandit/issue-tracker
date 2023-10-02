//Importing mongoose
const mongoose = require('mongoose');

// Setting Up Database
mongoose.connect('mongodb://127.0.0.1:27017/ISSUE_TRACKER_DEVELOPMENT').then((result) => {
    console.log('Successfully Connected To The Database')
}).catch((err) => {
    console.log("Couldn't Connetc To The Database", err);
});
mongoose.set('strictQuery', true);

//Connecting With MongoDB
const db = mongoose.connection;

//Exporting db
module.exports = db;