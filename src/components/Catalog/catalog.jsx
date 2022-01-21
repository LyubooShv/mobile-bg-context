import * as React from "react";
import { useContext } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Header from "../Header";
import { CarsContext } from "../../context/cars";
import { ModalContext } from "../../context/modal";
import { SearchNameContext } from "../../context/searchContext";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

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

export default function Catalog() {
  const {
    open,
    handleClose,
    handleOpen,
    goToUpdate,
    openUpdate,
    index,
    carId,
  } = useContext(ModalContext);
  const { handleChange, Create, car, deleteCar, updateCar, Search } =
    useContext(CarsContext);
  const { searchName } = useContext(SearchNameContext);

  return (
    <React.Fragment>
      <Header />
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Make</TableCell>
            <TableCell>Model</TableCell>
            <TableCell>Year</TableCell>
            <TableCell>Engine Type</TableCell>
            <TableCell>Gear Box</TableCell>
            <TableCell>Condition</TableCell>
            <TableCell>Horse Power</TableCell>
            <TableCell>Color</TableCell>
            <TableCell>Price $</TableCell>
            <TableCell>City</TableCell>
            <TableCell>Mileage</TableCell>
            <TableCell>Extras</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Search(searchName).length ? (
            Search(searchName).map((car, index) => (
              <TableRow key={car.id}>
                <TableCell>
                  <>
                    <button
                      className="carBtn"
                      onClick={() => goToUpdate(car.id, index)}
                    >
                      +
                    </button>
                    <button
                      className="carBtn"
                      onClick={() => deleteCar(car.id)}
                    >
                      x
                    </button>
                  </>
                  {car.make}
                </TableCell>
                <TableCell align="left">{car.model}</TableCell>
                <TableCell align="left">{car.year}</TableCell>
                <TableCell align="left">{car.engineType}</TableCell>
                <TableCell align="left">{car.gearBox}</TableCell>
                <TableCell align="left">{car.condition}</TableCell>
                <TableCell align="left">{car.horsePower}</TableCell>
                <TableCell align="left">{car.color}</TableCell>
                <TableCell align="left">{car.price}</TableCell>
                <TableCell align="left">{car.city}</TableCell>
                <TableCell align="left">{car.mileage}</TableCell>
                <TableCell align="left">{car.extras}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell>There Is No Such Model</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div>
        <Button onClick={handleOpen}>Creat Car</Button>
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
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <input name="make" placeholder="make" onChange={handleChange} />
              <input name="model" placeholder="model" onChange={handleChange} />
              <input name="year" placeholder="year" onChange={handleChange} />
              <input
                name="engine"
                placeholder="engine"
                onChange={handleChange}
              />
              <input name="gear" placeholder="gear" onChange={handleChange} />
              <input
                name="condition"
                placeholder="condition"
                onChange={handleChange}
              />
              <input name="power" placeholder="power" onChange={handleChange} />
              <input name="color" placeholder="color" onChange={handleChange} />
              <input name="price" placeholder="price" onChange={handleChange} />
              <input name="city" placeholder="city" onChange={handleChange} />
              <input
                name="mileage"
                placeholder="mileage"
                onChange={handleChange}
              />
              <input
                name="extras"
                placeholder="extras"
                onChange={handleChange}
              />
              {openUpdate ? (
                <Button onClick={() => updateCar(carId, index)}>Update</Button>
              ) : (
                <Button onClick={Create}>Create</Button>
              )}
            </Typography>
          </Box>
        </Modal>
      </div>
    </React.Fragment>
  );
}
