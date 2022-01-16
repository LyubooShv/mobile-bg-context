import React, { createContext, useState } from "react";

export const ModalContext = createContext({
  open: false,
  handleOpen: () => {},
  handleClose: () => {},
});

const ModalProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ModalContext.Provider value={{ open, handleClose, handleOpen }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
