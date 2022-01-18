import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../context/current-user";
import { CarsContext } from "../context/cars";
const Header = () => {
  const { currentUser, SignOut } = useContext(CurrentUserContext);
  const { Search } = useContext(CarsContext);
  const [searchName, setSearchName] = useState("");

  const handleChange = (e) => {
    setSearchName(e.target.value);
  };

  return (
    <div className="headerBox">
      <div className="header">
        <h2>Simple Cars</h2>
      </div>
      <div className="signInOutLink">
        {currentUser ? (
          <div className="signInsignOutLink" onClick={SignOut}>
            Sign Out
          </div>
        ) : (
          <Link className="signInsignOutLink" to="/">
            Sign In
          </Link>
        )}
      </div>
      <div className="searchInput">
        <input
          placeholder="search cars"
          onChange={handleChange}
          value={searchName}
        />
      </div>
      <button onClick={() => Search(searchName)}>search</button>
    </div>
  );
};

export default Header;
