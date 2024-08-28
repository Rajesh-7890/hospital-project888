const mongoose = require('mongoose');

const appointmentSchema = mongoose.Schema({
  department: {
    type: String,
  },
  doctor: {
    type: String,
  },
  date: {
    type: Date,
  },
  time: {
    type: String,
  },
  fullname: {
    type: String,
  },
  mobilenumber: {
    type: String,
  },
  email: {
    type: String,
  },
  message: {
    type: String,
  },
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
