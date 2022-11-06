const express = require('express')
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

app.get('/',(req,res)=>{
    res.send({msg: 'Home page'})
})




app.listen(PORT,()=>{
    console.log('listen in',PORT)
})