import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import TeacherPersonalInformation from "./component/TeacherPersonalInformation";
import TeacherContactInformation from "./component/TeacherContactInformation";
import TeacherEducationBackground from "./component/TeacherEducationBackground";
import TeacherEmploymentInformation from "./component/TeacherEmploymentInformation";
import TeacherAdditionalInformation from "./component/TeacherAdditionalInformation";
import validateTeacherForm from "./TeacherFunction/validateTeacherForm";
import {
  addUniverstyList,
  getUniverstyAndProgramsList,
} from "../../../api/paths/admin_api";

const AddTeacher = () => {
  const [fullName, setFullName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [cnic, setCnic] = useState("");
  const [gender, setGender] = useState("");
  const [employmentInformation, setEmploymentInformation] = useState([]);
  const [addEmploymentInformation, setAddEmploymentInformation] = useState([]);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [degree, setDegree] = useState("");
  const [fieldOfStudy, setFieldOfStudy] = useState("");
  const [universityName, setUniversityName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [languagesSpoken, setLanguagesSpoken] = useState("");
  const [awardsAndHonors, setAwardsAndHonors] = useState("");
  const [initialData, setInitialData] = useState([]);

  const [errors, setErrors] = useState({});

  useEffect(() => {
    getInitialData();
  }, []);

  const getInitialData = async () => {
    try {
      const result = await getUniverstyAndProgramsList();
      setInitialData(result.data);
      console.log(
        "🔴 ~ file: AddTeacher.js:46 ~ getInitialData ~ result.data:",
        result.data
      );
    } catch (error) {}
  };
  const addUni = async () => {
    try {
      const res = await addUniverstyList();
    } catch (error) {}
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    /* const errors = validateTeacherForm(
      
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
      awardsAndHonors
    ); */
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      Object.keys(errors).forEach((key) => {
        console.log(errors[key]);
        toast.error(errors[key], {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
    } else {
      const teacherObj = {};
    }
  };

  const onClickAddEmployment = () => {
    setEmploymentInformation([...employmentInformation, {}]);
  };
  return (
    <form
      className="w-full min-h-screen overflow-hidden"
      onSubmit={handleSubmit}
    >
      <TeacherPersonalInformation
        setCnic={setCnic}
        fullName={fullName}
        setFullName={setFullName}
        cnic={cnic}
        dateOfBirth={dateOfBirth}
        setDateOfBirth={setDateOfBirth}
        gender={gender}
        setGender={setGender}
      />
      <TeacherContactInformation
        email={email}
        setEmail={setEmail}
        setAddress={setAddress}
        setPhoneNumber={setPhoneNumber}
        address={address}
        phoneNumber={phoneNumber}
      />
      <TeacherEducationBackground
        initialData={initialData}
        degree={degree}
        setDegree={setDegree}
        fieldOfStudy={fieldOfStudy}
        setFieldOfStudy={setFieldOfStudy}
        universityName={universityName}
        setUniversityName={setUniversityName}
        startDate={startDate}
        endDate={endDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
      />
      {employmentInformation.map((info, index) => (
        <TeacherEmploymentInformation
          key={index}
          employmentInformation={info}
          setEmploymentInformation={(updatedInfo) =>
            setEmploymentInformation((prevInfo) =>
              prevInfo.map((item, i) => (i === index ? updatedInfo : item))
            )
          }
        />
      ))}

      <TeacherAdditionalInformation
        languagesSpoken={languagesSpoken}
        setLanguagesSpoken={setLanguagesSpoken}
        setAwardsAndHonors={setAwardsAndHonors}
        awardsAndHonors={awardsAndHonors}
      />

      <button
        className="bg-orange-500 ml-10  hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
        onClick={addUni}
      >
        Submit
      </button>
    </form>
  );
};

export default AddTeacher;
