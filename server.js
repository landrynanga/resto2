const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path')

const PORT = 3000;

app.use(express.static(__dirname));

app.get('/products/1', (req, res) => {
    fs.readFile('./products.json', (err, data) => {
        if(err) throw err
        const product = JSON.parse(data)
        res.json(product)
    })
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + 'menu.html'));
});

app.listen(process.env.PORT || PORT, () => console.log(`SERVER STARTED AT `))
