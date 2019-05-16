// require mongoose
const mongoose = require('mongoose')

// create a variable for a new mongoose.Schema
const newWordSchema = new mongoose.Schema({
    word: String
})

// reference the collection of data you want to use in mongoDB and variable for new schema
mongoose.model('words', newWordSchema)