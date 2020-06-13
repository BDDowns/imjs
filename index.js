const express = require('express');
const morgan = require('morgan');
const favicon = require('serve-favicon');
const path = require('path');

const app = express();

const port = 3000;

app.use(morgan('tiny'));

app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

app.set('view engine', 'pug');

app.get('/', (req, res) => res.render('index', { title: 'Image Viewer', message: 'Welcome!'}));

app.listen(port, () => console.log(`Server listening on port: ${port}`));