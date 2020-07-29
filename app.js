const express = require('express');

const app= express();
const authRoutes = require('./src/routes/authRoutes');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(authRoutes);

app.get('/',(req,res)=>{
    res.send("Hi hello and welcome. idhu manju groups vazhangum kalakapovadhu yaaru!!");
});

app.listen(3000,()=>{
    console.log("Listening on port 3000");
});