import { firestore } from "../../database/firebase.js";
import { collection, addDoc, getDocs } from "firebase/firestore";

export const addTeacherToFirebase = async (req, res) => {
  try {
    const data = await req.body;
    await data.forEach((element) => {
      const docRef = addDoc(collection(firestore, "teachers"), element);
      console.log("Document written with ID: ", docRef.id);
    });
  } catch (error) {}
};
export const addUnivertyListController = async (req, res) => {
  try {
    const data = await req.body;
    await data.forEach((element) => {
      const docRef = addDoc(
        collection(firestore, "intermediate_courses"),
        element
      );
      console.log("Document written with ID: ", docRef.id);
    });
  } catch (error) {}
};

export const getUnivertyAndProgramsController = async (req, res) => {
  try {
    // Fetching data concurrently using Promise.all
    const [
      masterSnapshot,
      bsSnapshot,
      phdSnapshot,
      intermediateSnapshot,
      matircSnapshot,
      universitySnapshot,
      collegeSnapshot,
      schoolSnapshot,
    ] = await Promise.all([
      getDocs(collection(firestore, "master_courses")),
      getDocs(collection(firestore, "bs_courses")),
      getDocs(collection(firestore, "phd_courses")),
      getDocs(collection(firestore, "intermediate_courses")),
      getDocs(collection(firestore, "matric_courses")),
      /** Insitute List */
      getDocs(collection(firestore, "university_lists")),
      getDocs(collection(firestore, "college_lists")),
      getDocs(collection(firestore, "school_lists")),
    ]);

    // Extracting data from snapshots
    const masterCourses = masterSnapshot.docs.map((doc) => doc.data());
    const bsCourses = bsSnapshot.docs.map((doc) => doc.data());
    const phdCourses = phdSnapshot.docs.map((doc) => doc.data());
    const intermediate = intermediateSnapshot.docs.map((doc) => doc.data());
    const matric = matircSnapshot.docs.map((doc) => doc.data());

    const universities = universitySnapshot.docs.map((doc) => doc.data());
    const colleges = collegeSnapshot.docs.map((doc) => doc.data());
    const schools = schoolSnapshot.docs.map((doc) => doc.data());

    // Sending data to frontend
    res.status(200).json({
      masterCourses,
      bsCourses,
      phdCourses,
      intermediate,
      matric,
      universities,
      colleges,
      schools,
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
