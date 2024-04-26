import { useState } from "react";
import React, { useEffect } from "react";

const Header = () => {
  const burger = () => {
    let menu = document.getElementById("toggle");
    menu.classList.toggle("hidden");
  };

  const [menuLinks, setMenuLinks] = useState([
    {
      title: "Home",
      link: "#banner",
      id: "1",
    },
    {
      title: "About",
      link: "#about",
      id: "2",
    },
    {
      title: "Projects",
      link: "#project",
      id: "4",
    },
    {
      title: "Skills",
      link: "#skills",
      id: "3",
    },
    {
      title: "Contact",
      link: "#banner",
      id: "5",
    },
  ]);

  return (
    <>
      <div className="w-full h-20 border items-center px-16 bg-slate-400 text-black main flex justify-between fixed z-10">
        <div>
          {/* brand logo */}
          <h1 className="hover:cursor-wait  text-xl lg:text-2xl font-extrabold">
            Hello folks <span className="wave font-bold">👋</span>
          </h1>
        </div>
        <div className="navlinks space-x-6 hidden md:block">
          {/* menu links */}

          {menuLinks.map((link) => (
            <a
              key={link.id}
              href={link.link}
              className="hover:text-orange-600 text-lg hover:underline font-bold"
            >
              {link.title}
            </a>
          ))}
        </div>

        <div
          id="burgermenu"
          onClick={burger}
          className="text-2xl md:hidden cursor-pointer hover:scale-110"
        >
          <i class="fa-solid fa-bars"></i>
        </div>
      </div>
      <div id="toggle" className="right-0 top-0 fixed z-50 hidden mt-20 mr-3">
        <div className="inline-flex flex-col items-end justify-end relative p-2 px-8 space-y-2  text-black bg-slate-400">
          {menuLinks.map((link) => (
            <a
              onClick={burger}
              key={link.id}
              href={link.link}
              className="hover:text-orange-600 hover:underline font-bold"
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
