import { useState, useEffect, useCallback } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Accordion from "react-bootstrap/Accordion";

import Urls from "../config/urls";

function RocketInfo({ rocketId, showRocket, setShowRocket }) {
  const [rocket, setRocket] = useState({});
  const handleClose = () => setShowRocket(false);

  const getRocketInfo = useCallback(async () => {
    try {
      if (!rocketId) return;
      const x = await fetch(Urls.GET_ONE_ROCKET + "/" + rocketId);
      const info = await x.json();
      setRocket(info);
    } catch (err) {
      console.log(err);
    }
  }, [rocketId]);

  useEffect(() => {
    getRocketInfo();
  }, [rocketId, getRocketInfo]);

  return Object.keys(rocket).length > 0 ? (
    <>
      <Modal show={showRocket} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{rocket.rocket_name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Basic Info</Accordion.Header>
              <Accordion.Body>
                <p className="h5 text-center">
                  <span className="material-symbols-outlined relative top-1">
                    flag
                  </span>{" "}
                  {rocket.country}
                </p>
                <p className="h5 text-center">
                  <span className="material-symbols-outlined relative top-1">
                    work
                  </span>{" "}
                  {rocket.company}
                </p>
                <p className="h5 text-center">
                  <span className="material-symbols-outlined relative top-1">
                    rocket_launch
                  </span>{" "}
                  {rocket.first_flight}
                </p>
                <p className="h5 text-center">
                  <span className="material-symbols-outlined relative top-1">
                    attach_money
                  </span>{" "}
                  {rocket.cost_per_launch}
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Description</Accordion.Header>
              <Accordion.Body>{rocket.description}</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Measurements</Accordion.Header>
              <Accordion.Body>
                <p className="h5 text-center">
                  <span className="material-symbols-outlined relative top-1">
                    width
                  </span>{" "}
                  {rocket.diameter.feet} ft | {rocket.diameter.meters} m
                </p>
                <p className="h5 text-center">
                  <span className="material-symbols-outlined relative top-1">
                    height
                  </span>{" "}
                  {rocket.height.feet} ft | {rocket.height.meters} m
                </p>
                <p className="h5 text-center">
                  <span className="material-symbols-outlined relative top-1">
                    weight
                  </span>{" "}
                  {rocket.mass.kg} kg | {rocket.mass.lb} lb
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Engines</Accordion.Header>
              <Accordion.Body>
                <p className="h6 text-center">
                  Layout: {rocket.engines.layout}
                </p>
                <p className="h6 text-center">
                  Propellant 1: {rocket.engines.propellant_1}
                </p>
                <p className="h6 text-center">
                  Propellant 2: {rocket.engines.propellant_2}
                </p>
                <p className="h6 text-center">Type: {rocket.engines.type}</p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  ) : null;
}

export default RocketInfo;
