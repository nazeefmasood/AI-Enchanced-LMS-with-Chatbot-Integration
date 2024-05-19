import React from "react";
import MyTextInput from "../../../../components/Inputs/MyTextInput";

const TeacherAdditionalInformation = ({
  languagesSpoken,
  setLanguagesSpoken,
  setAwardsAndHonors,
  awardsAndHonors,
}) => {
  return (
    <div className="w-full rounded pt-6 px-8 pb-2 flex flex-col">
      <h2 className="text-2xl font-bold mb-4">Additional Information</h2>
      <div className="flex gap-3">
        <MyTextInput
          label={"Languages Spoken"}
          type={"text"}
          value={languagesSpoken}
          placeholder={"Enter your languages spoken"}
          onChange={(e) => setLanguagesSpoken(e.target.value)}
        />
        <MyTextInput
          label={"Awards and Honors"}
          type={"text"}
          value={awardsAndHonors}
          placeholder={"Enter your awards and honors"}
          onChange={(e) => setAwardsAndHonors(e.target.value)}
        />
      </div>
    </div>
  );
};

export default TeacherAdditionalInformation;
