var express=require('express');
var path=require('path');
var bodyParser=require('body-parser');

var index=require('./routes/index');
var tasks=require('./routes/tasks');
var port=3000;
var app=express();

//View Engine
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

// to map the EJS template engine to “.html” files
app.engine('html',require('ejs').renderFile);


//Set static floder
app.use(express.static(path.join(__dirname,'client')));

//Body parse
app.use(bodyParser.json()); //Parses the text as JSON and exposes the resulting object on req.body.
// Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST)
//URL-encoded data with the querystring library (when false)
app.use(bodyParser.urlencoded({extended:false}));

app.use('/',index);
app.use('/api',tasks);

app.listen(port,function(){
  console.log('Server started on port: '+port);
});
