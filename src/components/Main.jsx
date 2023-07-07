import { useContext } from "react";
import ThemeContext from "../utilities/themeContext";
import ToggleButton from "../utilities/toggleButton";
import Weather from "./Weather";

function Main() {
  const { theme } = useContext(ThemeContext);

  return (
    <div id={theme} className="main-container">
      <ToggleButton />
      <Weather />
    </div>
  );
}

export default Main;
