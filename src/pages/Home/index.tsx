import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";

import "./index.scss";

const Home = () => {
  return (
    <div className="relative homePage h-screen">
      <Navbar />
      <div className="mt-5 flex flex-col xl:flex-row items-center gap-5 px-5 md:h-[calc(100vh-138px)] md:justify-around xl:justify-center">
        <div className="xl:flex-1 text-center">
          <h2 className="uppercase text-xl md:text-3xl">
            So, you want to travel to{" "}
          </h2>
          <h1 className="bellefairFont uppercase text-white text-[80px] md:text-[130px]">
            space
          </h1>
          <p className="text-center md:max-w-md xl:mx-auto md:text-xl">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="flex justify-center mt-10 xl:flex-1">
          <Link
            to="/explore"
            className="uppercase text-black px-7 py-12 xl:px-14 xl:py-24 xl:text-3xl bg-white rounded-full hover:brightness-90"
          >
            Explore
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
