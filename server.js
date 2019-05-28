const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express()
const port = 3000

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(morgan('dev'));
app.use(express.static('public'))

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get('/:propertyId', (req, res) => {
  res.sendfile(path.join(__dirname, '/public/index.html'));
});

app.listen(port, () => console.log(`Proxy server running from port ${port}!`))

