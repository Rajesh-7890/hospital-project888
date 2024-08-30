const Appointment = require('../db/models/appointmentSchema');

module.exports.getappointments = async (req, res) => {
  const appointments = await Appointment.find();
  res.status(200).json(appointments);
};

module.exports.bookAppointments = async (req, res) => {
  try {
    const body = req.body;
    const response = await Appointment.create({
      department: body.department,
      doctor: body.doctor,
      date: body.date,
      time: body.time,
      email: body.email,
      mobilenumber: body.mobilenumber,
      message: body.message,
      fullname: body.fullname,
    });

    res
      .status(200)
      .json({ message: 'Slot Booked successfully', data: response });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error booking slot', error: error.message });
  }
};

module.exports.getAppointmentById = async (req, res) => {
  try {
    const { id } = req.params;
    const appointment = await Appointment.findById(id);
    res.status(201).json(appointment);
  } catch (e) {
    res.status(500).json({ AppointmentError: e.message });
  }
};
