import { useContext } from "react";
import ThemeContext from "src/utilities/ThemeContext";
import ToggleButton from "src/utilities/ToggleButton";
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
