const Admin = require('../db/models/adminSchema');
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

module.exports.getAdmin = async (req, res) => {
  const admins = await Admin.find();
  res.status(200).json(admins);
};

module.exports.signupAdmin = async (req, res) => {
  try {
    const admin = await Admin.findOne({ email: req.body.email });
    if (admin) {
      return res.status(403).json({ message: 'Email already taken' });
    }

    const hpassword = await bcrypt.hash(req.body.password, 10);

    const response = await Admin.create({
      ...req.body,
      password: hpassword,
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
        console.log('Email error:', error);
        return res.status(404).json({ ErrorOccurred: error });
      } else {
        return res.status(201).json({ message: 'Mail Send', value: response });
      }
    });
  } catch (err) {
    console.log('Signup error:', err);
    res
      .status(500)
      .json({ message: 'Server error during signup', error: err.message });
  }
};

module.exports.loginAdmin = async (req, res) => {
  const { email } = req.body;
  const admin = await Admin.findOne({ email: email });
  if (!admin) {
    res.status(201).json({ message: 'Email is INCORRECT' });
  }
  try {
    const isMatching = await bcrypt.compare(req.body.password, admin.password);
    if (!isMatching) {
      return res.status(430).json({ message: 'password is DOESNT MATCH' });
    }
  } catch {
    console.log('error');
  }

  const token = jwt.sign({ id: admin._id, role: 'admin' }, process.env.ADMIN, {
    expiresIn: '365d',
  });

  res.status(201).json({
    message: 'You are logged in',
    Token: token,
    id: admin._id,
  });
};

module.exports.getAdminById = async (req, res) => {
  try {
    const { id } = req.params;
    const admin = await Admin.findById(id);
    res.status(201).json(admin);
  } catch (e) {
    return res.status(500).json(e);
  }
};
