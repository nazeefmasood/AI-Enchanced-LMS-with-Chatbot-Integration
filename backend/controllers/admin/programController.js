import { firestore } from "../../database/firebase.js";
import { collection, addDoc, getDocs } from "firebase/firestore";

export const addProgramDataController = async (req, res) => {
  try {
    const data = await req.body;
    const program_type =
      data.program_information.program_type === "bs"
        ? "programs_bs"
        : "programs_ms";

    const docRef = addDoc(collection(firestore, program_type), data);
    res.status(200).json({ message: "Program Added Successfully" });
  } catch (error) {}
};
export const getProgramDataController = async (req, res) => {
  try {
    const [programsSnapShot] = await Promise.all([
      getDocs(collection(firestore, "programs")),
    ]);
    const programs = programsSnapShot.docs.map((doc) => doc.data());
    res.status(200).json({ offeredPrograms: programs });
  } catch (error) {}
};
