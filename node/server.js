const express = require('express');
const app = express();

const PORT = 8080;
const HOST = '0.0.0.0';

require('./app/routes')(app);

app.listen(PORT, HOST);