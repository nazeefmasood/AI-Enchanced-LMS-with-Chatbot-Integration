import React from "react";
import MyTextInput from "../../../../components/Inputs/MyTextInput";
import MyOptionsInput from "../../../../components/Inputs/MyOptionsInput";

const TeacherPersonalInformation = ({
  fullName,
  setFullName,
  cnic,
  setCnic,
  dateOfBirth,
  setDateOfBirth,
  gender,
  setGender,
}) => {
  const genderOptions = [
    {
      value: "male",
      name: "Male",
    },
    {
      value: "female",
      name: "Female",
    },
  ];
  return (

    <div className="w-full rounded  pt-6 px-8 pb-2 flex flex-col">
      <h2 className="text-2xl font-bold mb-4">Personal Information</h2>
      <div className="flex gap-3">
        <MyTextInput
          label={"Full Name"}
          type={"text"}
          value={fullName}
          placeholder={"Enter your full name"}
          onChange={(e) => setFullName(e.target.value)}
        />
        <MyTextInput
          label={"Cnic"}
          type={"number"}
          value={cnic}
          placeholder={"Enter your cnic"}
          onChange={(e) => setCnic(e.target.value)}
        />
        <MyTextInput
          label={"Date of Birth"}
          type={"date"}
          value={dateOfBirth}
          placeholder={"Enter your date of birth"}
          onChange={(e) => setDateOfBirth(e.target.value)}
        />

        <MyOptionsInput
          label={"Gender"}
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          options={genderOptions}
          defaultOption={"Select your gender"}
        />
      </div>
    </div>
  );
};

export default TeacherPersonalInformation;
