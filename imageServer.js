const express = require('express');
const morgan = require('morgan');
const path = require('path');
const serveIndex = require('serve-index');
const DirectoryInfo = require('./utils/DirectoryInfo');

const app = express();

const port = 3001;

// grab images to be shared


app.use(morgan('tiny'));

app.use('/images', express.static(__dirname + '/images'), serveIndex(__dirname + '/images', { icons: true }));

app.get('/directoryInfo', (req, res) => {
  
  let page = req.query.page;
  let limit = req.query.limit;

  const imagesRoute = '/images';
  const imagesBasePath = path.join(__dirname, imagesRoute);
  const dinfo = new DirectoryInfo(imagesBasePath, imagesRoute);

  console.log(JSON.stringify(dinfo, null, 2));
  
  res.send(JSON.stringify(dinfo))
});

app.get('/directoryInfo/route', (req, res) => {
  console.log('received request');

  let route = req.query.route;

  if (!route.startsWith('/images')) {
    res.status(404).send('The path requested was not found.');
  }

  console.log(route);

  const imagesBasePath = path.join(__dirname, route);
  const dinfo = new DirectoryInfo(imagesBasePath, route);
  
  console.log(JSON.stringify(dinfo, null, 2));

  res.send(JSON.stringify(dinfo))
})

app.listen(port, () => console.log(`Server running on port: ${port}`));