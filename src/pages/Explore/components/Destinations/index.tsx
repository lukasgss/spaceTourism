import React, { Dispatch, SetStateAction } from "react";
import { CelestialBodiesNames } from "../../types";

interface DestinationsProps {
  selectedCelestialBody: CelestialBodiesNames;
  setSelectedCelestialBody: Dispatch<SetStateAction<CelestialBodiesNames>>;
}

const Destinations = ({
  selectedCelestialBody,
  setSelectedCelestialBody,
}: DestinationsProps) => {
  return (
    <div className="flex gap-5 justify-center px-8 text-xl">
      <button
        type="button"
        onClick={() => setSelectedCelestialBody("moon")}
        className={`${
          selectedCelestialBody === "moon" ? "activeLink" : ""
        } uppercase pb-1 tracking-widest`}
      >
        Moon
      </button>
      <button
        type="button"
        onClick={() => setSelectedCelestialBody("mars")}
        className={`${
          selectedCelestialBody === "mars" ? "activeLink" : ""
        } uppercase pb-1 tracking-widest`}
      >
        Mars
      </button>
      <button
        type="button"
        onClick={() => setSelectedCelestialBody("europa")}
        className={`${
          selectedCelestialBody === "europa" ? "activeLink" : ""
        } uppercase pb-1 tracking-widest`}
      >
        Europa
      </button>
      <button
        type="button"
        onClick={() => setSelectedCelestialBody("titan")}
        className={`${
          selectedCelestialBody === "titan" ? "activeLink" : ""
        } uppercase pb-1 tracking-widest`}
      >
        Titan
      </button>
    </div>
  );
};

export default Destinations;
