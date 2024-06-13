import { firestore } from "../../database/firebase.js";
import { collection, addDoc, getDocs } from "firebase/firestore";

export const getCoursesByDepartmentController = async (req, res) => {
  try {
    const degreeSchemasSnapshot = await getDocs(
      collection(firestore, "degree_schemas")
    );
    const degreeSchemas = degreeSchemasSnapshot.docs.map((doc) => doc.data());

    const coursesByDepartment = {};

    degreeSchemas.forEach((degree) => {
      const degreeShortID = degree.degreeShortID;
      const department = degree.department;

      degree.semester_courses.forEach((semester) => {
        const semesterNumber = semester.semester;

        semester.courses.forEach((course) => {
          if (!coursesByDepartment[department]) {
            coursesByDepartment[department] = [];
          }

          coursesByDepartment[department].push({
            ...course,
            semester: semesterNumber,
            degreeShortID: degreeShortID,
            department: department,
          });
        });
      });
    });

    res.status(200).json({ courses: coursesByDepartment });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
export const getAllCourses = async (req, res) => {
  try {
    const coursesSnapshot = await getDocs(collection(firestore, "courses"));
    const courses = coursesSnapshot.docs.map((doc) => doc.data());

    res.status(200).json({ courses: courses });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getCourseInitialDataController = async (req, res) => {
  try {
    // Fetching data concurrently using Promise.all
    const [departmentSnapshot, coursesSnapshot] = await Promise.all([
      getDocs(collection(firestore, "departments")),
      getDocs(collection(firestore, "courses")),
    ]);

    // Extracting data from snapshots
    const departments = departmentSnapshot.docs.map((doc) => doc.data());

    /*  const coursesOrganized = {};
    coursesSnapshot.docs.forEach((doc) => {
      const courseData = doc.data();
      const { course_name, short_code_department } = courseData;
      const courseInfo = { name: course_name, value: course_name };

      if (coursesOrganized[short_code_department]) {
        coursesOrganized[short_code_department].push(courseInfo);
      } else {
        coursesOrganized[short_code_department] = [courseInfo];
      }
    }); */

    const courses = coursesSnapshot.docs.map((doc) => {
      const { course_name, course_code } = doc.data();
      return { name: course_name, value: course_code };
    });

    res.status(200).json({
      departments: departments,
      courses: courses,
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const addCourseDataController = async (req, res) => {
  try {
    const data = await req.body;
    const docRef = addDoc(collection(firestore, "courses"), data);
    res.status(200).json({ message: "Course Added Successfully" });
  } catch (error) {}
};
