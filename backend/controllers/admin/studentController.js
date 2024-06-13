import { auth, firestore } from "../../database/firebase.js";
import {
  collection,
  addDoc,
  getDocs,
  query,
  doc,
  where,
  updateDoc,
} from "firebase/firestore";
import bcrypt from "bcrypt";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const getUnivertyAndProgramsStudentController = async (req, res) => {
  try {
    const [
      masterSnapshot,
      bsSnapshot,
      intermediateSnapshot,
      matircSnapshot,
      universitySnapshot,
      collegeSnapshot,
      schoolSnapshot,
      bsOfferedSnapshot,
      msOfferedSnapshot,
    ] = await Promise.all([
      getDocs(collection(firestore, "master_courses")),
      getDocs(collection(firestore, "bs_courses")),
      getDocs(collection(firestore, "intermediate_courses")),
      getDocs(collection(firestore, "matric_courses")),
      /** Insitute List */
      getDocs(collection(firestore, "university_lists")),
      getDocs(collection(firestore, "college_lists")),
      getDocs(collection(firestore, "school_lists")),

      /** Offered Programs List */
      getDocs(collection(firestore, "programs_bs")),
      getDocs(collection(firestore, "programs_ms")),
    ]);

    const masterCourses = masterSnapshot.docs.map((doc) => doc.data());
    const bsCourses = bsSnapshot.docs.map((doc) => doc.data());
    const intermediate = intermediateSnapshot.docs.map((doc) => doc.data());
    const matric = matircSnapshot.docs.map((doc) => doc.data());

    const universities = universitySnapshot.docs.map((doc) => doc.data());
    const colleges = collegeSnapshot.docs.map((doc) => doc.data());
    const schools = schoolSnapshot.docs.map((doc) => doc.data());

    const bsOfferedCourse = bsOfferedSnapshot.docs.map((doc) => {
      const {
        program_information: { program_code, program_name },
      } = doc.data();
      const nameValue = program_name + "_" + program_code;
      return { name: program_name, value: nameValue };
    });
    const msOfferedCourse = msOfferedSnapshot.docs.map((doc) => {
      const {
        program_information: { program_code, program_name },
      } = doc.data();
      const nameValue = program_name + "_" + program_code;
      return { name: program_name, value: nameValue };
    });

    res.status(200).json({
      masterCourses,
      bsCourses,
      intermediate,
      matric,
      universities,
      colleges,
      schools,
      programs_bs: bsOfferedCourse,
      programs_ms: msOfferedCourse,
    });
  } catch (error) {
    console.error("Error fetching data for student form:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// export const addUnivertyStudentController = async (req, res) => {
//   try {
//     const {
//       student_id,
//       personal_information,
//       educational_information,
//       contact_information,
//       admissionInformation,
//     } = req.body;

//     const languages = req.body?.additional_infomation?.languages;
//     const awards = req.body?.additional_infomation?.awards_and_honer;
//     const newLanguagesArray = [];
//     const newAwardsArray = [];
//     languages.forEach((element) => {
//       newLanguagesArray.push(element.language);
//     });
//     awards.forEach((element) => {
//       newAwardsArray.push(element.award);
//     });

//     const studentObj = {
//       universty_profile: {
//         current_semester: 1,
//         class_allotted: false,
//         student_id: student_id,
//       },
//       personal_information: { ...personal_information },
//       educational_information: { ...educational_information },
//       admission_information: {
//         ...admissionInformation,
//         date_added: Date.now(),
//       },
//       contact_information: { ...contact_information },
//       current_semester: [
//         {
//           semester: 1,
//           courses: [],
//         },
//       ],
//       previous_semesters: [],
//       courses_passed: [],
//       courses_failed: [],
//       additional_infomation: {
//         languages: newLanguagesArray,
//         awards_and_honer: newAwardsArray,
//       },
//     };

//     const docRef = await addDoc(collection(firestore, "students"), studentObj);
//     console.log("Document written with ID: ", docRef);
//   } catch (error) {
//     console.error("Error fetching adding data for student:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };
export async function updateRollNumber(session, program) {
  const rollNumbersRef = collection(firestore, "roll_numbers");
  const q = query(rollNumbersRef, where("session", "==", session));
  const rollNumbersSnapshot = await getDocs(q);

  let lastRollNumber = 0;
  let rollNumberDocRef;

  if (rollNumbersSnapshot.empty) {
    const newDoc = {
      session: session,
      program_codes: {
        [program]: {
          last_roll_number: 0,
        },
      },
    };
    const docRef = await addDoc(rollNumbersRef, newDoc);
    rollNumberDocRef = doc(firestore, "roll_numbers", docRef.id);
  } else {
    const rollNumberDoc = rollNumbersSnapshot.docs[0];
    const rollNumberData = rollNumberDoc.data();
    rollNumberDocRef = rollNumberDoc.ref;

    if (rollNumberData.program_codes[program] === undefined) {
      await updateDoc(rollNumberDocRef, {
        [`program_codes.${program}`]: {
          last_roll_number: 0,
        },
      });
      lastRollNumber = 0;
    } else {
      lastRollNumber = rollNumberData.program_codes[program].last_roll_number;
    }
  }

  const newRollNumber = lastRollNumber + 1;
  const rollNumberString = String(newRollNumber).padStart(3, "0");
  const formattedRollNumber = `${session}-${program}-${rollNumberString}`;

  // Update the roll number in Firestore
  await updateDoc(rollNumberDocRef, {
    [`program_codes.${program}.last_roll_number`]: newRollNumber,
  });

  return formattedRollNumber;
}

export const addUnivertyStudentController = async (req, res) => {
  try {
    const {
      student_id,
      personal_information,
      educational_information,
      contact_information,
      admissionInformation,
    } = req.body;

    const languages = req.body?.additional_infomation?.languages || [];
    const awards = req.body?.additional_infomation?.awards_and_honer || [];
    const newLanguagesArray = languages.map((element) => element.language);
    const newAwardsArray = awards.map((element) => element.award);

    // Generate roll number
    const rollNumber = await updateRollNumber(
      admissionInformation.admission_session,
      admissionInformation.enrolled_program_code
    );

    const studentObj = {
      universty_profile: {
        current_semester: 1,
        class_allotted: false,
        student_id: student_id,
        roll_number: rollNumber,
      },
      personal_information: { ...personal_information },
      educational_information: { ...educational_information },
      admission_information: {
        ...admissionInformation,
        date_added: Date.now(),
      },
      contact_information: { ...contact_information },
      current_semester: [
        {
          semester: 1,
          courses: [],
        },
      ],
      previous_semesters: [],
      courses_passed: [],
      courses_failed: [],
      additional_infomation: {
        languages: newLanguagesArray,
        awards_and_honer: newAwardsArray,
      },
    };

    const docRef = await addDoc(collection(firestore, "students"), studentObj);
    console.log("Document written with ID: ", docRef.id);

    const email = personal_information.student_email;
    const password = "123456789";
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const hashedPassword = await bcrypt.hash(password, 10);
    const studentLoginObj = {
      account_uid: userCredential.user.uid,
      student_id: student_id,
      roll_number: rollNumber,
      email: email,
      password: hashedPassword,
      date_created: new Date(),
      date_modified: new Date(),
    };
    await addDoc(collection(firestore, "students_login"), studentLoginObj);

    res.status(200).json({ message: "Student added successfully" });
  } catch (error) {
    console.error("Error adding data for student:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getAllStudentsController = async (req, res) => {
  try {
    const students = getDocs(collection(firestore, "students"));
    const studentsData = (await students).docs.map((doc) => doc.data());
    res.status(200).json({
      students: studentsData,
    });
  } catch (error) {
    console.error("Error fetching data for deparments form:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
