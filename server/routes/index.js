const express = require('express');
const departmentRoutes = require('./department-routes');
const doctorRoutes = require('./doctor-routes');
const userRoutes = require('./a-user-routes');
const appointmentRoutes = require('./appointment-routes');
const router = express.Router();

router.use('/department', departmentRoutes);
router.use('/doctor', doctorRoutes);
router.use('/user', userRoutes);
router.use('/appointment', appointmentRoutes);

module.exports = router;
