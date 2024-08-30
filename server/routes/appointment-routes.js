const express = require('express');
const controllers = require('../controllers/appointmentControllers');
const router = express.Router();

router.get('/', controllers.getappointments);
router.post('/book-appointment', controllers.bookAppointments);
router.get('/:id', controllers.getAppointmentById);

module.exports = router;
