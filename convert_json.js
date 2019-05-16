const data = require("./data.js")

var fs = require("fs")

const words = Object.keys(data).map(value => {return {word:value}})

const json = JSON.stringify(words)

fs.writeFile('data.json', json, 'utf8', (err) => {
    if (err) {
        throw err;
    } else {
        console.log('javaScript converted to JSON')
    }
})