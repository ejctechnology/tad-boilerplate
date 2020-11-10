import React, { createContext, useState } from "react";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books] = useState([
    { title: "The Power", id: 1 },
    { title: "The Magic", id: 2 },
    { title: "The Secret", id: 3 },
  ]);

  return (
    <BookContext.Provider value={{ books }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
