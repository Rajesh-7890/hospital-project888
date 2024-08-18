const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/HospitalDB')
  .then(() => {
    console.log('DB is connected');
  })
  .catch(() => {
    console.log('DB is error');
  });
