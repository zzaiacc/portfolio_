import React from "react";
import EuHero from "../public/portfolio_eu.png";
import Image from "next/image";

import NavBar from "./NavBar";

const Hero = () => {
  return (
    <div className="mt-[20px] mx-[20px] align-middle lg:h-[100vh] md:h-[85vh] sm:min-h-[750px] max-w-[100vw] ">
      <div className="bg-gradient-to-br  from-purple-500 via-purple-600 to-purple-700 lg:h-[100vh] md:h-[100vh]  xs:h-[80vh]  relative rounded-2xl max-w-[97vw] mx-auto">
        <NavBar />

        <div
          className=" text-[9vw]   lg:leading-[100%] xs:leading-[100%]"
          style={{ color: "#E8E0C9" }}
        >
          <div>
            <h1 className="mb-[5%] text-yellow-300 text-center text-[5vw] ">
              KAUAN ZAJAC
            </h1>

            <h1 className=" lg:absolute text-center   lg:text-[135.6%]  right-0 bottom-[30.5%]   lg:px-[6.5%] z-10">
              UI/UX
            </h1>
            <h1 className=" lg:absolute text-center   lg:text-[135.6%]   lg:px-[6.5%]  bottom-[30.5%]">
              UX/UI
            </h1>
            <h1 className="lg:absolute text-center lg:text-[18.5vh] mb-[3%]  bottom-0  lg:word-spacing-[5rem] z-10 w-[100%]">
              WEB DESIGNER
            </h1>
          </div>
        </div>
        <div className="absolute bottom-0 left-0  right-0  flex px-[50px] lg:justify-center sm:justify-center ">
          <Image
            src={EuHero}
            width={500}
            height={500}
            className="lg:w-[35vw] md:w-[350px] sm:w-[300px] xs:min-w-[200px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
