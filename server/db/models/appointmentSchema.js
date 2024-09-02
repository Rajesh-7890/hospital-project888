const Department = require('./departmentSchema');
const Doctor = require('./doctorSchema');
const User = require('./userSchema');
const mongoose = require('mongoose');

const appointmentSchema = mongoose.Schema({
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Department',
  },

  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor',
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
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
  },
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
