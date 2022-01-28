import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../context/current-user";
import { SearchNameContext } from "../context/searchContext";
import { useNavigate } from "react-router";

const Header = (props) => {
  const { SignOut } = useContext(CurrentUserContext);
  const { nameChange, searchName } = useContext(SearchNameContext);
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("user"));
  const loggedIn = localStorage.getItem("loggedIn");
  return (
    <div className="headerBox">
      <div className="header">
        <h2>Simple Cars</h2>
      </div>
      <div className="currentUser">
        <h4>
          Current User:
          {loggedIn && currentUser.data.user.username}
        </h4>
      </div>
      <div className="signInOutLink">
        {loggedIn ? (
          <div className="signInsignOutLink" onClick={() => SignOut(navigate)}>
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
