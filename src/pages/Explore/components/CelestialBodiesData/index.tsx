import React from "react";

interface CelestialBodiesDataProps {
  name: string | undefined;
  description: string | undefined;
  distance: string | undefined;
  travel: string | undefined;
}

const CelestialBodiesData = ({
  name,
  description,
  distance,
  travel,
}: CelestialBodiesDataProps) => {
  return (
    <div className="px-8">
      <div className="flex flex-col gap-5 text-center xl:text-left">
        <h2 className="mt-5 bellefairFont text-[56px] xl:text-[80px] text-white text-center xl:text-left uppercase tracking-wide">
          {name}
        </h2>
        <p className="xl:max-w-xl text-xl">{description}</p>
        <div className="w-full px-5 h-[2px] bg-[#383B4B] xl:mt-8" />
      </div>
      <div className="flex flex-col xl:flex-row gap-5 xl:gap-20 mt-5 text-center xl:text-left pb-5 text-xl">
        <div className="flex flex-col gap-2">
          <span className="uppercase">Avg. distance</span>
          <span className="bellefairFont text-xl font-medium text-white uppercase">
            {distance}
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <span className="uppercase">Est. travel time</span>
          <span className="bellefairFont text-xl font-medium text-white uppercase">
            {travel}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CelestialBodiesData;
