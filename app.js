const express = require('express');
const jwt = require('jsonwebtoken');

const api = require('./Routes/api.router.js');

const app = express();

app.use('/api', api);

app.listen(5000, () => {
  console.log('Listening on port 5000');
});
