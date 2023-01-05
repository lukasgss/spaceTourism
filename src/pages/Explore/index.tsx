import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Navbar from "../../components/Navbar";
import Destinations from "./components/Destinations";
import { CelestialBodiesNames } from "./types";
import { getCelestialBodiesData } from "../../services/Explore";
import CelestialBodiesData from "./components/CelestialBodiesData";

import "./index.scss";

const Explore = () => {
  const [selectedCelestialBody, setSelectedCelestialBody] =
    useState<CelestialBodiesNames>("moon");

  const { data: celestialBodiesData, isLoading } = useQuery(
    ["celestialBodiesData"],
    async () => {
      const { data } = await getCelestialBodiesData();
      const bodiesData = {
        moon: data.destinations[0],
        mars: data.destinations[1],
        europa: data.destinations[2],
        titan: data.destinations[3],
      };
      return bodiesData;
    }
  );

  return (
    <div className="backgroundDestination min-h-screen">
      <Navbar />
      <div className="flex flex-col xl:flex-row justify-center xl:h-[calc(100vh-138px)]">
        <div className="flex flex-col items-center xl:justify-center flex-1 xl:gap-5">
          <div className="flex gap-5 text-xl justify-center">
            <span className="text-[#4e5057] font-bold">01</span>
            <span className="uppercase text-white">Pick your destination</span>
          </div>
          <img
            className="p-10 xl:w-[600px]"
            src={celestialBodiesData?.[selectedCelestialBody].images.webp}
            alt="Imagem corpo celestial"
          />
        </div>
        <div className="flex flex-col justify-center items-center xl:items-start flex-1">
          <Destinations
            selectedCelestialBody={selectedCelestialBody}
            setSelectedCelestialBody={setSelectedCelestialBody}
          />
          {isLoading ? (
            <div>loading...</div>
          ) : (
            <CelestialBodiesData
              name={celestialBodiesData?.[selectedCelestialBody].name}
              description={
                celestialBodiesData?.[selectedCelestialBody].description
              }
              distance={celestialBodiesData?.[selectedCelestialBody].distance}
              travel={celestialBodiesData?.[selectedCelestialBody].travel}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Explore;
