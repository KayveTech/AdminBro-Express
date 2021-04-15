
var express = require('express');

const AdminBro = require('admin-bro');
const AdminBroMongoose = require('@admin-bro/mongoose');
const AdminBroExpress = require('@admin-bro/express');

var app = express();

app.get('/', ()=> res.send('Hello World!'));

// Database
const connection = require('./config/db.config');

connection.once('open', ()=>console.log('Database connected Successfully'));
connection.on('error',()=>console.log('Error', err));

//Admin Bro and Models
const Customer = require('./models/Customer')
const User = require('./models/User')

AdminBro.registerAdapter(AdminBroMongoose)
const AdminBroOptions = {
  resources: [User, Customer],
}

const adminBro = new AdminBro(AdminBroOptions)
const router = AdminBroExpress.buildRouter(adminBro)

app.use(adminBro.options.rootPath, router)
app.listen(8000, function () {
    console.log('Listening to Port 8000');
});
