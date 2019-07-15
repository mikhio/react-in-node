const express = require('express');
const path = require('path');
const app = express();
const port = 5000;

console.log(`Server has ${port} port.`);

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port);
