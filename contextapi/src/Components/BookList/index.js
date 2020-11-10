import React, { useContext } from "react";
import { ThemeContext } from "../../Contexts/ThemeContext";
import { BookContext } from "../../Contexts/BookContext";

const BookList = (props) => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { books } = useContext(BookContext);
  console.log(books);

  const theme = isLightTheme ? light : dark;

  return (
    <div style={{ color: theme.syntax, background: theme.bg }}>
      <ul>
        {books.map((book) => {
          return (
            <li key={book.id} style={{ background: theme.ui }}>
              {book.title}{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BookList;
