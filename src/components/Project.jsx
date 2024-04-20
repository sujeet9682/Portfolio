import { useState } from "react";

const Project = () => {
  const [projects, setProjects] = useState([
    {
      img: "img",
      title: "To-do App",
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      Pariatur, debitis?`,
      link: "",
      id: "1",
    },
    {
      img: "img",
      title: "To-do App",
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      Pariatur, debitis?`,
      link: "",
      id: "2",
    },
    {
      img: "img",
      title: "To-do App",
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      Pariatur, debitis?`,
      link: "",
      id: "3",
    },
  ]);

  return (
    <>
      <div className="main-container py-16 px-10">
        <h1 className="text-center underline font-bold text-4xl pb-15">
          My Projects
        </h1>
        <div className="project-container space-x-10 flex justify-center">
          {/* Projects */}

          {projects.map((project) => (
            <div
              key={project.id}
              className="hover:bg-slate-400 text-center bg-slate-300 p-10 items-center w-1/3 mt-12 shadow-lg rounded-xl"
            >
              {project.logo}
              <h2 className="text-4xl">{project.title}</h2>
              <p>{project.description}</p>
              <button className="hover:cursor-pointer hover:bg-orange-500 text-white border-2 px-3 py-2 bg-orange-600 rounded-full text-1xl">
                Check
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Project;
