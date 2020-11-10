import React, { createContext, useState } from "react";

export const SideBarContext = createContext();

const SideBarContextProvider = (props) => {
  const [studentDash] = useState({
    title: "MyClassroom",
    home: "Home",
    subject: "Subject",
    classroom: "MyClassroom",
    signout: "Signout",
  });

  const [tutorDash] = useState({
    title: "Tutor Dashboard",
    home: "Home",
    content: "Content Creator",
    myStudent: "MyStudents",
    classroom: "Classroom",
    logout: "logout",
  });

  const [adminDash] = useState({
    title: "Dashboard",
    overview: "Overview",
    student: "Student",
    tutor: "Tutor",
    course: "Course",
    manage: "Manage",
    signout: "Signout",
  });

  return (
    <SideBarContext.Provider value={{ studentDash, tutorDash, adminDash }}>
      {props.children}
    </SideBarContext.Provider>
  );
};

export default SideBarContextProvider;
