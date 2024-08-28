const Department = require('../db/models/departmentSchema');

module.exports.getDepartments = async (req, res) => {
  const departments = await Department.find();
  res.status(200).json(departments);
};

module.exports.getDepartmentsById = async (req, res) => {
  const { id } = req.params;
  const departments = await Department.findById(id);
  res.status(201).json(departments);
};

module.exports.postDepartments = async (req, res) => {
  const response = await Department.create({
    name: req.body.name,
    image: `http://localhost:${process.env.PORT}/uploads/${req.file.filename}`,
  });
  res.status(200).json({ message: 'Department Added', data: response });
};

module.exports.getDoctorByDepartmentId = async (req, res) => {
  const { departmentId } = req.params;

  try {
    // Ensure the departmentId is converted to an ObjectId
    const doctors = await Doctor.find({
      department: new mongoose.Types.ObjectId(departmentId),
    }).populate('department', 'name');
    console.log('Doctors found:', doctors); // Log the results
    res.status(200).json(doctors);
  } catch (error) {
    console.error('Error finding doctors by department:', error);
    res
      .status(500)
      .json({ error: 'An error occurred while fetching doctors.' });
  }
};
