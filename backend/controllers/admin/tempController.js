import { firestore } from "../../database/firebase.js";
import { collection, addDoc, getDocs } from "firebase/firestore";

export const uploadTempBackend = async (req, res) => {
  try {
    const data = await req.body;
    console.log(
      "🔴 ~ file: tempController.js:7 ~ uploadTempBackend ~ data:",
      data
    );
    await data.forEach((element) => {
      const docRef = addDoc(collection(firestore, "roll_numbers"), element);
      console.log("Document written with ID: ", docRef.id);
    });
  } catch (error) {}
};
