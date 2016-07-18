const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

mongoose.connect('mongodb://localhost:auth/auth');

const app = express();

app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
routes(app);

const port = process.env.PORT || 3090;
const server = http.createServer(app);

server.listen(port);
console.log(`Server listening on: ${port}`);
