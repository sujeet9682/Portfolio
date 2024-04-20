import BannerImage from "../assets/sujeet.jpg";
import bannerBackground from "../assets/banner_wallpaper.svg";
import Typed from "typed.js";
import { useRef, useEffect } from "react";

const Banner = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Frontend Developer", "Backend Developer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 100,
      typeSpeed: 100,
      backSpeed: 30,
      backDelay: 1000,
      loop: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div
        // style={{
        //   backgroundImage: `url(${bannerBackground})`,
        //   backgroundSize: "cover",
        // }}
        className="main-container flex items-center"
      >
        <div className=" flex w-full mt-20 justify-center">
          <div className="w-2/3 space-y-3">
            {/* text */}
            <h3 className="text-3xl font-bold">Hey!, It's Me</h3>
            <h1 className="text-5xl font-bold">Sujeet Kumar Gupta</h1>
            <h2 className="text-2xl underline font-bold typing">
              <span ref={el}></span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
              fugiat. Dolorem, dignissimos perspiciatis officia quaerat itaque
              aut ipsam asperiores cum!
            </p>

            <div className="icons-container space-x-5 flex">
              <a className="cursor-pointer hover:border  px-3 py-3 h-11 w-11 rounded-full text-orange-500 items-center justify-center flex bg-black">
                <i className="fa-brands text-2xl fa-github"></i>
              </a>
              <a className="cursor-pointer hover:border  px-3 py-3 h-11 w-11 rounded-full text-orange-500 items-center justify-center flex bg-black">
                <i className="fa-brands text-2xl fa-linkedin-in"></i>
              </a>
              <a className="cursor-pointer hover:border  px-3 py-3 h-11 w-11 rounded-full text-orange-500 items-center justify-center flex bg-black">
                <i className="fa-brands text-2xl fa-instagram"></i>
              </a>
            </div>

            <br />

            <a
              href="/contact"
              className=" text-1xl px-4 py-3 bg-orange-600 text-white rounded-full hover:border shadow-2xl"
            >
              Contact Me{" "}
              <span>
                <i class="fa-regular  fa-circle-down"></i>
              </span>
            </a>
          </div>
        </div>

        <div className=" w-full mt-20 mb-10 ml-20 flex justify-center">
          {/* image */}
          <img
            src={BannerImage}
            className="object-fill h-2/3 w-2/3 rounded-full shadow-lg border"
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
