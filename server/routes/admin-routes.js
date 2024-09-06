const express = require('express');
const controllers = require('../controllers/adminControllers');
const router = express.Router();

router.get('/', controllers.getAdmin);
router.post('/sign-up', controllers.signupAdmin);
router.post('/login-in', controllers.loginAdmin);
router.get('/:id', controllers.getAdminById);

module.exports = router;
