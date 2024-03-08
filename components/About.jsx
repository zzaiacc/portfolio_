import Image from "next/image";
import React from "react";
import EULD from "../public/eu_looking-down.png";

const About = () => {
  const aboutMe = [
    {
      skill: "The Code Developer",
      description:
        "From the mesmerizing dance of HTML to the styling symphony of CSS and the dynamic rhythm of JavaScript, I'm your go-to guy for weaving the intricate threads of web development. I thrive on turning lines of code into functional and visually stunning websites.",
    },
    {
      skill: "UX/UI Alchemist",
      description:
        "Bringing a touch of magic to the digital canvas, I'm all about creating user interfaces that not only look good but also feel like a breeze to navigate. Crafting the perfect blend of aesthetics and functionality is my sweet spot, and I'm always up for the challenge of making user experiences unforgettable.",
    },
    {
      skill: "Front-End Enthusiast",
      description:
        "Front-end is not just my job; it's my playground. Whether it's optimizing performance, ensuring responsiveness across devices, or adding that extra dash of interactivity, I'm committed to delivering top-notch front-end solutions that leave users smiling.",
    },
    {
      skill: "Tech Tools at My Fingertips",
      description:
        "Proficient in a variety of tools and frameworks, I'm no stranger to the ever-evolving tech landscape. From React for building dynamic interfaces to sleek animations with CSS and JavaScript, I'm equipped with the tools to turn your digital dreams into reality.",
    },
  ];
  return (
    <div className="max-w-[1300px] m-auto mt-[110px]">
      <div className="bg-orange-100 relative">
        <div className="py-[59px] px-[30px]">
          <div className="absolute top-0 right-0 w-[30%] h-[400px]">
            <Image src={EULD} />
          </div>
          <div className="max-w-[70%]">
            <h2 className="font-black text-purple-800 lg:text-[5rem] md:text-[3.5rem] xs:text-[1.5rem]">
              ABOUT ME
            </h2>
            <p className="font-medium text-[22px]  md:text-[18px] sm:text-[13px] xm:text-[10px]">
              Hey there! I'm Kauan, your friendly neighborrhood web developer,
              and I've got a serious love affair with crafting seamless digital
              experiences. Here's a sneak peek into what makes me tick in the
              tech world and what are my personal interests.
            </p>
            <div>
              {aboutMe.map((skills) => (
                <div className="lg:mt-[80px] md:mt-[60px] sm:mt-[30px] xs:mt-[20px] lg:text-[32px]">
                  <h3 className="text-purple-800 font-black  md:text-[20px] sm:text-[15px] xm:text-[13px]">
                    {skills.skill}
                  </h3>
                  <p className="font-medium ] md:text-[18px] sm:text-[13px] xm:text-[10px]">
                    {skills.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
