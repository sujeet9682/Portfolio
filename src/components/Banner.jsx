import BannerImage from "../assets/sk.png";
import bannerBackground from "../assets/banner_wallpaper.svg";
import Typed from "typed.js";
import { useRef, useEffect } from "react";

const Banner = () => {
  function openGmail() {
    var emailAddress = "jisujeet3@gmail.com";

    var gmailComposeUrl =
      "https://mail.google.com/mail/?view=cm&fs=1&to=" +
      encodeURIComponent(emailAddress);

    window.open(gmailComposeUrl, "_blank");
  }

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Frontend Developer", "Backend Developer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 100,
      typeSpeed: 100,
      backSpeed: 30,
      backDelay: 3000,
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
        id="banner"
        className="main-container flex justify-center flex-col md:flex-row pt-20"
      >
        <div className=" flex-1 w-full   items-center justify-center ">
          <div className=" m-14 mb-6 lg:p-5 space-y-3">
            {/* text */}
            <h3 className="xl:text-3xl text-white lg:text-2xl md:text-2xl text-xl">
              Hello there!, It's Me
            </h3>
            <h1 className="xl:text-5xl lg:text-4xl text-white md:text-3xl text-2xl">
              <span className="text-orange-600 font-bold">Sujeet </span>Kumar
              Gupta
            </h1>
            <h2 className="xl:text-2xl lg:text-xl text-slate-200 md:text-xl text-xl underline typing">
              <span ref={el}></span>
            </h2>
            <p className="text-white">
              A tech enthusiast. Seeking new opportunities to expand my skills.
            </p>

            <div className="icons-container space-x-5 flex">
              <a
                href="https://github.com/sujeet9682"
                className="bannerIcon"
                target="_blank"
              >
                <i className="fa-brands text-2xl fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/sujeet-id"
                className="bannerIcon"
                target="_blank"
              >
                <i className="fa-brands text-2xl fa-linkedin-in"></i>
              </a>
              <a className="bannerIcon">
                <i className="fa-brands text-2xl fa-instagram"></i>
              </a>
            </div>

            <br />

            <button
              href="/contact"
              onClick={openGmail}
              className=" text-1xl px-4 py-3 bg-orange-600 text-white rounded-full hover:border shadow-2xl"
            >
              Contact Me{" "}
              <span>
                <i class="fa-regular  fa-circle-down"></i>
              </span>
            </button>
          </div>
        </div>

        <div className=" p-8 flex-1 flex items-center justify-center">
          {/* image */}
          <img
            src={BannerImage}
            className="object-contain h-2/3 w-2/3 max-h-96 max-w-96 md:h-auto md:w-auto rounded-full shadow-lg border"
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
