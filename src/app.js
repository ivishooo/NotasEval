const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const notasRouter = require('./routes/notasRouter');
 
//Motor de vistas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(express.urlencoded({ estended: false }));
app.use(express.json());

app.use(methodOverride('_method'));
//css
app.use(express.static(path.join(__dirname, '../public')));
//rutas
app.use('/', notasRouter);

//serviodr
app.listen(3000, function () {
    console.log('Esta todo ok negrazo')
    console.log('http://localhost:3000/')
}) 