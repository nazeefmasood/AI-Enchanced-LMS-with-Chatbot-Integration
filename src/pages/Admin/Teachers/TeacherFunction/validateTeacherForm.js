const validateTeacherForm = ({
  fullName,
  dateOfBirth,
  cnic,
  gender,
  phoneNumber,
  email,
  address,
  highestDegree,
  fieldOfStudy,
  universityName,
  yearOfGraduation,
  position,
  department,
  faculty,
  officeLocation,
  employmentEndDate,
  employmentStartDate,
  employmentStatus,
  languagesSpoken,
  awardsAndHonors,
}) => {
  const errors = {};
  if (!fullName) {
    errors.fullName = "Full name is required";
  }
  if (!dateOfBirth) {
    errors.dateOfBirth = "Date of birth is required";
  }
  if (!cnic) {
    errors.dateOfBirth = "Cnic is required";
  }
  if (!gender) {
    errors.gender = "Gender is required";
  }
  if (!phoneNumber) {
    errors.phoneNumber = "Phone number is required";
  }
  if (!email) {
    errors.email = "Email is required";
  }
  if (!address) {
    errors.address = "Address is required";
  }
  if (!highestDegree) {
    errors.highestDegree = "Highest degree is required";
  }
  if (!fieldOfStudy) {
    errors.fieldOfStudy = "Field of study is required";
  }
  if (!universityName) {
    errors.universityName = "University name is required";
  }
  if (!yearOfGraduation) {
    errors.yearOfGraduation = "Year of graduation is required";
  }
  if (!position) {
    errors.position = "Position is required";
  }
  if (!department) {
    errors.department = "Department is required";
  }
  if (!faculty) {
    errors.faculty = "Faculty is required";
  }
  if (!officeLocation) {
    errors.officeLocation = "Office location is required";
  }
  if (!employmentStartDate) {
    errors.employmentStartDate = "Employment start date is required";
  }
  if (!employmentEndDate) {
    errors.employmentStartDate = "Employment end date is required";
  }
  if (!employmentStatus) {
    errors.employmentStatus = "Employment status is required";
  }
  if (!languagesSpoken) {
    errors.languagesSpoken = "Languages spoken is required";
  }
  if (!awardsAndHonors) {
    errors.awardsAndHonors = "Awards and honors is required";
  }

  return errors;
};

export default validateTeacherForm;
