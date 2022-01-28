import * as React from "react";
import { useContext, useState } from "react";
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
import Button from "@mui/material/Button";

export default function Catalog() {
  const { open, handleClose, handleOpen, goToUpdate, openUpdate, carId } =
    useContext(ModalContext);
  const {
    ShowMore,
    ShowLess,
    handleChange,
    Create,
    deleteCar,
    updateCar,
    Search,
    car,
  } = useContext(CarsContext);
  const { searchName } = useContext(SearchNameContext);
  const currentUser = JSON.parse(localStorage.getItem("user")).data.user
    .username;

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
            Search(searchName).map((e, index) => (
              <TableRow key={e.id}>
                <TableCell>
                  {e.user.username === currentUser && (
                    <>
                      <button
                        className="carBtn"
                        onClick={() => goToUpdate(e, index)}
                      >
                        +
                      </button>
                      <button
                        className="carBtn"
                        onClick={() => deleteCar(e.id)}
                      >
                        x
                      </button>
                    </>
                  )}
                  {e.make}
                </TableCell>
                <TableCell align="left">{e.user.username}</TableCell>
                <TableCell align="left">{e.model}</TableCell>
                <TableCell align="left">{e.year}</TableCell>
                <TableCell align="left">{e.engineType}</TableCell>
                <TableCell align="left">{e.gearBox}</TableCell>
                <TableCell align="left">{e.condition}</TableCell>
                <TableCell align="left">{e.horsePower}</TableCell>
                <TableCell align="left">{e.color}</TableCell>
                <TableCell align="left">{e.price}</TableCell>
                <TableCell align="left">{e.city}</TableCell>
                <TableCell align="left">{e.mileage}</TableCell>
                <TableCell align="left">{e.extras}</TableCell>

                <ModalContainer
                  open={open}
                  handleClose={handleClose}
                  handleChange={handleChange}
                  Create={Create}
                  openUpdate={openUpdate}
                  updateCar={updateCar}
                  carId={carId}
                  index={index}
                  car={car}
                  carElement={e}
                />
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
        <Button onClick={() => ShowMore(searchName)}>Show More</Button>
        {Search(searchName).length > 3 && (
          <Button onClick={ShowLess}>Show Less</Button>
        )}
      </div>
    </React.Fragment>
  );
}
