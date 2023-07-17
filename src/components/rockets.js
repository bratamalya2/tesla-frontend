import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";

import RocketInfo from "./rocketInfo";

function Rockets({ rockets }) {
  const [currRockets, setCurrRockets] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [showRocket, setShowRocket] = useState(false);
  const [rocketId, setRocketId] = useState(null);

  useEffect(() => {
    setCurrRockets(rockets);
  }, [rockets]);

  useEffect(() => {
    if (searchText.length > 0) {
      const x = rockets.filter((rocket) =>
        rocket.rocket_name.toLowerCase().includes(searchText.toLowerCase())
      );
      setCurrRockets(x);
    } else setCurrRockets(rockets);
  }, [searchText, rockets]);

  return (
    <main className="text-right">
      <input
        type="text"
        placeholder={`Search Rocket`}
        value={searchText}
        onInput={(e) => setSearchText(e.target.value)}
        className="w-[300px] mr-5 my-6 text-left pl-7 text-2xl placeholder:text-2xl text-zinc-400 placeholder:text-zinc-400 rounded-md focus:border-none border-3 border-neutral-600"
      />
      <header className="w-11/12 text-center mx-auto font-medium leading-10 text-5xl tracking-wide">
        Available Rockets
      </header>
      <section className="flex flex-wrap w-11/12 max-w-6xl my-4 mx-auto text-center justify-center items-center">
        {currRockets.map((rocket, index) => (
          <aside
            className="flex flex-col justify-center opacity-90 items-center w-80 h-80 border-none rounded-lg mt-4 mb-2 mx-5 object-cover text-white hover:scale-125 hover:opacity-100 hover:z-10 cursor-pointer relative"
            onClick={() => {
              setRocketId(rocket.rocket_id);
              setShowRocket(true);
            }}
            key={index}
          >
            <Carousel data-bs-theme="dark" variant="dark" controls={false}>
              {rocket.flickr_images.map((img, i) => (
                <Carousel.Item key={i}>
                  <img
                    className="d-block w-100 h-100 rounded object-fit-scale"
                    src={img}
                    alt={`${i}`}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
            <header className="text-center mx-auto font-medium leading-6 text-2xl tracking-wide z-10 absolute">
              {rocket.rocket_name}
            </header>
          </aside>
        ))}
      </section>
      <RocketInfo
        rocketId={rocketId}
        showRocket={showRocket}
        setShowRocket={setShowRocket}
      />
    </main>
  );
}

export default Rockets;
