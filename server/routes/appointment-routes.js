const express = require('express');
const controllers = require('../controllers/appointmentControllers');
const router = express.Router();

router.get('/', controllers.getappointments);
router.get('/:id', controllers.getAppointmentById);
router.delete('/:id', controllers.deleteAppointmentById);
// router.get('/:userId', controllers.getAppointmentsByUserId);
router.get('/api/:userId', controllers.getAppointmentsByUserId);
// router.get('/user/:userId', controllers.getAppointmentsByUserId);
router.post('/book-appointment', controllers.bookAppointments);

module.exports = router;
