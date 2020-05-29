//require the library
const mongoose=require('mongoose');
//connect to the database
mongoose.connect('mongodb://localhost/contacts_list_db', { useNewUrlParser: true , useUnifiedTopology: true });
//aquire the connection to (check if it is successfull)
const db=mongoose.connection;
// on error
db.on('error', console.error.bind(console, 'Error connecting to DataBase'));
// up and running then print the message
db.once('open', function()
{
    console.log('Successfully Connected to the database');
})