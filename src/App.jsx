import "./App.css";
import Main from "src/components/Main";
import ThemeProvider from "src/utilities/themeProvider";


function App() {
  return (
    <ThemeProvider>
      <Main/>
    </ThemeProvider>
  );
}

export default App;
