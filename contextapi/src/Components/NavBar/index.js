import React, { useContext } from "react";

import { ThemeContext } from "../../Contexts/ThemeContext";
import { AuthContext } from "../../Contexts/AuthContext";

const NavBar = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);

  return (
    <nav style={{ background: theme.ui, color: theme.syntax }}>
      <h1>Context App</h1>
      <div onClick={toggleAuth}>
        {isAuthenticated ? "Logged in" : "Logged out"}
      </div>
      <ul style={{ background: theme.ui, color: theme.syntax }}>
        <li>Home</li>
        <li>Contavt</li>
        <li>About</li>
      </ul>
    </nav>
  );
};

export default NavBar;
