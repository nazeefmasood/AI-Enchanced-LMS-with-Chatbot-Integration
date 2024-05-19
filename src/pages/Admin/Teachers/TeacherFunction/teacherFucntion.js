export default addTeacher_SubmitForm = ({
  fullName,
  dateOfBirth,
  cnic,
  gender,
  phoneNumber,
  email,
  address,
  languagesSpoken,
  awardsAndHonors,
  educationInformation,
  employmentInformation,
  publications,
  memberships,
  certifications,
  researchGrants,
  researchInterests,
}) => {
  const teacherObj = {
    personalInformation: {
      fullName: fullName,
      dateOfBirth: dateOfBirth,
      cnic: cnic,
      gender: gender,
      contactInformation: {
        phoneNumber: phoneNumber,
        email: email,
      },
      address: address,
      imgUrl: "",
    },
    educationalBackground: [...educationInformation],
    employmentInformation: [...employmentInformation],
    currentClasses: [],
    taughtClasses: [],
    researchAndPublications: {
      researchInterests: [...researchInterests],
      publications: [...publications],
      researchGrants: [...researchGrants],
    },
    professionalMembershipsAndCertifications: {
      memberships: [...memberships],
      certifications: [...certifications],
    },
    administrativeDuties: {},
    additionalInformation: {
      languagesSpoken: [...languagesSpoken],
      awardsAndHonors: [...awardsAndHonors],
    },
  };


  
};
