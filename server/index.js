const express = require('express');
const parser = require('body-parser');

let app = express();
app.set('port', 3000);
app.use(parser.json());
app.use(express.static(__dirname + '/../public'));

app.listen(app.get('port'), ()=> {
  console.log('connected, listening on port number 3000');
})