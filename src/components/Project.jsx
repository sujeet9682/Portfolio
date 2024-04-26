import { useState } from "react";
import clickcart from "../assets/clickcart.jpg";
import profile from "../assets/profile.png";
import spending from "../assets/spending.png";

const Project = () => {
  const [projects, setProjects] = useState([
    {
      img: clickcart,
      title: "ClickCart",
      description: `Stylish men's fashion store, offering a diverse range of clothing, accessories, and footwear to elevate your wardrobe`,
      link: "https://github.com/sujeet9682/WebDev/tree/master/my%20Portfolio",
      id: "1",
    },
    {
      img: profile,
      title: "Personal portfolio",
      description: `Portfolio website showcasing my creative endeavors, demonstrating my skills and build connection`,
      link: "https://github.com/sujeet9682/Portfolio",
      id: "2",
    },
    {
      img: spending,
      title: "Spending Tracker",
      description: `A spending tracker app designed to streamline your financial management where one can easily monitor their expenses`,
      link: "https://github.com/sujeet9682/Spending-Tracker",
      id: "3",
    },
  ]);

  return (
    <>
      <div id="project" className="main-container py-16 px-10">
        <h1 className="text-center underline font-bold text-4xl pb-15">
          My Projects
        </h1>
        <div className="project-container flex flex-col lg:flex-row items-center justify-center">
          {/* Projects */}

          {projects.map((project) => (
            <div
              style={{
                backgroundImage: `url(${project.img})`,
                backgroundSize: "cover",
                backgroundColor: "rgba(255, 0, 255, 0.3)",
              }}
              key={project.id}
              className="hover:bg-slate-400 text-center img-container border-l-4 bg-slate-300 m-3 items-center w-full sm:w-2/3 md:w-3/5 mt-12 shadow-lg rounded-xl"
            >
              <div className="overlay space-y-1 xl:space-y-4 pt-4">
                <h2 className="text-3xl">{project.title}</h2>
                <p>{project.description}</p>
                <button className="hover:cursor-pointer hover:bg-orange-500 text-white border-2 px-3 py-2 bg-orange-600 rounded-full text-1xl">
                  <a href={project.link} target="_blank">
                    Check
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Project;
