import axios from "axios";
import React, { createContext, useState, useEffect, useContext } from "react";
import { CurrentUserContext } from "./current-user";

export const CarsContext = createContext({
  car: [],
  model: "",
  year: "",
  engine: "",
  gear: "",
  condition: "",
  power: "",
  color: "",
  price: "",
  city: "",
  mileage: "",
  extras: "",
  handleChange: () => {},
  Create: () => {},
  deleteCar: () => {},
  updateCar: () => {},
  Search: () => {},
});

const CarsProvider = ({ children }) => {
  const { currentUser } = useContext(CurrentUserContext);

  const [car, setCar] = useState([]);
  const [model, setModel] = useState("");
  const [year, setYear] = useState(null);
  const [engine, setEngine] = useState("");
  const [gear, setGear] = useState("");
  const [condition, setCondition] = useState("");
  const [power, setPower] = useState(null);
  const [color, setColor] = useState("");
  const [price, setPrice] = useState(null);
  const [city, setCity] = useState("");
  const [mileage, setMileage] = useState(null);
  const [extras, setExtras] = useState("");

  const handleChange = (event) => {
    const { value, name } = event.target;

    name === "model" && setModel(value);
    name === "year" && setYear(value);
    name === "engine" && setEngine(value);
    name === "gear" && setGear(value);
    name === "condition" && setCondition(value);
    name === "power" && setPower(value);
    name === "color" && setColor(value);
    name === "price" && setPrice(value);
    name === "city" && setCity(value);
    name === "mileage" && setMileage(value);
    name === "extras" && setExtras(value);
  };

  const Create = () => {
    const newCar = [...car];
    axios
      .post(
        "http://localhost:8083/cars/",
        {
          make: "",
          model: model,
          year: year,
          engineType: engine,
          gearBox: gear,
          condition: condition,
          horsePower: power,
          color: color,
          price: price,
          city: city,
          mileage: mileage,
          user: currentUser.data.user,
          extras: extras,
        },
        { headers: { Authorization: `Bearer ${currentUser.data.jwtToken}` } }
      )
      .then((response) => {
        newCar.push(response.data);
        console.log(response);
      })
      .then(() => setCar(newCar))
      .then(() => {
        setModel(null);
        setYear(null);
        setEngine(null);
        setGear(null);
        setCondition(null);
        setPower(null);
        setColor(null);
        setPrice(null);
        setCity(null);
        setMileage(null);
        setExtras(null);
      })
      .catch((error) => {
        console.log(error);
        alert("Fill all fields in!");
      });
  };

  const deleteCar = (e) => {
    axios
      .delete(`http://localhost:8083/cars/${e}/${currentUser.data.user.id}`, {
        headers: {
          Authorization: `Bearer ${currentUser.data.jwtToken}`,
        },
      })
      .then(() => setCar(car.filter((el) => el.id !== e)));
  };

  const updateCar = (carId, index) => {
    const updatedCar = [...car];
    axios
      .put(
        `http://localhost:8083/cars/${currentUser.data.user.id}`,
        {
          id: carId,
          make: "",
          model,
          year,
          engineType: engine,
          gearBox: gear,
          condition,
          horsePower: power,
          color,
          price,
          city,
          mileage,
          user: currentUser.data.user,
          extras,
        },
        {
          headers: {
            Authorization: `Bearer ${currentUser.data.jwtToken}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        updatedCar.splice(index, 1, res.data);
      })
      .then(() => setCar(updatedCar))
      .catch((error) => {
        console.log(error);
        alert("Fill all fields in!");
      });
  };

  const Search = (searchName) => {
    if (searchName) {
      return car.filter(
        (e) => e.model.toUpperCase() === searchName.toUpperCase()
      );
    } else {
      return car;
    }
  };

  useEffect(() => {
    axios.get("http://localhost:8083/cars/all").then((res) => {
      setCar(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <CarsContext.Provider
      value={{
        car,
        model,
        year,
        engine,
        gear,
        condition,
        power,
        color,
        price,
        city,
        mileage,
        extras,
        handleChange,
        Create,
        deleteCar,
        updateCar,
        Search,
      }}
    >
      {children}
    </CarsContext.Provider>
  );
};

export default CarsProvider;
