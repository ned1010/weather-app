import { useContext } from "react";
import ThemeContext from "./ThemeContext";
import { IconButton } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const ToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  // console.log(theme)

  return (
    <>
      <IconButton
        onClick={toggleTheme}
        sx={{ position: "absolute", top: 0, right: 0 }}
      >
        {theme === "light" ? (
          <DarkModeIcon sx={{ color: "#000" }} />
        ) : (
          <LightModeIcon sx={{ color: "#fff" }} />
        )}
      </IconButton>
    </>
  );
};

export default ToggleButton;
