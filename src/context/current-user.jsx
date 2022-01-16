import React,{ createContext, useState, useEffect } from "react";

export const CurrentUserContext = createContext({
  loggedIn: false,
  signUp: false,
  email: "",
  newUser: [],
  currentUser: "",
  password: "",
  currentPassword: "",
  handleChange: () => {},
  handleSubmit: () => {},
  SignUp: () => {},
  SignOut: () => {},
});

const CurrentUserProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [newUser, setNewUser] = useState([]);
  const [currentUser, setCurrentUser] = useState("");
  const [password, setPassword] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");

  const handleChange = (event) => {
    const { value, name } = event.target;
    name === "email" && setEmail(value);
    name === "password" && setPassword(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setCurrentUser(email);
    setCurrentPassword(password);
  };

  const SignUp = (event) => {
    event.preventDefault();
    const user = [...newUser];
    user.push({ email, password });
    user.length > 1
      ? user.forEach((el,index) => {
         if( el.email === user[user.length - 1].email && index!==user.length - 1){
             user.pop();
             alert("there is a user with that name")
         }
            else setNewUser(user);
        })
      : setNewUser(user);

    setSignUp(true);
  };

  const SignOut = () => {
    setCurrentUser(null);
    setCurrentPassword(null);
    setLoggedIn(false);
  };

  useEffect(() => {
    currentUser && currentPassword && setLoggedIn(true);
    setEmail(null);
    setPassword(null);
    console.log(currentUser, currentPassword, newUser, loggedIn);
  }, [currentUser, newUser, loggedIn, currentPassword]);

  return (
    <CurrentUserContext.Provider
      value={{
        loggedIn,
        signUp,
        email,
        newUser,
        currentUser,
        password,
        currentPassword,
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
