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
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import './catalog.css'

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
  const { open, handleClose, handleOpen, goToUpdate, openUpdate,index } = useContext(ModalContext);
  const { handleChange, Create, car, deleteCar, updateCar } = useContext(CarsContext);

  return (
    <React.Fragment>
      <Header />
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell align="right">Model</TableCell>
            <TableCell align="right">Year</TableCell>
            <TableCell align="right">Engine Type</TableCell>
            <TableCell align="right">Gear Box</TableCell>
            <TableCell align="right">Condition</TableCell>
            <TableCell align="right">Horse Power</TableCell>
            <TableCell align="right">Color</TableCell>
            <TableCell align="right">Price $</TableCell>
            <TableCell align="right">City</TableCell>
            <TableCell align="right">Mileage</TableCell>
            <TableCell align="right">Extras</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
           {car.map((car, index) => (
             <div key={index}>
             <button className="carBtn" onClick={()=>goToUpdate(index)}>+</button>
             <button className="carBtn" onClick={()=>deleteCar(index)}>x</button>
              <TableRow  >
                <TableCell align="left">{car.model}</TableCell>
                <TableCell align="left">{car.year}</TableCell>
                <TableCell align="left">{car.engine}</TableCell>
                <TableCell align="left">{car.gear}</TableCell>
                <TableCell align="left">{car.condition}</TableCell>
                <TableCell align="left">{car.power}</TableCell>
                <TableCell align="left">{car.color}</TableCell>
                <TableCell align="left">{car.price}</TableCell>
                <TableCell align="left">{car.city}</TableCell>
                <TableCell align="left">{car.mileage}</TableCell>
                <TableCell align="left">{car.extras}</TableCell>
              </TableRow> 
              </div>
            )) }
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
            { openUpdate ? <Button onClick={()=>updateCar(index)}>Update</Button> : <Button onClick={Create}>Create</Button>}
            
            </Typography>
          </Box>
        </Modal>
      </div>
    </React.Fragment>
  );
}
