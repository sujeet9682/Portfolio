import { useState } from "react";
import React, { useEffect } from "react";

const Header = () => {
  const [brandName, setBrandName] = useState("Sujeet Kumar Gupta");

  const [menuLinks, setMenuLinks] = useState([
    {
      title: "Home",
      link: "/home",
      id: "1",
    },
    {
      title: "About",
      link: "/about",
      id: "2",
    },
    {
      title: "Projects",
      link: "/project",
      id: "4",
    },
    {
      title: "Skills",
      link: "/skills",
      id: "3",
    },
    {
      title: "Contact",
      link: "/contact",
      id: "5",
    },
  ]);

  const [actionButton, setActionButton] = useState({
    title: "Hire me !",
    link: "/hire-me",
  });

  return (
    <>
      <div className="w-full h-20 border items-center px-16 bg-gray-100 main flex justify-between">
        <div>
          {/* brand logo */}
          <h1 className="hover:cursor-wait text-2xl font-bold">
            Hello folks <span className="wave font-bold">👋</span>
          </h1>
        </div>
        <div className="space-x-6">
          {/* menu links */}

          {menuLinks.map((link) => (
            <a
              key={link.id}
              href={link.link}
              className="hover:text-orange-600 hover:underline font-bold"
            >
              {link.title}
            </a>
          ))}
        </div>

        <a
          href={actionButton.link}
          className="px-3 py-2 bg-orange-500 shadow rounded-full hover:bg-orange-600 text-1xl font-bold"
        >
          {/* button */}
          {actionButton.title}
        </a>
      </div>
    </>
  );
};

export default Header;
