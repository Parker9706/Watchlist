//server.js file
const path = require('path');
const express = require('express');
const app = express();
const apiRouter = require('./routes/api.js');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', apiRouter); //was previously /api

app.use(express.static(path.resolve(__dirname, '../app')));

app.use((req, res) => res.status(404).send('404 Page Not Found'));

app.listen(3000, function() {
  console.log('listening on port 3000...')
});

module.exports = app;
