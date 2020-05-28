const express = require('express');
const path = require('path');
const port = 8000;

const app = express();

app.set( 'view engine', 'ejs' );
app.set( 'views', path.join(__dirname, 'views') );
app.use(express.urlencoded());






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
    contactList.push({name:request.body.name, phone:request.body.phone});
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
});