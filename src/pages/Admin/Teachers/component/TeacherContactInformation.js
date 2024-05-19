import React from "react";
import MyTextInput from "../../../../components/Inputs/MyTextInput";

const TeacherContactInformation = ({
  email,
  setEmail,
  setAddress,
  setPhoneNumber,
  address,
  phoneNumber,
}) => {
  return (
    <div className="w-full rounded pt-6 px-8 pb-2 flex flex-col">
      <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
      <div className="flex gap-3">
        <MyTextInput
          label={"Email"}
          type={"email"}
          value={email}
          placeholder={"Enter your email"}
          onChange={(e) => setEmail(e.target.value)}
        />
        <MyTextInput
          label={"Phone Number"}
          type={"number"}
          value={phoneNumber}
          placeholder={"Enter your phone number"}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <MyTextInput
          label={"Address"}
          type={"text"}
          value={address}
          placeholder={"Enter your address"}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
    </div>
  );
};

export default TeacherContactInformation;
