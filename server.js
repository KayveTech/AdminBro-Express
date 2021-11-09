const express = require('express');
const AdminBro = require('admin-bro');
const mongooseAdminBro = require('@admin-bro/mongoose');
const expressAdminBro = require('@admin-bro/express');

const app = express()

app.get('/', (req, res) => res.send('Hello World'));

// Database
const connection = require('./config/db.config');
connection.once('open', () => console.log('Database connected Successfully'));
connection.on('error', (err) => console.log('Error', err));

//Admin Bro and Models
const Customer = require('./models/Customer')
const User = require('./models/User')

AdminBro.registerAdapter(mongooseAdminBro)
const AdminBroOptions = {
  resources: [User, Customer],
}

const adminBro = new AdminBro(AdminBroOptions);
const router = expressAdminBro.buildRouter(adminBro);

app.use(adminBro.options.rootPath, router)
app.listen(8000, () => console.log('Listening at Port 8000'));
