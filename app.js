const express = require('express');

const app = express()

const Port = 4000

app.get('/',(req, res) => {
    res.status(200).json('Hello World')
})

module.exports = app.listen(Port, () => console.log(`Running on http://localhost:${Port}`))