//Importing mongoose
const mongoose = require('mongoose');

// Setting Up Database
mongoose.connect('mongodb+srv://krishna_pandit:G89dgkl5Pt9rYXIA@clustercodingninjas.h5erjpx.mongodb.net/?retryWrites=true&w=majority').then((result) => {
    console.log('Successfully Connected To The Database')
}).catch((err) => {
    console.log("Couldn't Connetc To The Database", err);
});
mongoose.set('strictQuery', true);

//Connecting With MongoDB
const db = mongoose.connection;

//Exporting db
module.exports = db;