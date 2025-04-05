


const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');

});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


var now = new Date();
var datetime = now.toLocaleString();
document.getElementById("datetime").innerHTML = datetime;
