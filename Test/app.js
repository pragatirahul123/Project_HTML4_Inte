const express = require('express');
const app = express()
const data = require('./data.json')

app.use(express.json())

app.get('/data',(req,res)=>{
    res.json(data)
})

app.listen(5050 ,()=>{
    console.log("connet")

})

