import React, { createContext, useState } from "react";

export const StaticContext = createContext();

const StaticContextProvider = (props) => {
  const [contents] = useState({
    title: "GET TO KNOW US",

    fisrtLink: "About us",

    secondLink: "Help center",

    lastLink: "Contact Us",
  });

  const [contents_01] = useState({
    title: "LEARN WITH US",

    fisrtLink: "Subjects",

    secondLink: "Help center",

    lastLink: "Online Tutors",
  });

  const [contents_02] = useState({
    title: "Partner with us",

    fisrtLink: "Become a Tutor",

    secondLink: "Academic Partners",

    lastLink: "Founders",
  });

  return (
    <StaticContext.Provider value={{ contents, contents_01, contents_02 }}>
      {props.children}
    </StaticContext.Provider>
  );
};

export default StaticContextProvider;
