const express = require('express');
const consign = require('consign');
const path = require('path');
const body = require('body-parser')

app = express();

app.use(body.urlencoded({extended: true}));
app.use(body.json())



//configurar diretório das views
app.set('views', path.join(__dirname, '../api/views'));
app.set('view engine', 'ejs');

//configurar diretório estático
app.use('/static', express.static(__dirname + '/public'));
app.use(express.static('public'));
app.use(express.static('estilos'));
app.use(express.static('imagens'));
app.use(express.static('js'));

app.set('port', 3333);

consign({ cwd: 'api' })
    .include('models')
    .then('controllers')
    .then('routes')
    .into(app)
;

module.exports = app;
