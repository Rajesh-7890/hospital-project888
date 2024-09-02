const Appointment = require('../db/models/appointmentSchema');

module.exports.getappointments = async (req, res) => {
  const appointments = await Appointment.find()
    .populate('department', 'name')
    .populate('doctor', 'firstname lastname');
  res.status(200).json(appointments);
};

module.exports.bookAppointments = async (req, res) => {
  const {
    department,
    doctor,
    date,
    time,
    fullname,
    mobilenumber,
    email,
    message,
    user,
  } = req.body;

  try {
    const newAppointment = new Appointment({
      department,
      doctor,
      date,
      time,
      fullname,
      mobilenumber,
      email,
      message,
      user, // Include user ID in the appointment document
    });

    await newAppointment.save();
    res.status(201).json({
      message: 'Appointment booked successfully',
      appointment: newAppointment,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error booking appointment', error: error.message });
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

module.exports.deleteAppointmentById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Appointment.findByIdAndDelete(id);
    if (!response) {
      return res.status(404).json({ message: 'Department not found' });
    }
    res.status(200).json({ message: 'Department deleted successfully' });
  } catch (error) {
    res.status(500).json(error);
  }
};

// module.exports.getAppointmentsByUserId = async (req, res) => {
//   const userId = req.params.userId;

//   try {
//     const appointments = await Appointment.find({ user: userId })
//       .populate('doctor') // Populate doctor details
//       .populate('department'); // Populate department details if needed

//     res.status(200).json({ appointments });
//   } catch (error) {
//     res.status(500).json({
//       message: 'Error fetching appointments',
//       error: error.message,
//     });
//   }
// };
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
