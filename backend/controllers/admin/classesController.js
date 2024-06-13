import { firestore } from "../../database/firebase.js";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  updateDoc,
  getDoc,
} from "firebase/firestore";

export const getAllStudentsClassController = async (req, res) => {
  try {
    const studentsRef = collection(firestore, "students");
    const q = query(
      studentsRef,
      where("universty_profile.class_allotted", "==", false)
    );
    const [
      studentsSnapshot,
      bsSnapshot,
      msSnapshot,
      phdSnapshot,
      departmentSnapshot,
    ] = await Promise.all([
      getDocs(q),
      getDocs(collection(firestore, "programs_bs")),
      getDocs(collection(firestore, "programs_ms")),
      getDocs(collection(firestore, "programs_phd")),
      getDocs(collection(firestore, "departments")),
    ]);

    const bsOfferedCourse = bsSnapshot.docs.map((doc) => {
      const {
        program_information: { program_code, program_name },
      } = doc.data();
      const nameValue = program_name + "_" + program_code;
      return { name: program_name, value: nameValue };
    });
    const msOfferedCourse = msSnapshot.docs.map((doc) => {
      const {
        program_information: { program_code, program_name },
      } = doc.data();
      const nameValue = program_name + "_" + program_code;
      return { name: nameValue, value: nameValue };
    });
    const phdOfferedCourse = phdSnapshot.docs.map((doc) => {
      const {
        program_information: { program_code, program_name },
      } = doc.data();
      const nameValue = program_name + "_" + program_code;
      return { name: nameValue, value: nameValue };
    });
    const departments = departmentSnapshot.docs.map((data) => {
      const { departmentName, shortID } = data.data();
      return { name: departmentName, value: departmentName + "_" + shortID };
    });

    const students = studentsSnapshot.docs.map((student) => {
      const data = student.data();
      return {
        student_id: data.universty_profile.student_id,
        student_roll_number: data.universty_profile.roll_number,
        student_name: data.personal_information.student_name,
        student_email: data.personal_information.student_email,
        student_gender: data.personal_information.student_gender,
        student_phone_number: data.personal_information.student_phone_number,
        student_whatsapp_number:
          data.personal_information.student_whatsapp_number,
        current_semester: data.universty_profile.current_semester,
        admission_session: data.admission_information.admission_session,
        enrolled_program: data.admission_information.enrolled_program,
        enrolled_program_code: data.admission_information.enrolled_program_code,
      };
    });

    res.status(200).json({
      students,
      programs_bs: bsOfferedCourse,
      programs_ms: msOfferedCourse,
      programs_phd: phdOfferedCourse,
      departments: departments,
    });
  } catch (error) {
    console.error("Error fetching students:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const addClassDataController = async (req, res) => {
  try {
    const regularCourse = [];
    const { class_students, degree_name } = req.body;
    const strippedShortID = degree_name.split("_")[1];
    console.log(
      "🔴 ~ file: classesController.js:94 ~ addClassDataController ~ strippedShortID:",
      strippedShortID
    );

    const degreeSchemaRef = collection(firestore, "degree_schemas");
    const studentsRef = collection(firestore, "students");

    const addCourses = async () => {
      const q = query(
        degreeSchemaRef,
        where("degreeShortID", "==", strippedShortID)
      );
      const degreeSnapshot = await getDocs(q);

      degreeSnapshot.forEach((doc) => {
        const data = doc.data();
        const courses = data.semester_courses[0].courses;
        courses.forEach((course) => {
          regularCourse.push(course);
        });
      });
    };

    await addCourses();

    const classObj = {
      ...req.body,
      regularCourses: regularCourse,
    };

    await addDoc(collection(firestore, "classes"), classObj);

    const updatePromises = class_students.map(async (student) => {
      const q = query(
        studentsRef,
        where("universty_profile.student_id", "==", student.student_id)
      );
      const studentSnapshot = await getDocs(q);

      if (!studentSnapshot.empty) {
        const studentDocRef = studentSnapshot.docs[0].ref;
        await updateDoc(studentDocRef, {
          "universty_profile.class_allotted": true,
        });
      }
    });

    await Promise.all(updatePromises);

    res
      .status(200)
      .json({ message: "Class created and students updated successfully" });
  } catch (error) {
    console.error("Error adding class data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getALLClassesController = async (req, res) => {
  try {
    const classes = getDocs(collection(firestore, "classes"));
    const classesData = (await classes).docs.map((doc) => doc.data());

    res.status(200).json({
      classes: classesData,
    });
  } catch (error) {}
};
