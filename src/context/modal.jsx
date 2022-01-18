import React, { createContext, useState } from "react";

export const ModalContext = createContext({
  open: false,
  openUpdate: false,
  index: "",
  handleOpen: () => {},
  handleClose: () => {},
  goToUpdate: () => {},
});

const ModalProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [index, setIndex] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setOpenUpdate(false);
  };

  const goToUpdate = (e) => {
    setOpenUpdate(true);
    setOpen(true);
    setIndex(e);
  };

  return (
    <ModalContext.Provider
      value={{ open, handleClose, handleOpen, openUpdate, goToUpdate, index }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
