// requires
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const port = process.env.PORT || 3000;

// app
const app = express()
app.use(bodyParser.json())
app.use(express.static('public'))

// import Schema
require('./models/NewWord.js')
const Word = mongoose.model('words')

// mongoDB
mongoose.connect('mongodb://localhost:27017/dictionary', {useNewUrlParser: true},
// if statement function checking if there's a connection or error
function (error) {
    if (error) {
        console.log(error)
    } else {
        console.log("connected")
    }
});

// GET request from the mongoDB and mongoose Schema
app.get('/data', function(req, res) {
    const input = req.query.input;

    console.log(input)

    Word.find({ word:input }, function(word, error) {
        // if (error) throw error
        if (word) {
            res.send(word)
        } else {
            res.send(error)
        }
    })
})

// port listening
app.listen(port, () => console.log(`App listening on port ${port}`));

module.exports = app;