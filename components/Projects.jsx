import Image from "next/image";
import React from "react";
import { projects } from "../data/projects";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="max-w-[95vw] m-auto lg:mt-[110px] md:mt-[30px] xs:mt-[30px]">
      <div className=" p-10">
        <h1 className="font-black  text-purple-600 md:text-[5vw] text-center  mb-10 md:mb-5  xs:text-[6vw]">
          FEATURED PROJECTS
        </h1>

        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.id} className="relative  overflow-hidden group">
              <Link legacyBehavior href={project.link}>
                <a target="_blank">
                  <img
                    src={project.img}
                    alt={project.name}
                    className="w-full h-full brightness-[50%] group-hover:brightness-100 duration-300"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end p-3">
                    <h3 className="text-2xl text-white font-black  group-hover:hidden duration-300">
                      {project.name}
                    </h3>

                    <p className="text-white group-hover:hidden duration-300">
                      {project.type}
                    </p>
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
