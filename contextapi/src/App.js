import React from "react";
import NavBar from "./Components/NavBar";
import BookList from "./Components/BookList";
import ThemeContextProvider from "./Contexts/ThemeContext";
import ThemeToggle from "./Components/ThemeToggle";
import AuthContextProvider from "./Contexts/AuthContext";
import BookContextProvider from "./Contexts/BookContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <NavBar />
          <BookContextProvider>
            <BookList />
          </BookContextProvider>
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
