// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
// Create app
const app = express();
// Add other settings to app
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());
// Create comments array
const comments = require('./comments');
// Create routes
app.get('/comments', (req, res) => {
  res.send(comments);
});
app.post('/comments', (req, res) => {
  const comment = {