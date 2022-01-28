import axios from "axios";
import React, { createContext, useState, useEffect, useContext } from "react";
import { ModalContext } from "./modal";

export const CarsContext = createContext({
  car: [],
  make: "",
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
  ShowMore: () => {},
  ShowLess: () => {},
});

const CarsProvider = ({ children }) => {
  const { editObj } = useContext(ModalContext);
  const currentUser = JSON.parse(localStorage.getItem("user"));
  const loggedIn = localStorage.getItem("loggedIn");

  const [car, setCar] = useState([]);
  const [make, setMake] = useState("");
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
  const [accValue, setAccValue] = useState(3);

  const handleChange = (event) => {
    const { value, name, id } = event.target;

    name === "make" && setMake(value);
    name === "model" && setModel(value);
    name === "year" && setYear(value);
    id === "engineType" && setEngine(value);
    id === "gearBox" && setGear(value);
    id === "condition" && setCondition(value);
    name === "horsePower" && setPower(value);
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
          make: make,
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
        setMake(null);
        setModel(null);
        setYear(null);
        setPower(null);
        setColor(null);
        setPrice(null);
        setCity(null);
        setMileage(null);
        setExtras(null);
        setCondition("");
        setGear("");
        setEngine("");
      })
      .catch((error) => {
        console.log(error);
        alert("Error");
      });
    // console.log(
    //   engine,
    //   gear,
    //   condition,
    //   extras,
    //   mileage,
    //   power,
    //   city,
    //   price,
    //   year,
    //   color,
    //   model,
    //   make
    // );
  };

  const deleteCar = (e) => {
    axios
      .delete(`http://localhost:8083/cars/${e}/${currentUser.data.user.id}`, {
        headers: {
          Authorization: `Bearer ${currentUser.data.jwtToken}`,
        },
      })
      .then(() => setCar(car.filter((el) => el.id !== e)))
      .catch((error) => {
        console.log(error);
        alert("Not your car");
      });
  };

  const updateCar = (carId, index) => {
    // const updatedCar = [...car];
    // axios
    //   .put(`http://localhost:8083/cars/${currentUser.data.user.id}`, editObj, {
    //     headers: {
    //       Authorization: `Bearer ${currentUser.data.jwtToken}`,
    //     },
    //   })
    //   .then((res) => {
    //     console.log(res);
    //     updatedCar.splice(index, 1, res.data);
    //   })
    //   .then(() => setCar(updatedCar))
    //   .catch((error) => {
    //     console.log(error);
    //     alert("Fill all fields in!");
    //   });
    // console.log(editObj, carId, index, currentUser.data.user.id);
    console.log(editObj);
  };

  const ShowMore = (searchName) => {
    if (searchName) {
      const arr = car.filter(
        (e) => e.model.toUpperCase() === searchName.toUpperCase()
      );

      if (accValue < arr.length) {
        setAccValue(accValue + 3);
        console.log(accValue);
      } else if (accValue >= arr.length) {
        setAccValue(arr.length);
        console.log(accValue);
      }
    } else {
      if (accValue < car.length) {
        setAccValue(accValue + 3);
        console.log(accValue);
      } else if (accValue >= car.length) {
        setAccValue(car.length);
        console.log(accValue);
      }
    }
    console.log(currentUser);
    console.log(loggedIn);
    console.log(JSON.parse(localStorage.getItem("user")));
    console.log(localStorage.getItem("loggedIn"));
  };

  const ShowLess = () => {
    setAccValue(accValue - 3);
  };

  const Search = (searchName) => {
    if (searchName) {
      return car
        .filter(
          (e) =>
            e.model.toUpperCase() === searchName.toUpperCase() ||
            e.make.toUpperCase() === searchName.toUpperCase() ||
            e.user.username.toUpperCase() === searchName.toUpperCase()
        )
        .filter((e, i) => i < accValue);
    } else {
      return car.filter((e, i) => i < accValue);
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
        handleChange,
        Create,
        deleteCar,
        updateCar,
        Search,
        ShowMore,
        ShowLess,
      }}
    >
      {children}
    </CarsContext.Provider>
  );
};

export default CarsProvider;
