import { OutlinedInput, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";


function SearchBar({ searchCity, city, setCity }) {
  const submitHandle = (e) => {
    e.preventDefault();
    if (!city) {
      alert("can't be empty");
      window.location = "/";
    }
    searchCity(city);
    setCity("");
  };

  return (
    <form onSubmit={submitHandle} className="form">
      <OutlinedInput
        value={city}
        placeholder="search..."
        onChange={(e) => setCity(e.target.value)}
        sx={{
          width: "275px",
          height: "40px",
          borderRadius: "20px",
          backgroundColor: "#fff",
        }}
        className="input"
      ></OutlinedInput>
      <Button
        className="btn"
        variant="contained"
        type="submit"
        sx={{ margin: "0 0 5px 5px", height: "40px", borderRadius: "100px" }}
      >
        <SearchIcon />
      </Button>
    </form>
  );
}

export default SearchBar;
