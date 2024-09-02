const express = require('express');
const controllers = require('../controllers/appointmentControllers');
const router = express.Router();

router.get('/', controllers.getappointments);
router.get('/:id', controllers.getAppointmentById);
router.delete('/user/:userId', controllers.deleteAppointmentByUserId);
router.get('/api/:userId', controllers.getAppointmentsByUserId);
router.get('/doctor/:doctorId', controllers.getAppointmentByDoctorId);
router.post('/book-appointment', controllers.bookAppointments);
router.patch('/update/:appointmentId', controllers.handleStatusChange);

module.exports = router;
