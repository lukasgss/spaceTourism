import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Navbar from "../../components/Navbar";

import "./index.scss";
import { getCrewData } from "../../services/Crew";

const Crew = () => {
  const [contadorCarrosel, setContadorCarrosel] = useState(0);

  const { data: crewData, isLoading } = useQuery(["crewData"], async () => {
    const { data } = await getCrewData();
    return data.crew;
  });

  return (
    <div id="crew" className="min-h-screen">
      <Navbar />
      <div className="flex flex-col">
        <div className="mt-5 flex gap-2.5 justify-center md:justify-start xl:justify-center xl:text-3xl md:px-10 text-xl md:text-2xl">
          <span className="text-[#56575d]">03</span>
          <span className="uppercase text-white">Meet your crew</span>
        </div>
        <div
          id="carrosel"
          className="mx-auto mt-10 flex flex-col md:flex-col-reverse xl:flex-row-reverse xl:items-center xl:w-full xl:justify-around xl:px-20"
        >
          <div className="flex flex-col md:flex-col-reverse xl:flex-col">
            <img
              src={crewData?.[contadorCarrosel].images.png}
              className="w-60 h-[350px] md:w-80 md:h-[450px] mx-auto md:mt-20"
              alt="Foto de membro da equipe"
            />
            <div className="flex justify-center gap-4 mt-10 ">
              {crewData?.map((membro, idx) => (
                <button
                  type="button"
                  key={membro.name}
                  onClick={() => setContadorCarrosel(idx)}
                >
                  <div
                    className={`w-4 h-4 rounded-full ${
                      idx === contadorCarrosel ? "bg-white" : "bg-[#5c5e68]"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-5 xl:gap-10 text-center xl:text-left mt-5 px-6 pb-16 md:pb-0">
            <div className="flex flex-col gap-1 xl:gap-8">
              <span className="text-2xl md:text-3xl xl:text-[50px] text-[#909196] uppercase">
                {crewData?.[contadorCarrosel].role}
              </span>
              <h2 className="text-3xl md:text-4xl xl:text-[70px] text-white uppercase">
                {crewData?.[contadorCarrosel].name}
              </h2>
            </div>
            <p className="max-w-lg text-xl xl:text-2xl">
              {crewData?.[contadorCarrosel].bio}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crew;
