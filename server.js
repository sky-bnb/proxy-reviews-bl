const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');

const app = express()
const port = 3000

app.use(express.static('public'))
app.use(morgan('dev'));
app.use(cors())

// app.get('/:propertyId', (req, res) => {
//   res.sendfile(path.join(__dirname, '/public/index.html'));
// });

app.listen(port, () => console.log(`Proxy server running from port ${port}!`))

