import "./SearchBar.css";
// import SearchIcon from '@mui/icons-material/Search';

function SearchBar() {    

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
        />
        <div className="searchIcon">
          {/* <SearchIcon /> */}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;