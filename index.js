const express = require('express')
const { connection, task } = require('./db')
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
app.use(express.json())


app.get('/',async(req,res)=>{
    res.send({msg: "hello"})
})

app.get('/no',async(req,res)=>{
    let data = await task.find()
    res.send(data)
})

app.post('/add',async (req,res)=>{
    try{
        await task.insertMany(req.body)
        res.send({msg: 'sucessfully added'})
    }catch(e){
        res.send({msg: "task add not sucessfully"})
    }

})


app.listen(PORT,async()=>{
    try{
        await connection
        console.log('connected mongodb database')
    }catch(er){
        console.log('crrrrrrr',er)
    }
    console.log('listen in',PORT)
})