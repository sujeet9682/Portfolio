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
      <div className="pb-14">
        <h1 className="text-center font-bold text-4xl underline py-14">
          My Experties
        </h1>
        <div
          style={{
            backgroundImage: `url(${bannerBackground})`,
            backgroundSize: "cover",
          }}
          className="main-container flex py-16"
        >
          {/* text  */}
          <div className=" justify-center flex ">
            <div className="text-center w-2/3 space-y-4">
              <h1 className="text-3xl font-bold ">I love these Tech Stacks</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Inventore beatae eligendi fugit neque vel error. Unde maxime
                quisquam voluptate omnis.
              </p>
              <button className="bg-orange-600 px-3 py-2 border rounded-full shadow-lg cursor-pointer hover:bg-orange-500">
                <a href="#">Contact Me</a>
              </button>
            </div>
          </div>
          <div className=" flex justify-center">
            {/* skillset */}
            <div className="flex w-2/3 space-x-3 flex-wrap h-fit justify-center">
              {skills.map((skill) => (
                <p
                  key={skill.id}
                  className="bg-gray-400 text-1xl font-semibold px-3 py-1 mt-3 border w-fit hover:bg-orange-600 hover:cursor-pointer rounded-full"
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
