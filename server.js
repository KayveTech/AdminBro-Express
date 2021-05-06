const express = require('express');
const AdminBro = require('admin-bro');
const mongooseAdminBro = require('@admin-bro/mongoose');
const expressAdminBro = require('@admin-bro/express');

app.get('/', ()=>res.send('Hello World'));

// Database
const connection = require('./config/db.config');
connection.once('open', ()=>console.log('Database connected Successfully'));
connection.on('error',()=>console.log('Error', err));

//Admin Bro and Models
const Customer = require('./models/Customer')
const Admin = require('./models/Admin
                      
AdminBro.registerAdapter(mongooseAdminBro)
const AdminBroOptions = {
  resources: [Admin, Customer],
}

const adminBro = new AdminBro(AdminBroOptions);
const router = expressAdminBro.buildRouter(adminBro);

app.use(adminBro.options.rootPath, router)
app.listen(8000, ()=>console.log('Listening at Port 8000'));
