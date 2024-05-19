import React from "react";
import MyTextInput from "../../../../components/Inputs/MyTextInput";
import MyOptionsInput from "../../../../components/Inputs/MyOptionsInput";

const TeacherEmploymentInformation = ({
  employmentInformation,
  setEmploymentInformation,
}) => {
  const handleFieldChange = (field, value) => {
    const updatedInfo = { ...employmentInformation, [field]: value };
    setEmploymentInformation(updatedInfo);
  };

  return (
    <div className="w-full rounded pt-6 px-8 pb-2 flex flex-col">
      <h2 className="text-2xl font-bold mb-4">Employment Information</h2>
      <div className="flex gap-3">
        <MyTextInput
          label={"Position"}
          type={"text"}
          value={employmentInformation.position || ""}
          placeholder={"Enter your position"}
          onChange={(e) => handleFieldChange("position", e.target.value)}
        />
        <MyTextInput
          label={"Office Name"}
          type={"text"}
          value={employmentInformation.officeName || ""}
          placeholder={"Enter your Office Name"}
          onChange={(e) => handleFieldChange("officeName", e.target.value)}
        />
        <MyTextInput
          label={"Office Location"}
          type={"text"}
          value={employmentInformation.officeCity || ""}
          placeholder={"Enter your office city"}
          onChange={(e) => handleFieldChange("officeCity", e.target.value)}
        />
        <MyTextInput
          label={"Employment Start Date"}
          type={"date"}
          value={employmentInformation.employmentStartDate || ""}
          placeholder={"Enter your employment start date"}
          onChange={(e) =>
            handleFieldChange("employmentStartDate", e.target.value)
          }
        />
        <MyTextInput
          label={"Employment End Date"}
          type={"date"}
          value={employmentInformation.employmentEndDate || ""}
          placeholder={"Enter your employment end date"}
          onChange={(e) =>
            handleFieldChange("employmentEndDate", e.target.value)
          }
        />
        <MyOptionsInput
          label={"Employment Status"}
          value={employmentInformation.employmentStatus || ""}
          defaultOption={"Select your employment status"}
          onChange={(e) =>
            handleFieldChange("employmentStatus", e.target.value)
          }
          options={[
            { value: "full_time", name: "Full Time" },
            { value: "part_time", name: "Part Time" },
          ]}
        />
      </div>
    </div>
  );
};

export default TeacherEmploymentInformation;
