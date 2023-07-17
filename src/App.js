import React, { useState, useEffect } from "react";

import Urls from "./config/urls";

import SideNav from "./components/sideNav";
import Navbar from "./components/navbar";
import Rockets from "./components/rockets";
import HeroImage from "./components/heroImage";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [rockets, setRockets] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const fetchAllRockets = async () => {
    try {
      const x = await fetch(Urls.GET_ALL_ROCKETS);
      const rockets = await x.json();
      setRockets(rockets);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAllRockets();
  }, []);

  return (
    <>
      <SideNav show={show} handleClose={handleClose} />
      <Navbar handleShow={handleShow} />
      <HeroImage />
      <Rockets rockets={rockets} />
    </>
  );
}

export default App;
