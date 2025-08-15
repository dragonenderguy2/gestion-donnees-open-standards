const express = require('express');
const dataRoutes = require('./routes/index');

const app = express();
app.use('/api', dataRoutes);

module.exports = app;