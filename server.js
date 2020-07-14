const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helper');
app.use(express.static(__dirname + '/Public'));

const port = process.env.port || 3000;
//Expres HBS
hbs.registerPartials(__dirname + '/views/Parciales');
app.set('view engine', 'hbs');


app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'daniel gAjardo c.'
    });
});

app.get('/about', (req, res) => {

    res.render('about');
});

app.listen(port, () => {
    console.log(`Escuchando el puerto ${port}`)
});