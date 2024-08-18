const express = require('express');
const controllers = require('../controllers/hospital-Controllers');
const upload = require('../middlewares/upload');
const router = express.Router();

router.get('/', controllers.getHospital);
router.get('/:id', controllers.getById);
router.post('/', upload.single('image'), controllers.postHospital);

module.exports = router;
