import { collection, addDoc, getDocs } from "firebase/firestore";
import { firestore } from "../../database/firebase.js";

export const getDegreeSchemaController = async (req, res) => {
  try {
    const degree_schemas = getDocs(collection(firestore, "degree_schemas"));
    const degreeSchemaData = (await degree_schemas).docs.map((doc) =>
      doc.data()
    );
    res.status(200).json({
      degreeSchemas: degreeSchemaData,
    });
  } catch (error) {
    console.error("Error fetching data for degree Schema:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
