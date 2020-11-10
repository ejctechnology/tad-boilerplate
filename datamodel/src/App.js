import React, { useEffect, useState } from "react";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { createCourse } from "./graphql/mutations";
import { listCourses } from "./graphql/queries";
import awsExports from "./aws-exports.js";
Amplify.configure(awsExports);

const initialState = { name: "" };

function App() {
  const [formState, setFormState] = useState(initialState);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  const setInput = (key, value) => {
    setFormState({ ...formState, [key]: value });
  };

  async function fetchCourses() {
    try {
      const courseData = await API.graphql(graphqlOperation(listCourses));
      const courses = courseData.data.listCourses.items;
      setCourses(courses);
    } catch (err) {
      console.log("error feching listCourses");
    }
  }

  async function addCourse() {
    try {
      if (!formState.name) return;
      const course = { ...formState };
      setCourses([...courses, course]);
      setFormState(initialState);
      await API.graphqlOperation(createCourse, { input: course });
    } catch (err) {
      console.log("error adding course", err);
    }
  }

  return (
    <div style={{ margin: "auto auto" }}>
      <h1>Add subject </h1>
      <input
        onChange={(event) => setInput("name", event.target.value)}
        value={formState.name}
        placeholder="Course Name"
      />
      <button onClick={addCourse}>Add Course</button>

      {courses.map((course, index) => (
        <div key={course.id ? course.id : index}>
          <p>{course.name}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
