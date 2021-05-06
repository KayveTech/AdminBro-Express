const mongoose = require('mongoose')
const DB_URI = 'mongodb:localhost:27017/AdminBro';
//Database connection
mongoose.connect(DB_URI,
{useNewUrlParser: true, useUnifiedTopology: true});
const connection = mongoose.connection
module.exports = connection
