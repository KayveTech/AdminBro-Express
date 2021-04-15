const mongoose = require('mongoose')

//Database connection
mongoose.connect('mongodb://localhost/AdminBro',
{useNewUrlParser: true, useUnifiedTopology: true});

const connection = mongoose.connection

module.exports = connection
