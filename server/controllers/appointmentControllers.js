const Appointment = require('../db/models/appointmentSchema');
const mongoose = require('mongoose');

module.exports.getappointments = async (req, res) => {
  const appointments = await Appointment.find()
    .populate('department', 'name')
    .populate('doctor', 'firstname lastname');
  res.status(200).json(appointments);
};

module.exports.bookAppointments = async (req, res) => {
  try {
    const response = await Appointment.create({
      department: req.body.department,
      doctor: req.body.doctor,
      date: req.body.date,
      time: req.body.time,
      email: req.body.email,
      mobilenumber: req.body.mobilenumber,
      message: req.body.message,
      fullname: req.body.fullname,
      user: req.body.user,
    });

    res
      .status(200)
      .json({ message: 'Slot Booked successfully', data: response });
  } catch (error) {
    res.status(500).json({ message: 'Error booking slot:', e: error.message });
  }
};

module.exports.getAppointmentById = async (req, res) => {
  try {
    const { id } = req.params;
    const appointment = await Appointment.findById(id)
      .populate('department', 'name')
      .populate('doctor', 'firstname lastname');

    if (!appointment) {
      return res.status(404).json({ error: 'Appointment not found' });
    }

    res.status(200).json(appointment);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch appointment' });
  }
};

module.exports.deleteAppointmentByUserId = async (req, res) => {
  try {
    const { userId } = req.params;
    const response = await Appointment.findOneAndDelete({ user: userId });

    if (!response) {
      return res
        .status(404)
        .json({ message: 'No appointment found for this user' });
    }
    res.status(200).json({ message: 'Appointment deleted successfully' });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports.getAppointmentsByUserId = async (req, res) => {
  const userId = req.params.userId;

  try {
    const appointments = await Appointment.find({ user: userId })
      .populate('doctor')
      .populate('department');

    if (appointments.length === 0) {
      return res
        .status(404)
        .json({ error: 'No appointments found for this user' });
    }

    res.status(200).json({ appointments });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error fetching appointments', error: error.message });
  }
};

module.exports.getAppointmentByDoctorId = async (req, res) => {
  const { doctorId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(doctorId)) {
    return res.status(400).json({ message: 'Invalid doctor ID' });
  }

  try {
    const appointments = await Appointment.find({
      doctor: new mongoose.Types.ObjectId(doctorId),
    });

    if (!appointments.length) {
      return res
        .status(404)
        .json({ message: 'No appointments found for this doctor' });
    }

    res.json(appointments);
  } catch (error) {
    console.error('Error fetching appointments:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports.handleStatusChange = async (req, res) => {
  const { appointmentId } = req.params;
  const { status } = req.body;

  try {
    const updatedAppointment = await Appointment.findByIdAndUpdate(
      appointmentId,
      { status: status },
      { new: true }
    );

    if (!updatedAppointment) {
      return res.status(404).json({ error: 'Appointment not found' });
    }

    res.status(200).json(updatedAppointment);
  } catch (error) {
    console.error('Error updating appointment status:', error);
    res.status(500).json({ error: 'Failed to update appointment status' });
  }
};
