const express = require('express');
const controllers = require('../controllers/doctorControllers');
const upload = require('../middlewares/upload');
const router = express.Router();

router.get('/', controllers.getDoctors);
router.post('/sign-up', upload.single('image'), controllers.signupDoctor);
router.post('/login-in', controllers.loginDoctor);
router.post('/forgot-password', controllers.forgotpasswords);
router.post('/reset/:token', controllers.resetpasswords);
router.get('/:id', controllers.getDoctorById);
router.get('/doctors/:departmentId', controllers.getDoctorByDepartmentId);

module.exports = router;
