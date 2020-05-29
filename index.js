/* const express = require('express');
const path = require('path');
const port = 8000;
const app = express();
app.set( 'view engine', 'ejs' );
app.set( 'views', path.join(__dirname, 'views') );
app.use(express.urlencoded({extended:true}));
// custom middleware 1
app.use(function(req, res, next)
{
    req.myname="parikshit singh sin sin war"
    // console.log("middleware1 called");
    next();
})
// custom middleware 2
app.use((req, res, next)=>
{
    console.log("my name from middileware 2", req.myname);
    // console.log("middleware2 called");
    next();
})
var contactList=[
    {
        name:"parikshit",
        phone:'1234567890'
    },
    {
        name:"israil",
        phone:"19864891842"
    },
    {
        name:"albab ali",
        phone:'3948712481342'
    }
]
app.get('/', (request, response) =>
{
    console.log(request.myname);
    return response.render('home', {
        title:"rendered",
        contact_list:contactList,
    });
});
app.get('/added_contact', (req, res)=>
{
    return res.render('added_contact', {});
});
app.post('/create-contact', (request, response)=>
{
    contactList.push(request.body);
    return response.redirect('back');
});
app.listen(port, (error) =>
{
    if (error)
    {
        console.log('There was some problem in starting the server!');
        return;
    }
    else
    {
        console.log('server is running on the port', port);
    }
}); */





const express = require('express');
const port = 8000;
const path = require('path');
const db = require('./config/mongoose');
const Contact = require('./models/contact');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static('assets'));

var contactList = [];

app.get('/', (req, res) =>
{
    Contact.find({}, (error, contacts) =>
    {
        if (error)
        {
            console.log('there was an error in fetching contacts from the database!');
            return;
        }
        var options = {
            title: "Contact List",
            contact_list: contacts
        };
        return res.render('home', options);
    });


});
app.get('/delete-contact/:id', (req, res) =>
{
    let id = req.params.id;
    Contact.findByIdAndDelete(id, (error) =>
    {
        if (error)
        {
            console.log("error in deleting a contact from database!");
            return;
        }
        return res.redirect('back');
    });

    /* let required_contact_index = contactList.findIndex((contact) =>
    {
        return contact.phone == phone;
    });
    if (required_contact_index != -1)
    {
        contactList.splice(required_contact_index, 1)
    } */
});
app.post('/create-contact', (req, res) =>
{
    // contactList.push(req.body);
    Contact.create(req.body, (error, newContact) =>
    {
        if (error)
        {
            console.log('error in creating a contact!');
            return;
        }
        console.log('*********', newContact);
        return res.redirect('back');
    });
});

app.listen(port, (error) =>
{
    if (error)
    {
        console.log("there was some error in starting the server");
        return;
    }
    else
    {
        console.log("server is running on the port", port);
    }
});