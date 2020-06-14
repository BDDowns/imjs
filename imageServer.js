const express = require('express');
const morgan = require('morgan');
const path = require('path');
const fs = require('fs');
const serveIndex = require('serve-index');

const app = express();

const port = 3001;

app.use(morgan('tiny'));

app.use('/api/image', express.static(path.join(__dirname, '/images')));

app.use('/images', express.static(__dirname + '/images'), serveIndex(__dirname + '/images', { icons: true }));

const files = fs.readdirSync(path.join(__dirname, '/images'));

app.get('/api/image-names', (req, res) => res.send(JSON.stringify(files)));

app.listen(port, () => console.log(`Server listening on port: ${port}`));