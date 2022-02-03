import React, { useContext } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { ModalContext } from "../context/modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ModalContainer = ({
  handleChange,
  handleClose,
  open,
  openUpdate,
  updateCar,
  Create,
  carId,
  index,
  carInfo,
}) => {
  const { editObj, editChange } = useContext(ModalContext);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Create a car
        </Typography>
        <div>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <input
              name="make"
              placeholder="make"
              value={editObj && editObj.make}
              onChange={
                editObj ? (e) => editChange(e.target.name, e) : handleChange
              }
            />
            <input
              name="model"
              placeholder="model"
              value={editObj && editObj.model}
              onChange={
                editObj ? (e) => editChange(e.target.name, e) : handleChange
              }
            />
            <input
              name="year"
              placeholder="year"
              value={editObj && editObj.year}
              onChange={
                editObj ? (e) => editChange(e.target.name, e) : handleChange
              }
            />
            <input
              name="color"
              placeholder="color"
              value={editObj && editObj.color}
              onChange={
                editObj ? (e) => editChange(e.target.name, e) : handleChange
              }
            />
            <input
              name="price"
              placeholder="price"
              value={editObj && editObj.price}
              onChange={
                editObj ? (e) => editChange(e.target.name, e) : handleChange
              }
            />
            <input
              name="city"
              placeholder="city"
              value={editObj && editObj.city}
              onChange={
                editObj ? (e) => editChange(e.target.name, e) : handleChange
              }
            />
            <input
              name="horsePower"
              placeholder="power"
              value={editObj && editObj.horsePower}
              onChange={
                editObj ? (e) => editChange(e.target.name, e) : handleChange
              }
            />
            <input
              name="mileage"
              placeholder="mileage"
              value={editObj && editObj.mileage}
              onChange={
                editObj ? (e) => editChange(e.target.name, e) : handleChange
              }
            />
            <input
              name="extras"
              placeholder="extras"
              value={editObj && editObj.extras}
              onChange={
                editObj ? (e) => editChange(e.target.name, e) : handleChange
              }
            />

            <>
              <label>Engine:</label>

              <select
                id="engineType"
                value={editObj && editObj.engineType}
                onChange={
                  editObj ? (e) => editChange(e.target.id, e) : handleChange
                }
              >
                <option value="">NONE</option>
                <option value="DIESEL">DIESEL</option>
                <option value="HYBRID">HYBRID</option>
                <option value="ELECTRIC">ELECTRIC</option>
                <option value="GASOLINE">GASOLINE</option>
              </select>
            </>

            <>
              <label>Gearbox:</label>

              <select
                id="gearBox"
                value={editObj && editObj.gearBox}
                onChange={
                  editObj ? (e) => editChange(e.target.id, e) : handleChange
                }
              >
                <option value="">NONE</option>
                <option value="MANUAL">MANUAL</option>
                <option value="AUTOMATIC">AUTOMATIC</option>
              </select>
            </>

            <>
              <label>Condition:</label>

              <select
                id="condition"
                value={editObj && editObj.condition}
                onChange={
                  editObj ? (e) => editChange(e.target.id, e) : handleChange
                }
              >
                <option value="">NONE</option>
                <option value="NEW">NEW</option>
                <option value="USED">USED</option>
                <option value="PARTS">PARTS</option>
              </select>
            </>

            {openUpdate ? (
              <Button onClick={updateCar}>Update</Button>
            ) : (
              <Button onClick={Create}>Create</Button>
            )}
          </Typography>
        </div>
      </Box>
    </Modal>
  );
};

export default ModalContainer;
