const express = require('express');
const bodyParser = require('body-parser');
const route = require('./route/route.js')
const mongoose = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb+srv://prakashurkude:prakash1998@cluster0.nuhssqs.mongodb.net/project-1-blogs")

.then(()=>console.log("MongoDB is connected"))
.catch(err=> console.log(err))

app.use('/',route);

app.listen(3000, function(){
    console.log('Express app running on port'+ ( 3000))
});

