import React from "react";
import KZ from "../public/KZ LOGO.png";
import EuHero from "../public/portfolio_eu.png";
import Image from "next/image";

import styles from "../styles/Hero.module.css";
import NavBar from "./NavBar";

const Hero = () => {
  return (
    <div className="m-[20px] align-middle lg:h-[100vh] md:h-[85vh] sm:min-h-[750px] max-w-[100vw] ">
      <div className="bg-gradient-to-br  from-purple-500 via-purple-600 to-purple-700 lg:h-[100vh] md:h-[80vh] sm:min-h-[750px] xs:h-[80vh]  relative rounded-2xl max-w-[97vw] ">
        <NavBar />

        <div
          className=" text-[9vw]   lg:leading-[100%] xs:leading-[100%]"
          style={{ color: "#E8E0C9" }}
        >
          <div>
            <h2 className="mb-[5%] text-yellow-300 text-center text-[5vw] ">
              KAUAN ZAJACC
            </h2>

            <h2 className="lg:absolute text-center lg:text-[189px] lg:mb-[5%]  left-0 bottom-[120px] lg:px-[94px] lg:word-spacing-[5rem]">
              FRONT <span className="relative  lg:z-10 lg:pl-[5rem]">END</span>
            </h2>
            <h2 className=" lg:absolute text-center  mb-[3%]  bottom-0  right-0 lg:px-[94vw] z-10">
              DEVELOPER{" "}
            </h2>
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
