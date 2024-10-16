import React, { useEffect, useState, useRef } from "react";
import "../assets/css/style.css";
import MyImg from "../assets/img/main.jpeg";
import Learnify from "../assets/img/PROJECT1.png";
import LinkUp from "../assets/img/project2.png";
import Taskmanager from "../assets/img/register.png";
import ageimg from "../assets/img/agecalculator.png";
import getimage from "../assets/img/getImage.png";
import pocketdictionary from "../assets/img/pocketdictionary.png";
import todotaskqr from "../assets/img/todotaskqr.png";
import backend from "../assets/img/socialmediabackend.png";
import lifecare from "../assets/img/LifeCare-.png";


// import Ai from "../assets/img/project4.png";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const aboutRef = useRef(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const sections = document.querySelectorAll(".fade-up"); 

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active"); 
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });




    return () => {
      sections.forEach((section) => observer.unobserve(section)); 
    };
  }, []);





  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer); // Cleanup the timer when the component unmounts
  }, []);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };



  return (
    <div>
      {loading ? (
        // Loader component
        <div className="flex items-center justify-center h-screen ">
          <div className="loader ease-linear"></div>
        </div>
      ) : (
        <>
     <header style={{ background: "#009688" }}>
            <a href="#" className="logo" style={{ color: "black" }}>
              Naeem.<span style={{ color: "white" }}>Ashraf</span>
            </a>
            <div className="bx bx-menu" id="menu-icon" onClick={toggleMenu}></div>
            <ul className={`navbar ${isMenuOpen ? "open" : ""}`}>
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
            className="home .fade-up animate-fade-in-up"
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

          <section className="projects animate-fade-in-up"      style={{ background: "#009688" }}   id="projects">
            <div className="heading mb-10">
              <h2 style={{ color: "black", fontWeight: "bold" }}>Projects</h2>
              <span style={{ color: "white" }}>some of my work"</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div class="max-w-sm bg-black rounded-lg shadow">
                <a href="https://link-upsocial.netlify.app/">
                  <img class="rounded-t-lg" src={LinkUp} alt="" />
                </a>
                <div class="p-5 bg-black">
                  <a href="https://link-upsocial.netlify.app/">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">
                      LinkUp
                    </h5>
                  </a>
                  <p class="mb-3 font-normal text-white">
                    {" "}
                    LinkUp is a dynamic social media app designed for seamless
                    interaction and connectivity. Users can share updates,
                    connect with friends, and engage in discussions. Built with
                    React for the frontend and Node.js with Express for the
                    backend, it ensures a smooth and responsive experience,
                    making social networking intuitive and enjoyable for
                    everyone.
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
              <div class="max-w-sm bg-black rounded-lg shadow">
                <a href="https://github.com/NP5555/E-Learn-Backend">
                  <img class="rounded-t-lg" src={backend} alt="" />
                </a>
                <div class="p-5 bg-black">
                  <a href="https://github.com/NP5555/E-Learn-Backend">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">
                      Soical Media Application Backend
                    </h5>
                  </a>
                  <p class="mb-3 font-normal text-white">
                    {" "}
                    The backend for this social media application is built with
                    Nodejs and MongoDB, providing a scalable foundation for user
                    interactions and data management. It features user
                    authentication, post management, commenting, liking,
                    real-time notifications, and a chat system, all accessible
                    through a robust RESTful API. This architecture ensures high
                    performance and security, making it ideal for a dynamic
                    social media platform
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
              <div class="max-w-sm rounded-lg shadow bg-black">
                <a href="#">
                  <img class="rounded-t-lg" src={Learnify} alt="" />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
                      Learnify
                    </h5>
                  </a>
                  <p class="mb-3 font-normal text-white">
                    {" "}
                    Learnify is a student-focused platform offering a wide range
                    of IT courses, including web development, UI/UX design, data
                    science, and much more. Designed for learners of all levels,
                    the app allows users to easily browse, purchase, and engage
                    with high-quality courses taught by industry experts. With a
                    user-friendly interface and dynamic learning resources,
                    Learnify empowers students to enhance their skills and
                    advance their careers. Visit elearnportal.uno to explore
                    live courses and kickstart your learning journey today!
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
              <div class="max-w-sm bg-black rounded-lg shadow">
                <a href="https://life-care-lake.vercel.app/">
                  <img class="rounded-t-lg" src={lifecare} alt="" />
                </a>
                <div class="p-5 bg-black">
                  <a href="https://life-care-lake.vercel.app/">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
                      {" "}
                      LifeCare
                    </h5>
                  </a>
                  <p class="mb-3 font-normal text-white">
                    LifeCare is a holistic medical health platform dedicated to
                    enhancing well-being through expert advice, informative
                    resources, and community support. Our mission is to empower
                    individuals to take charge of their health and make informed
                    decisions for a healthier life. Join us for guidance on
                    various health topics and personalized care.
                  </p>
                  <a
                    href="https://life-care-lake.vercel.app/"
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
              <div class="max-w-sm bg-black rounded-lg shadow">
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
              <div class="max-w-sm bg-black rounded-lg shadow">
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

              <div class="max-w-sm bg-black rounded-lg shadow">
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
              <div class="max-w-sm bg-black rounded-lg shadow">
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

              <div class="max-w-sm bg-black rounded-lg shadow">
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
