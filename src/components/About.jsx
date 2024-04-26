import { useState } from "react";
import BannerImage from "../assets/sujeet.jpg";

const About = () => {
  return (
    <>
      <div id="about" className="main-container py-5">
        <h2 className="underline text-slate-200 font-semi text-center text-4xl">
          About Me
        </h2>

        <div className="flex justify-around pt-7 flex-col lg:flex-row">
          <div className="w-full flex items-center justify-center">
            <div className="sm:w-2/3 space-y-3 w-full p-8 text-center sm:text-left sm:p-0">
              <h1 className="text-3xl  text-neutral-300 text-center ">
                Know who I'M
              </h1>
              <p className=" text-white leading-snug sm:leading-relaxed">
                Hello, I am <span>Sujeet Kumar Gupta</span>, a College Student.
                <br />
                I am currently currently pursuing B.Tech in Computer Science at
                IPEC Ghaziabad.
                <br /> Some activities that I love to do! <br />
                <i class="fa-solid fa-fire-flame-curved"></i> Playing Games
                <br />
                <i class="fa-solid fa-suitcase-rolling"></i> Travelling
              </p>
            </div>
          </div>
          <div className="w-full flex justify-center text-center lg:text-left">
            <div className="w-2/3 space-y-1 text-lg">
              <h1 className="text-3xl text-neutral-300 font-semibold">
                <i class="fa-solid fa-graduation-cap"></i> Education{" "}
              </h1>
              <p className="text-white">2021 - Present</p>
              <p className="text-white">B. Tech (CSE)</p>
              <p className="text-white">
                Inderprastha Engineering College, Ghaziabad
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
