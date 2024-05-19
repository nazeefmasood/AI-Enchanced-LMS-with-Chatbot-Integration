import React, { useEffect, useState } from "react";
import MyTextInput from "../../../../components/Inputs/MyTextInput";
import MyOptionsInput from "../../../../components/Inputs/MyOptionsInput";
import { PlusCircle } from "phosphor-react";

const TeacherEducationBackground = ({
  degree,
  initialData,
  setDegree,
  fieldOfStudy,
  setFieldOfStudy,
  universityName,
  setUniversityName,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}) => {
  const [programs, setPrograms] = useState([]);
  const [inisitutes, setInsitutes] = useState([]);

  useEffect(() => {
    const populatePrograms = () => {
      if (degree === "master_degree") {
        setPrograms(initialData.masterCourses);
        setInsitutes(initialData.universities);
      } else if (degree === "bs_degree") {
        setPrograms(initialData.bsCourses);
        setInsitutes(initialData.universities);
      } else if (degree === "phd_degree") {
        setPrograms(initialData.phdCourses);
        setInsitutes(initialData.universities);
      } else if (degree === "intermediate") {
        setPrograms(initialData.intermediate);
        setInsitutes(initialData.colleges);
      } else if (degree === "matric") {
        setPrograms(initialData.matric);
        setInsitutes(initialData.schools);
      }
    };

    populatePrograms();
  }, [degree, initialData]);

  const handleOptionDegreeChange = (e) => {
    const selectedDegree = e.target.value;
    setDegree(selectedDegree);
  };

  console.log(
    "🔴 ~ file: TeacherEducationBackground.js:17 ~ programs:",
    programs
  );

  return (
    <div className="w-full rounded pt-6 px-8 pb-2 flex flex-col">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold mb-4">Educational Background</h2>
        <button>
          <PlusCircle size={32} color="#000" />
        </button>
      </div>
      <div className="flex gap-3">
        <MyOptionsInput
          label={"Select Degree"}
          value={degree}
          defaultOption={"Select your degree status"}
          onChange={(e) => handleOptionDegreeChange(e)}
          options={[
            { value: "matric", name: "Matric" },
            { value: "intermediate", name: "Intermediate / College" },
            { value: "bs_degree", name: "BS" },
            { value: "master_degree", name: "Masters" },
            { value: "phd_degree", name: "Phd Degree" },
          ]}
        />
        <MyOptionsInput
          label={"Degree Name"}
          value={fieldOfStudy}
          placeholder={"Enter your field of study"}
          onChange={(e) => setFieldOfStudy(e.target.value)}
          options={[...programs]}
        />
        <MyOptionsInput
          label={"Insitute Name"}
          type={"text"}
          value={universityName} /** Change the insitute name */
          placeholder={"Enter your insitute name"}
          onChange={(e) => setUniversityName(e.target.value)}
          options={[...inisitutes]}
        />
        <MyTextInput
          label={"Start Date"}
          type={"date"}
          value={startDate}
          placeholder={"Enter start date"}
          onChange={(e) => setStartDate(e.target.value)}
        />

        <MyTextInput
          label={"Completion Date"}
          type={"date"}
          value={endDate}
          placeholder={"Enter completion date"}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>
    </div>
  );
};

export default TeacherEducationBackground;
