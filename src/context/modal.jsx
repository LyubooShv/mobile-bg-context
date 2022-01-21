import React, { createContext, useState } from "react";

export const ModalContext = createContext({
  open: false,
  openUpdate: false,
  index: "",
  carId: "",
  handleOpen: () => {},
  handleClose: () => {},
  goToUpdate: () => {},
});

const ModalProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [index, setIndex] = useState("");
  const [carId, setCarId] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setOpenUpdate(false);
  };

  const goToUpdate = (carId, e) => {
    setOpenUpdate(true);
    setOpen(true);
    setIndex(e);
    setCarId(carId);
  };

  return (
    <ModalContext.Provider
      value={{
        open,
        handleClose,
        handleOpen,
        openUpdate,
        goToUpdate,
        index,
        carId,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
