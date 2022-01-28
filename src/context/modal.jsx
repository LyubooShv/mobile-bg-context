import React, { createContext, useState, useEffect } from "react";

export const ModalContext = createContext({
  open: false,
  carInfo: {},
  editObj: {},
  openUpdate: false,
  index: "",
  carId: "",
  handleOpen: () => {},
  handleClose: () => {},
  goToUpdate: () => {},
  editChange: () => {},
});

const ModalProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [index, setIndex] = useState("");
  const [carId, setCarId] = useState("");
  const [carInfo, setCarInfo] = useState(false);
  const [editObj, setEditObj] = useState({});

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setOpenUpdate(false);
    setEditObj(null);
  };

  const goToUpdate = (e, i) => {
    setOpenUpdate(true);
    setOpen(true);
    setIndex(i);
    setCarId(e.id);
    setCarInfo({ ...e });
  };

  const editChange = (n, e) => {
    setEditObj({ ...carInfo, [n]: e.target.value });
  };

  useEffect(() => {
    carInfo && setEditObj({ ...carInfo });
  }, [carInfo]);

  return (
    <ModalContext.Provider
      value={{
        open,
        carInfo,
        editObj,
        handleClose,
        handleOpen,
        openUpdate,
        goToUpdate,
        index,
        carId,
        editChange,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
