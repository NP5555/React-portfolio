import React, { useEffect, useState, useRef } from "react";
import "../assets/css/style.css";
import MyImg from "../assets/img/main.jpeg";
import Learnify from "../assets/img/PROJECT1.png";
import LinkUp from "../assets/img/project2.png";
import Taskmanager from "../assets/img/register.png";
import ageimg from "../assets/img/ageCalculator.png";
import getimage from "../assets/img/getImage.png";
import pocketdictionary from "../assets/img/pocketdictionary.png";
import todotaskqr from "../assets/img/todotaskqr.png"

// import Ai from "../assets/img/project4.png";

const Portfolio = () => {
  const aboutRef = useRef(null);
  const [loading, setLoading] = useState(true); // Loading state

  // Intersection Observer for animation
  useEffect(() => {
    const sections = document.querySelectorAll(".fade-up"); // Get all sections with fade-up class

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active"); // Add the active class when the section is in view
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible
      }
    );

    sections.forEach((section) => {
      observer.observe(section); // Observe each section
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section)); // Cleanup observer on unmount
    };
  }, []);

  // Simulate content loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // After 2 seconds, hide the loader
    }, 2000);
    return () => clearTimeout(timer); // Cleanup the timer when the component unmounts
  }, []);

  return (
    <div>
      {loading ? (
        // Loader component
        <div className="flex items-center justify-center h-screen ">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
        </div>
      ) : (
        <>
          <header style={{ background: "#009688" }}>
            <a href="#" className="logo" style={{ color: "black" }}>
              Naeem.<span style={{ color: "white" }}>Ashraf</span>
            </a>
            <div className="bx bx-menu" id="menu-icon"></div>
            <ul className="navbar">
              <li>
                <a href="#home" style={{ color: "white" }}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" style={{ color: "white" }}>
                  About
                </a>
              </li>
              <li>
                <a href="#skills" style={{ color: "white" }}>
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" style={{ color: "white" }}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" style={{ color: "white" }}>
                  Contact
                </a>
              </li>
            </ul>
          </header>

          {/* Rest of your content */}
          <section
            className="home animate-fade-in-up"
            style={{ background: "#009688" }}
            id="home"
          >
            <div className="social">
              <a href="https://github.com/NP5555">
                <i className="bx bxl-github"></i>
              </a>
              <a href="#">
                <i className="bx bxl-instagram"></i>
              </a>
              <a href="https://facebook.com">
                <i className="bx bxl-facebook"></i>
              </a>
            </div>
            <div className="home-img">
              <img
                alt="Image of Naeem Ashraf"
                style={{ borderRadius: "20%", marginTop: "20px" }}
                src={MyImg}
              />
            </div>
            <div className="home-text">
              <span>Hello, I'm</span>
              <h1 className="font-bold">Naeem Ashraf</h1>
              <h2 className>
                {" "}
                Professional Front-End Web & Application Developer
              </h2>
              <p>
                Looking for a skilled developer to create a responsive, modern
                website or app? I deliver high-quality, user-friendly solutions
                tailored to your needs. Let’s bring your vision to life—hire me
                today!
              </p>
              <a
                href="https://github.com/NP5555"
                style={{ backgroundColor: "#747472" }}
                className="btn mt-3"
              >
                Download Resume
              </a>
            </div>
          </section>

          <section
            className="fadeInUp animate-fade-in-up"
            style={{ background: "#009688" }}
            id="about"
          >
            <div className="heading">
              <h2 style={{ color: "black", fontWeight: "bold" }}>About Me</h2>
              <span style={{ color: "white" }}>Introduction</span>
            </div>
            <div className="about-container">
              <div className="about-img">
                <img
                  alt="Image of Naeem Ashraf"
                  style={{ borderRadius: "20%" }}
                  src={MyImg}
                />
              </div>
              <div className="about-text">
                <p>
                  Hi, I am Naeem. I'm an experienced frontend developer with 3+
                  years of expertise in building responsive web applications
                  using HTML, CSS, JavaScript, Bootstrap - React, and various
                  frameworks. I specialize in developing web apps, converting
                  PSD, XD, Figma designs into RESPONSIVE HTML/CSS, and more.
                </p>
                <div className="information">
                  <div className="info-box">
                    <i className="bx bx-laptop"></i> <span>Naeem Ashraf</span>
                  </div>
                  <div className="info-box">
                    <i className="bx bxs-phone"></i> <span>+923343288667</span>
                  </div>
                  <div className="info-box">
                    <i className="bx bxs-envelope"></i>{" "}
                    <span>
                      <a href="mailto:naeemashrafpansota@gmail.com">
                        naeemashrafpansota@gmail.com
                      </a>
                    </span>
                  </div>
                </div>
                <a
                  href="https://github.com/NP555"
                  style={{ backgroundColor: "#747472" }}
                  className="btn"
                >
                  Information
                </a>
              </div>
            </div>
          </section>

          <section
            className="skills animate-fade-in-up"
            style={{ background: "#009688" }}
            id="skills"
          >
            <div className="heading">
              <h2 style={{ color: "black", fontWeight: "bold" }}>Skills</h2>
              <span style={{ color: "white" }}>My Skills</span>
            </div>
            <div className="skills-container">
              <div className="bars">
                <div className="bars-box placeholder-wave">
                  <h3 style={{ color: "white", fontWeight: "bold" }}>HTML</h3>
                  <span style={{ color: "white" }}>94%</span>
                  <div className="light-bar"></div>
                  <div className="percent-bar html-bar"></div>
                </div>
                <div className="bars-box placeholder-wave">
                  <h3 style={{ color: "white", fontWeight: "bold" }}>CSS</h3>
                  <span style={{ color: "white" }}>84%</span>
                  <div className="light-bar"></div>
                  <div className="percent-bar css-bar"></div>
                </div>
                <div className="bars-box placeholder-wave">
                  <h3 style={{ color: "white", fontWeight: "bold" }}>
                    JavaScript
                  </h3>
                  <span style={{ color: "white" }}>74%</span>
                  <div className="light-bar"></div>
                  <div className="percent-bar js-bar"></div>
                </div>
                <div className="bars-box placeholder-wave">
                  <h3 style={{ color: "white", fontWeight: "bold" }}>MERN</h3>
                  <span style={{ color: "white" }}>80%</span>
                  <div className="light-bar"></div>
                  <div className="percent-bar react-bar"></div>
                </div>
              </div>
              <div className="skills-img">
                <img
                  alt="Image of Naeem Ashraf"
                  style={{ borderRadius: "20%" }}
                  src={MyImg}
                />
              </div>
            </div>
          </section>

          <section className="projects animate-fade-in-up">
            <div className="heading mb-10">
              <h2 style={{ color: "black", fontWeight: "bold" }}>Projects</h2>
              <span style={{ color: "white" }}>some of my work"</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img class="rounded-t-lg" src={LinkUp} alt="" />
                </a>
                <div class="p-5 bg-black">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">
                      LinkUp
                    </h5>
                  </a>
                  <p class="mb-3 font-normal text-white">
                    {" "}
                    A social networking platform designed to connect users,
                    enabling them to share updates, follow others, and engage
                    with multimedia content.
                  </p>
                  <a
                    href="#"
                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                  >
                    Read more
                    <svg
                      class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img class="rounded-t-lg" src={Learnify} alt="" />
                </a>
                <div class="p-5 bg-black">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
                      Learnify
                    </h5>
                  </a>
                  <p class="mb-3 font-normal text-white">
                    {" "}
                    A comprehensive platform offering a wide range of courses,
                    enabling users to learn new skills through interactive
                    content and assessments.
                  </p>
                  <a
                    href="#"
                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                  >
                    Read more
                    <svg
                      class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img class="rounded-t-lg" src={Taskmanager} alt="" />
                </a>
                <div class="p-5 bg-black">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
                      {" "}
                      Task Manager
                    </h5>
                  </a>
                  <p class="mb-3 font-normal text-white">
                    A streamlined task management tool that helps users
                    organize, prioritize, and track tasks with deadlines and
                    notifications.
                  </p>
                  <a
                    href="https://task-manager-client-blush.vercel.app/"
                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                  >
                    Read more
                    <svg
                      class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img class="rounded-t-lg" src={ageimg} alt="" />
                </a>
                <div class="p-5 bg-black">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
                      {" "}
                      Age Counter App
                    </h5>
                  </a>
                  <p class="mb-3 font-normal text-white">
                    A React-based tool that calculates a user's age in years,
                    months, and days. Users input their birthdate, and the app
                    validates the date before displaying the exact age. It uses
                    React hooks for state management and react-hot-toast for
                    error handling. Styled with Tailwind CSS, the app provides a
                    clean and interactive interface, allowing users to track
                    their age with ease.
                  </p>
                  <a
                    href="https://countmyage.vercel.app/"
                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                  >
                    Read more
                    <svg
                      class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img class="rounded-t-lg" src={getimage} alt="" />
                </a>
                <div class="p-5 bg-black">
                  <a href="https://getimage-one.vercel.app/">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
                      {" "}
                      GetImage_
                    </h5>
                  </a>
                  <p class="mb-3 font-normal text-white">
                    A full-screen responsive image search and gallery app built
                    with React and TailwindCSS. Features dynamic search,
                    grid-based layout, image modal view, and download
                    functionality using Unsplash API.
                  </p>
                  <a
                    href="https://getimage-one.vercel.app/"
                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                  >
                    Read more
                    <svg
                      class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img class="rounded-t-lg" src={pocketdictionary} alt="" />
                </a>
                <div class="p-5 bg-black">
                  <a href="https://pocket-dictionary-nu.vercel.app/">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
                      {" "}
                      Pocket Dictionary
                    </h5>
                  </a>
                  <p class="mb-3 font-normal text-white">
                    A compact React-based Pocket Dictionary app offering instant
                    word search, definitions, and synonyms. Powered by an API
                    for accurate word meanings, with a clean, responsive UI for
                    easy access anywhere.
                  </p>
                  <a
                    href="#"
                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                  >
                    Read more
                    <svg
                      class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img class="rounded-t-lg" src={todotaskqr} alt="" />
                </a>
                <div class="p-5 bg-black">
                  <a href="https://pocket-dictionary-nu.vercel.app/">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
                      {" "}
                      QR todo-task-List
                    </h5>
                  </a>
                  <p class="mb-3 font-normal text-white">
                    The QR Todo Task app allows users to create, manage, and
                    track tasks effortlessly using QR codes. Simplify your
                    productivity by scanning codes to access tasks on the go!
                  </p>
                  <a
                    href="https://todotask-app.vercel.app/"
                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                  >
                    Read more
                    <svg
                      class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section
            className="contact animate-fade-in-up"
            style={{ background: "#009688" }}
            id="contact"
          >
            <div className="heading">
              <h2 style={{ color: "black", fontWeight: "bold" }}>Contact</h2>
              <span style={{ color: "white" }}>Connect With Me</span>
            </div>
            <div className="contact-form">
              <form action="https://api.web3forms.com/submit" method="POST">
                <input
                  type="hidden"
                  name="access_key"
                  value="YOUR_ACCESS_KEY_HERE"
                />
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="8"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="btn  hover:text-black hover:bg-black text-black"
                >
                  Send Message
                </button>
              </form>
            </div>
          </section>

          <div className="copyright">
            <p>&#169; Naeem Ashraf. All Right Reserved</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Portfolio;
