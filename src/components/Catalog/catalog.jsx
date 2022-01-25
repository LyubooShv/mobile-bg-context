import * as React from "react";
import { useContext } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Header from "../Header";
import ModalContainer from "../Modal.container";
import { CarsContext } from "../../context/cars";
import { ModalContext } from "../../context/modal";
import { SearchNameContext } from "../../context/searchContext";
import { CurrentUserContext } from "../../context/current-user";
import Button from "@mui/material/Button";

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
  const {
    ShowMore,
    ShowLess,
    handleChange,
    Create,
    deleteCar,
    updateCar,
    Search,
    engine,
    gear,
    condition,
  } = useContext(CarsContext);
  const { searchName } = useContext(SearchNameContext);

  return (
    <React.Fragment>
      <Header />
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Make</TableCell>
            <TableCell>User</TableCell>
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
                <TableCell align="left">{car.user.username}</TableCell>
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
              <TableCell>There Are No Cars</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div>
        <Button onClick={handleOpen}>Creat Car</Button>
        <Button onClick={ShowMore}>Show More</Button>
        {Search(searchName).length > 3 && (
          <Button onClick={ShowLess}>Show Less</Button>
        )}
        <ModalContainer
          open={open}
          handleClose={handleClose}
          handleChange={handleChange}
          Create={Create}
          openUpdate={openUpdate}
          updateCar={updateCar}
          carId={carId}
          index={index}
          engine={engine}
          gear={gear}
          condition={condition}
        />
      </div>
    </React.Fragment>
  );
}
