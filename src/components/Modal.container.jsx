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

const ModalContainer = ({
  handleChange,
  handleClose,
  open,
  openUpdate,
  updateCar,
  Create,
  carId,
  index,
  gear,
  engine,
  condition,
}) => {
  return (
    <div>
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
              <input name="make" placeholder="make" onChange={handleChange} />
              <input name="model" placeholder="model" onChange={handleChange} />
              <input name="year" placeholder="year" onChange={handleChange} />
              <input name="color" placeholder="color" onChange={handleChange} />
              <input name="price" placeholder="price" onChange={handleChange} />
              <input name="city" placeholder="city" onChange={handleChange} />
              <input name="power" placeholder="power" onChange={handleChange} />
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

              <>
                <label>Engine:</label>

                <select id="engine" value={engine} onChange={handleChange}>
                  <option value="">NONE</option>
                  <option value="DIESEL">DIESEL</option>
                  <option value="HYBRID">HYBRID</option>
                  <option value="ELECTRIC">ELECTRIC</option>
                  <option value="GASOLINE">GASOLINE</option>
                </select>
              </>

              <>
                <label>Gearbox:</label>

                <select id="gear" value={gear} onChange={handleChange}>
                  <option value="">NONE</option>
                  <option value="MANUAL">MANUAL</option>
                  <option value="AUTOMATIC">AUTOMATIC</option>
                </select>
              </>

              <>
                <label>Condition:</label>

                <select
                  id="condition"
                  value={condition}
                  onChange={handleChange}
                >
                  <option value="">NONE</option>
                  <option value="NEW">NEW</option>
                  <option value="USED">USED</option>
                  <option value="PARTS">PARTS</option>
                </select>
              </>

              {openUpdate ? (
                <Button onClick={() => updateCar(carId, index)}>Update</Button>
              ) : (
                <Button onClick={Create}>Create</Button>
              )}
            </Typography>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalContainer;
