const express = require('express');
const handlebars = require('express-handlebars');
const mongoose = require('mongoose');
const routes = require('/routes');

const app = express();

app.use(express.static('/static'));
app.use(express.urlencoded({ extended: false }));

app.engine('hbs', handlebars({
    extname: 'hbs'
}));
app.set('view engine', 'hbs');

mongoose.connect('mongodb://localhost:27017/nailSalon');

app.use(routes);

app.listen(3000, () => {
    console.log('App is listening on http://localhost:3000');
});