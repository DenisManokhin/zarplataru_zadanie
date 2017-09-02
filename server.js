const path = require('path');
const express = require('express');

const app = express();
const staticPath = path.join(__dirname, '/public');
const port = 8080;

app.use(express.static(staticPath));

app.listen(port, function() {
  console.log('Server is up. Port ' + port + '.');
});