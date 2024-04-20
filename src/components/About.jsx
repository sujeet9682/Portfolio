import { useState } from "react";
import BannerImage from "../assets/sujeet.jpg";

const About = () => {
  const [info, setInfo] = useState({
    image: BannerImage,
    title: "Java Developer",
    desc1: ` Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
                maxime, ex dolorum in beatae voluptates sapiente possimus eum
                cumque quod facere corporis vitae similique sint! Iste `,
    desc2: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
                maxime, ex dolorum in beatae voluptates sapiente possimus eum
                cumque quod facere corporis vitae similique `,
  });

  return (
    <>
      <div className="main-container bg-gray-100 py-16">
        <h2 className="underline font-bold text-center text-4xl  pb-15">
          About Me
        </h2>

        <div className="flex items-center">
          <div className="w-full flex justify-center">
            <img
              className=" rounded-full h-2/3 w-2/3"
              src={info.image}
              alt="Sujeet Kumar Gupta"
            />
          </div>
          <div className="w-full flex justify-center">
            <div className="w-2/3 space-y-5">
              <h1 className="text-5xl font-semibold">{info.title}</h1>
              <p>{info.desc1}</p>
              <p>{info.desc2}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
