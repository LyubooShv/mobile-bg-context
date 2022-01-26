import React, { useContext } from "react";
import SignInPage from "./components/SignIn/signInPage";
import SignUpPage from "./components/SignUp/signUpPage";
import { Routes, Route, Navigate } from "react-router-dom";
import {CurrentUserContext} from './context/current-user';
import Catalog from "./components/Catalog/catalog";
import CarsProvider from "./context/cars";
import ModalProvider from "./context/modal";
import './App.css'

function App() {
const {loggedIn} = useContext(CurrentUserContext)

  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="/"
          element={loggedIn ? <Navigate to="/catalog" /> : <SignInPage />}
        />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/catalog" element={ <ModalProvider><CarsProvider><Catalog /></CarsProvider></ModalProvider>} />
      </Routes>
    </div>
  );
}

export default App;
