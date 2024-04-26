import bannerBackground from "../assets/banner_wallpaper.svg";

import { useState } from "react";

const Experties = () => {
  const [skills, setSkill] = useState([
    {
      skill: "Tailwind CSS",
      id: "1",
    },
    {
      skill: "React JS",
      id: "2",
    },
    {
      skill: "Bootstrap",
      id: "3",
    },
    {
      skill: "Javascript",
      id: "4",
    },
    {
      skill: "CSS",
      id: "5",
    },
    {
      skill: "HTML",
      id: "6",
    },
    {
      skill: "Core Java",
      id: "7",
    },
    {
      skill: "Hibernate(ORM Tool)",
      id: "8",
    },
    {
      skill: "Spring MVC",
      id: "9",
    },
    {
      skill: "Spring Boot",
      id: "10",
    },
    {
      skill: "Spring JDBC",
      id: "11",
    },
    {
      skill: "Mysql",
      id: "12",
    },
    {
      skill: "AWS Cloud",
      id: "13",
    },
    {
      skill: "EC2",
      id: "14",
    },
  ]);
  return (
    <>
      <div id="skills" className="pb-14 ">
        <h1 className="text-center text-slate-200 text-4xl underline py-8">
          My Skills
        </h1>
        <div className="main-container flex flex-col lg:flex-row">
          {/* text  */}
          <div className=" justify-center md:items-center flex pb-8">
            <div className="text-center w-4/5 space-y-3">
              <h1 className="text-3xl text-neutral-200">
                I love using Tech Stacks
              </h1>
              <p className="text-white">
                Tech stacks are fantastic! They're like a palette of tools and
                technologies that we use to create amazing digital creations.
              </p>
              <button className="bg-orange-600 px-3 py-2 border hidden rounded-full shadow-lg cursor-pointer hover:bg-orange-500">
                <a href="#">Contact Me</a>
              </button>
            </div>
          </div>
          <div className=" flex w-full  justify-center">
            {/* skillset */}
            <div className="flex w-4/5 lg:w-fit  flex-wrap h-fit items-center justify-center">
              {skills.map((skill) => (
                <p
                  key={skill.id}
                  className="bg-gray-400 text-1xl font-semibold px-2 py-1 ml-3 mt-3 border w-fit hover:bg-orange-600 hover:cursor-pointer rounded-full"
                >
                  {skill.skill}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experties;
