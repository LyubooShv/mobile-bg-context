import React, { createContext, useState } from "react";

export const SearchNameContext = createContext({
  searchName: "",
  nameChange: () => {},
});

const SearchNameProvider = ({ children }) => {
  const [searchName, setSearchName] = useState("");
  const nameChange = (e) => {
    setSearchName(e.target.value);
  };

  return (
    <SearchNameContext.Provider value={{ searchName, nameChange }}>
      {children}
    </SearchNameContext.Provider>
  );
};

export default SearchNameProvider;
