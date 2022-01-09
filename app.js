const express = require('express'); 
const path = require ('path'); 
const cors = require('cors');
const bodyParser = require('body-parser');

const nav= [
    {
        link:"/books",
        title:"Books"
    },
    {
        link:"/authors",
        title:"Authors"
    },
    {
        link:"/addbook",
        title:"Add Book"
    },
    {
        link:"/addauthor",
        title:"Add Author"
    }
]

const loginRouter = require('./src/routes/loginroute')(nav);
const signupRouter = require('./src/routes/signuproute')(nav);
const homeRouter = require('./src/routes/homerouter')(nav);
const booksRouter = require('./src/routes/booksroute')(nav);
const authorsRouter = require('./src/routes/authorsroute')(nav);

const app = new express(); 


app.set('views','./src/views'); 
app.set('view engine','ejs'); 

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('./public'));

app.use('/login',loginRouter); 
app.use('/signup',signupRouter); 
app.use('/home',homeRouter); 
app.use('/books',booksRouter); 
app.use('/authors',authorsRouter); 



app.get('/',function(req,res){

    res.render('index',{
        nav
    });
    
});

app.listen(process.env.PORT || 3000, function(){
    console.log("Server started on port 3000");
});