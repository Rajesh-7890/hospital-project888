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

module.exports.getDoctorsByDepartmentID = async (req, res) => {
  const { departmentID } = req.params;

  // Validate the departmentID format
  if (!mongoose.Types.ObjectId.isValid(departmentID)) {
    return res.status(400).json({ message: 'Invalid department ID format' });
  }

  try {
    // Find doctors by department ID
    const doctors = await Doctor.find({ department: departmentID });

    if (doctors.length === 0) {
      return res
        .status(404)
        .json({ message: 'No doctors found for this department' });
    }

    res.status(200).json(doctors);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
