import Image from "next/image";
import React from "react";
import KZ from "../public/KZ LOGO.png";

const Footer = () => {
  return (
    <footer className=" overflow-hidden mt-[200px]">
      <div class="custom-shape-divider-top-1709668981 bg-purple-800 h-[70vh]">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          fill="white"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
        <div className="grid lg:grid-flow-col  p-10 max-w-[1600px] lg:mx-auto flex-wrap justify-around tracking-widest">
          <Image src={KZ} />

          <div className="text-2xl   text-yellow-400">
            <h2 className="font-medium"> Projects </h2>
          </div>
          <div className=" flex flex-col">
            <h2 className="text-2xl font-medium  text-yellow-400">
              Fale Comigo
            </h2>
            <a href="#" className="text-white">
              {" "}
              E-mail
            </a>
          </div>
          <div className=" flex flex-col ">
            <h2 className="text-2xl font-medium text-yellow-400">
              Redes Sociais
            </h2>
            <a href="#" className="text-white">
              Linkedin
            </a>
            <a href="#" className="text-white">
              {" "}
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
