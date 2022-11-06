const mongoose = require('mongoose')

const connection = mongoose.connect(
'mongodb+srv://sudiptadip:sudipta12dip@cluster0.4bskxdz.mongodb.net/?retryWrites=true&w=majority')

const taskschema = new mongoose.Schema({
    name: {type: String, require: true},
    age: {type: String, require: true},
    task: {type: String, require: true},
})

const task = mongoose.model("dip",taskschema)

module.exports = {
    connection,
    task
}