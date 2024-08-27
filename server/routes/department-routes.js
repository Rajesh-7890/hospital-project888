const express = require('express');
const upload = require('../middlewares/upload');
const controllers = require('../controllers/departmentControllers');

const router = express.Router();

router.get('/', controllers.getDepartments);
router.get('/:id', controllers.getDepartmentsById);
router.post('/', upload.single('image'), controllers.postDepartments);
module.exports = router;
