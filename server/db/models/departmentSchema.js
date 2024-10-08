const mongoose = require('mongoose');

const departmentSchema = mongoose.Schema(
  {
    name: String,
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Department = mongoose.model('Department', departmentSchema);

module.exports = Department;
