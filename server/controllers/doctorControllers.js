const Doctor = require('../db/models/doctorSchema');
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const uploads = require('../middlewares/upload');
const mongoose = require('mongoose');

module.exports.getDoctors = async (req, res) => {
  const doctors = await Doctor.find().populate('department', 'name');
  res.status(200).json(doctors);
};

module.exports.getDoctorByDepartmentId = async (req, res) => {
  const { departmentId } = req.params;

  try {
    const doctors = await Doctor.find({
      department: new mongoose.Types.ObjectId(departmentId),
    }).populate('department', 'name');
    console.log('Doctors found:', doctors);
    res.status(200).json(doctors);
  } catch (error) {
    console.error('Error finding doctors by department:', error);
    res
      .status(500)
      .json({ error: 'An error occurred while fetching doctors.' });
  }
};

module.exports.signupDoctor = async (req, res) => {
  console.log(req.file);
  const doctor = await Doctor.findOne({ email: req.body.email });
  if (doctor) {
    return res.status(403).json({ message: 'Email already taken' });
  }

  const imageLink = `http://localhost:${process.env.PORT}/uploads/${req.file.originalname}`;

  const hashedpassword = await bcrypt.hash(req.body.password, 2);

  const response = await Doctor.create({
    ...req.body,
    image: imageLink,
    password: hashedpassword,
  });

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
  });

  let mailOptions = {
    from: process.env.EMAIL,
    to: req.body.email,
    subject: 'Login creds for DocBooking App',
    text: `your emailID is :${req.body.email} and ur password is :${req.body.password}`,
  };

  transporter.sendMail(mailOptions, error => {
    if (error) {
      return res.status(404).json({ ErrorOccurred: error });
    } else
      return res.status(201).json({ message: 'Mail Send', value: response });
  });
};

module.exports.loginDoctor = async (req, res) => {
  const { email } = req.body;
  const doctor = await Doctor.findOne({ email: email });
  if (!doctor) {
    res.status(201).json({ message: 'Email is INCORRECT' });
  }
  try {
    const isMatching = await bcrypt.compare(req.body.password, doctor.password);
    if (!isMatching) {
      return res.status(430).json({ message: 'password is DOESNT MATCH' });
    }
  } catch {
    console.log('error');
  }

  const token = jwt.sign(
    { id: doctor._id, role: 'doctor' },
    process.env.TOKEN,
    { expiresIn: '365d' }
  );

  res.status(201).json({
    message: 'You are logged in',
    Token: token,
    id: doctor._id,
  });
};

module.exports.forgotpasswords = async (req, res) => {
  const { email } = req.body;
  const doctor = await Doctor.findOne({ email: email });
  if (!doctor) {
    res.status(201).json({ message: 'Email doesnt exist' });
  }

  const resetToken = jwt.sign({ email: email }, process.env.TOKEN, {
    expiresIn: 300,
  });

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
  });

  let mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: 'PASSWORD RESET MAIL',

    text: ` please rest your password through this link  http://localhost:${process.env.PORT}/doctor/reset/${resetToken}`,
  };

  transporter.sendMail(mailOptions, error => {
    if (error) {
      return res.status(404).json({ ErrorOccurred: error });
    } else return res.status(201).json({ message: 'Mail Send' });
  });
};

module.exports.resetpasswords = async (req, res) => {
  const { token } = req.params;
  const { password, confirmpassword } = req.body;

  try {
    const isValid = jwt.verify(token, process.env.TOKEN);
    if (password != confirmpassword) {
      return res.status(201).json({ message: 'Passwords doesnt match' });
    }

    const email = isValid.email;
    const hashedpassword = await bcrypt.hash(password, 2);
    const doctor = await Doctor.findOneAndUpdate(
      { email: email },
      { password: hashedpassword }
    );
    res.status(201).json({ message: 'password reset suceesfully' });
  } catch (e) {
    res.status(401).json({ message: 'invalid Token' });
  }
};

module.exports.getDoctorById = async (req, res) => {
  const { id } = req.params;
  const user = await Doctor.findById(id);
  res.status(200).json(user);
};

module.exports.getDoctorByDepartmentId = async (req, res) => {
  const { departmentId } = req.params;

  try {
    const doctors = await Doctor.find({
      department: new mongoose.Types.ObjectId(departmentId),
    }).populate('department', 'name');

    if (doctors.length === 0) {
      return res.status(404).json({ message: 'No doctors found' });
    }

    res.status(200).json(doctors);
  } catch (error) {
    console.error('Error finding doctors by department:', error);
    res
      .status(500)
      .json({ error: 'An error occurred while fetching doctors.' });
  }
};
