import Image from "next/image";
import React from "react";
import EULD from "../public/eu_looking-down.png";

const About = () => {
  const aboutMe = [
    {
      skill: "Design Magician",
      description:
        "From the captivating strokes of wireframes to the vibrant palette of UI elements, I'm your creative sorcerer for conjuring immersive digital experiences. With a passion for crafting designs that not only dazzle the eyes but also enchant the senses, I bring dreams to life.",
    },
    {
      skill: "UX/UI Alchemist",
      description:
        "Bringing a touch of magic to the digital canvas, I'm all about creating user interfaces that not only look good but also feel like a breeze to navigate. Crafting the perfect blend of aesthetics and functionality is my sweet spot, and I'm always up for the challenge of making user experiences unforgettable.",
    },
    {
      skill: "Visual Virtuoso",
      description:
        "Design isn't just what it looks like; it's how it feels. As a visual virtuoso, I wield color, typography, and layout to create harmonious compositions that resonate with your audience. Whether it's crafting sleek interfaces or refining existing designs, I elevate aesthetics to an art form.",
    },
    {
      skill: "Tools of the Trade",
      description:
        "Well-versed in an array of design tools and prototyping platforms, I harness the power of Sketch, Figma, and Adobe XD to bring concepts to life. From rapid prototyping to pixel-perfect designs, I leverage the latest trends and best practices to shape digital masterpieces that captivate and inspire.",
    },
  ];
  return (
    <div className="max-w-[85vw] m-auto mt-[110px]">
      <div className="bg-orange-100 relative py-[59px] px-[30px]">
        <div className="absolute top-0 right-0 w-[30%] h-[400px]">
          <Image src={EULD} />
        </div>
        <div className="max-w-[75%]">
          <h1 className="font-black text-purple-800 lg:text-[5rem] md:text-[3.5rem] xs:text-[1.5rem]">
            ABOUT ME
          </h1>
          <p className="font-medium lg:text-[22] md:text-[20px] sm:text-[15px] xs:text-[13px] text-gray-800 ">
            Hey there! I'm Kauan, your friendly neighborrhood web developer, and
            I've got a serious love affair with crafting seamless digital
            experiences. Here's a sneak peek into what makes me tick in the tech
            world and what are my personal interests.
          </p>
        </div>

        {aboutMe.map((skills) => (
          <div className="lg:mt-[80px] md:mt-[60px] sm:mt-[30px] xs:mt-[20px] lg:text-[22] md:text-[20px] sm:text-[15px] xs:text-[13px]items-center">
            <div className="max-w-[90%]">
              <h2 className="text-purple-800 font-black  text-[30px] tracking-widest">
                {skills.skill}
              </h2>
              <p className="font-medium  text-gray-800">{skills.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
