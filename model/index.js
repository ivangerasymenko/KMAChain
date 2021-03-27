const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req, res, next) => {
    res.send('Accessing data');
})

app.listen(port, () => {
    console.log('Ready!');
})