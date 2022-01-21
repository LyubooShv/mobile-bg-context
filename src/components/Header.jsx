import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../context/current-user";
import { SearchNameContext } from "../context/searchContext";

const Header = () => {
  const { currentUser, SignOut } = useContext(CurrentUserContext);
  const { nameChange, searchName } = useContext(SearchNameContext);

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
          onChange={nameChange}
          value={searchName}
        />
      </div>
    </div>
  );
};

export default Header;
