import "./SearchBar.css";
// import SearchIcon from '@mui/icons-material/Search';

function SearchBar() {    

  return (
    <>
    <div className="search">
      <br />
      <div className="searchInputs">
        <input
          type="text"
          placeholder="Enter project here..."
        />
        <div className="searchIcon">
          {/* <SearchIcon /> */}
        </div>
      </div>
    </div>
    </>
  );
}

export default SearchBar;