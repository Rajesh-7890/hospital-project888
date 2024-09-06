const User = require('../db/models/userSchema');
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.getUser = async (req, res) => {
  const response = await User.find();
  res.status(201).json(response);
};

module.exports.signupUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(403).json({ message: 'Email already taken' });
    }

    const hpassword = await bcrypt.hash(req.body.password, 10);

    const response = await User.create({
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

module.exports.loginUser = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email: email });
  if (!user) {
    res.status(201).json({ message: 'Email is INCORRECT' });
  }
  try {
    const isMatching = await bcrypt.compare(req.body.password, user.password);
    if (!isMatching) {
      return res.status(430).json({ message: 'password is DOESNT MATCH' });
    }
  } catch {
    console.log('error');
  }

  const token = jwt.sign({ id: user._id, role: 'user' }, process.env.KEY, {
    expiresIn: '365d',
  });

  res.status(201).json({
    message: 'You are logged in',
    Token: token,
    id: user._id,
  });
};

module.exports.forgotpassword = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email: email });
  if (!user) {
    res.status(201).json({ message: 'Email doesnt exist' });
  }

  const resetToken = jwt.sign({ email: email }, process.env.KEY, {
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

    text: ` please rest your password through this link  http://localhost:${process.env.PORT}/user/reset/${resetToken}`,
  };

  transporter.sendMail(mailOptions, error => {
    if (error) {
      return res.status(404).json({ ErrorOccurred: error });
    } else return res.status(201).json({ message: 'Mail Send' });
  });
};

module.exports.resetpassword = async (req, res) => {
  const { token } = req.params;
  const { password, confirmpassword } = req.body;

  try {
    const isValid = jwt.verify(token, process.env.KEY);
    if (password != confirmpassword) {
      return res.status(201).json({ message: 'Passwords doesnt match' });
    }

    const email = isValid.email;
    const hashedpassword = await bcrypt.hash(password, 2);
    const user = await User.findOneAndUpdate(
      { email: email },
      { password: hashedpassword }
    );
    res.status(201).json({ message: 'password reset suceesfully', id: user });
  } catch (e) {
    res.status(401).json({ message: 'invalid Token' });
  }
};

module.exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(201).json(user);
  } catch (e) {
    return res.status(500).json(e);
  }
};
