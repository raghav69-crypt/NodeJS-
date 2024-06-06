const express = require('express');
const app = express()
const port = 3008;

app.get('/' , (req,res)=>{
    res.send("hello World2!")
})

app.get('/about' , (req ,res)=>{
    res.send("this is an about page")
})

app.listen(port , ()=>{
    console.log('example app listening at https://localhost:${port}')
})
