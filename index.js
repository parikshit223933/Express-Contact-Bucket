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





const express=require('express');
const port=8000;
const path=require('path');

const app=express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({extended:true}));
app.use(express.static('assets'));

var contactList=[];

app.get('/', (req, res)=>
{
    var options={
        title:"Contact List",
        contact_list:contactList
    };
    return res.render('home', options);
});
app.post('/create-contact', (req, res)=>
{
    contactList.push(req.body);
    return res.redirect('back');
});

app.listen(port, (error)=>
{
    if(error)
    {
        console.log("there was some error in starting the server");
        return;
    }
    else
    {
        console.log("server is running on the port", port);
    }
});