const express = require('express');
const controllers = require('../controllers/userControllers');
const router = express.Router();

router.get('/', controllers.getUser);
router.post('/sign-up', controllers.signupUser);
router.post('/login-in', controllers.loginUser);
router.post('/forgot-password', controllers.forgotpassword);
router.post('/reset/:token', controllers.resetpassword);
router.get('/:id', controllers.getUserById);

module.exports = router;
