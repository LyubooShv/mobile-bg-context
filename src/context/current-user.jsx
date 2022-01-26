import React, { createContext, useState, useEffect } from "react";

const axios = require("axios");

export const CurrentUserContext = createContext({
  loggedIn: false,
  email: "",
  currentUser: "",
  password: "",
  handleChange: () => {},
  handleSubmit: () => {},
  SignUp: () => {},
  SignOut: () => {},
});

const CurrentUserProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [currentUser, setCurrentUser] = useState({});
  const [password, setPassword] = useState("");

  const handleChange = (event) => {
    const { value, name } = event.target;
    name === "email" && setEmail(value);
    name === "password" && setPassword(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8083/users/login", {
        username: email,
        password: password,
      })
      .then(
        (response) => {
          setCurrentUser(response);
          setLoggedIn(true);
          console.log(response);
        },
        (error) => {
          console.log(error);
          alert("Try again");
        }
      );
  };

  const SignUp = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8083/users/register", {
        username: email,
        password: password,
        firstName: "",
        lastName: "",
      })
      .then(
        (response) => {
          console.log(response.config.data);
          alert("Successfully signed up ");
        },
        (error) => {
          console.log(error);
          alert("Try again");
        }
      );
  };

  const SignOut = (navigate) => {
    navigate("/");
    setCurrentUser(null);
    setLoggedIn(false);
  };

  useEffect(() => {
    setEmail(null);
    setPassword(null);
  }, [currentUser]);

  return (
    <CurrentUserContext.Provider
      value={{
        loggedIn,
        email,
        currentUser,
        password,
        handleChange,
        handleSubmit,
        SignUp,
        SignOut,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};

export default CurrentUserProvider;
