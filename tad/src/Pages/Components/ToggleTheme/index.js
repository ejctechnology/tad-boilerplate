import React, { useContext } from "react";
import { ThemeContext } from "../../../Contexts/ThemeContext";

const ToggleTheme = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return <button onClick={toggleTheme}>Sign in</button>;
};

export default ToggleTheme;
