import { collection, addDoc, getDocs } from "firebase/firestore";
import { firestore } from "../../database/firebase.js";

export const getDepartmentsController = async (req, res) => {
  try {
    const departments = getDocs(collection(firestore, "departments"));
    const departmentsData = (await departments).docs.map((doc) => doc.data());
    res.status(200).json({
      departments: departmentsData,
    });
  } catch (error) {
    console.error("Error fetching data for deparments form:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
