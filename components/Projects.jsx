import Image from "next/image";
import React from "react";
import WG from "../public/wearing-glory.png";

const Projects = () => {
  return (
    <div className="max-w-[1300px] m-auto lg:mt-[110px] md:mt-[30px] ">
      <h1 className="font-black lg:p-0 md:pl-[80px]  text-[5rem] text-purple-800 space-x-[-3%] tracking-tighter lg:mb-10 md:mb-5 xs:text-center">
        PROJECTS
      </h1>

      <div>
        <ul className="gap-10 flex flex-col max-w-[100vw]">
          <li className="bg-purple-800 p-[20px] lg:flex md:flex sm:flex text-white lg:w-[100%] md:w-[80%]  relative rounded-md mx-auto  lg:justify-start xs:justify-center sm:justify-center">
            <Image src={WG} width={350} />
            <div className="lg:pl-[45px] sm:pl-[30px] lg:block lg:text-start md:flex md:items-center md:text-center sm:flex sm:items-center sm:text-center ">
              <h2 className="font-black text-[40px] tracking-tighter xs:mt-5 lg:mt-0 md:mt-0 sm:mt-0">
                WEARING GLORY
              </h2>
              <p className="max-w-[499px] text-[22px] lg:flex md:hidden sm:hidden xs:hidden">
                Project that shows all shirts in titles of the team in that
                year. Demo is from the brazilian team Palmeiras
              </p>
            </div>
            <div className="flex justify-center">
              <a
                href=""
                className=" text-yellow-300 lg:absolute sm:absolute bottom-10 sm:bottom-5 right-10 font-black tracking-tighter hover:tracking-widest duration-700  xs:static xs:text-center xs:mt-5"
              >
                LIVE DEMO
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
