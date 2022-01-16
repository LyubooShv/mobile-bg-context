import React, { createContext, useState, useEffect } from "react";

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
});

const CarsProvider = ({ children }) => {
  const [car, setCar] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [engine, setEngine] = useState("");
  const [gear, setGear] = useState([]);
  const [condition, setCondition] = useState("");
  const [power, setPower] = useState("");
  const [color, setColor] = useState("");
  const [price, setPrice] = useState("");
  const [city, setCity] = useState("");
  const [mileage, setMileage] = useState("");
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
    newCar.push({
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
    });
  setCar(newCar);
  };

  useEffect(() => {
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
  }, [car]);

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
      }}
    >
      {children}
    </CarsContext.Provider>
  );
};

export default CarsProvider;
