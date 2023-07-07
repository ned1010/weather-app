import "./App.css";
import Main from "./components/Main";
import ThemeProvider from "./utilities/themeProvider";


function App() {
  return (
    <ThemeProvider>
      <Main/>
    </ThemeProvider>
  );
}

export default App;
