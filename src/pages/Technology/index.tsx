import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Navbar from "../../components/Navbar";

import "./index.scss";
import { getTechnologyData } from "../../services/Technology";

const Technology = () => {
  const [contadorCarrosel, setContadorCarrosel] = useState(0);

  const { data: technologyData } = useQuery(["technologyData"], async () => {
    const { data } = await getTechnologyData();
    return data.technology;
  });

  return (
    <div id="technology" className="min-h-screen">
      <Navbar />
      <div className="flex w-full justify-center gap-2.5 text-2xl mb-5 xl:mt-5 xl:text-3xl">
        <span className="text-[#4d4d56]">04</span>
        <span className="uppercase text-white">Space Launch 101</span>
      </div>
      <div className="flex flex-col-reverse xl:flex-row items-center justify-center min-h-[calc(100vh-238px)]">
        <div className="flex-1 mt-5">
          <div className="flex flex-col xl:flex-row justify-center gap-10">
            <div className="flex justify-center xl:flex-col gap-8 text-4xl">
              {technologyData?.map((data, idx) => (
                <button
                  key={data.name}
                  type="button"
                  onClick={() => setContadorCarrosel(idx)}
                  className={`rounded-full bg-white px-4 py-2 md:px-8 md:py-6 border border-white ${
                    contadorCarrosel === idx
                      ? "bg-white text-black"
                      : "bg-transparent text-white"
                  }`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>
            <div className="text-center px-10 xl:px-3 pb-10 xl:pb-0">
              <span className="uppercase text-xl md:text-2xl">
                The terminology...
              </span>
              <h2 className="bellefairFont mt-2 uppercase text-white text-3xl md:text-4xl xl:text-[50px] tracking-widest">
                {technologyData?.[contadorCarrosel].name}
              </h2>
              <p className="max-w-md mt-5 text-lg md:text-xl">
                {technologyData?.[contadorCarrosel].description}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <img
            src={technologyData?.[contadorCarrosel].images.portrait}
            className="hidden xl:block"
            alt="Imagem descritiva"
          />
          <img
            src={technologyData?.[contadorCarrosel].images.landscape}
            className="xl:hidden mb-4"
            alt="Imagem descritiva"
          />
        </div>
      </div>
    </div>
  );
};

export default Technology;
