const mongoose = require('mongoose')

const CustomerSchema = new mongoose.Schema({

    CustomerName: {
      type: String,
      required: true,
    },  
    CustomerEmail: {
      type: String,
      required: true,
    },

  });
  
module.exports = mongoose.model('Customer',CustomerSchema);
