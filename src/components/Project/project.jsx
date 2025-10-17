import ScrollFloat from "../../assets/ScrollFloat/ScrollFloat";
import TiltedCard from "../../assets/Title-Card/Title-Card";
import GradientText from "../../assets/Gradient-text/Gradient-Text";
import DarkVeil from "../../assets/Dark-Vail";
import Aurora from "../../assets/Aurora";
import "../../assets/Title-Card/ TiltedCards.css";
import "./project.css";

const Project = () => {
  return (
    <>
      <div className="mb-10" id="project">
        <Gradient />
      </div>
      <Projects />
    </>
  );
};

const Gradient = () => {
  return (
    <GradientText
      colors={["#ffffff", "#d9faff", "#a0e7ff", "#d9faff", "#ffffff"]}
      animationSpeed={8}
      showBorder={false}
      className="text-6xl font-bold max-md:text-3xl"
    >
      Projects
    </GradientText>
  );
};

const Projects = () => {
  return (
    <div className="flex flex-col gap-y-10">
      <div>
        <div className="relative overflow-hidden grid grid-cols-2 gap-4 max-md:gap-0 max-lg:grid-cols-1 bg-gray-900 rounded-2xl w-[70%] max-md:w-[85%] mx-auto projects">
          <div className="absolute inset-0 z-0">
            <Aurora
              colorStops={["#00F0FF", "#3A00FF", "#00FFB8"]}
              blend={0.5}
              amplitude={1.0}
              speed={0.5}
            />
          </div>
          <div className="one z-10">
            <img className="rounded-2xl project-image" src="/assets/photo/project/dizz.png" />
          </div>
          <div className="text-white two flex flex-col gap-6 max-md:gap-3">
            <p className="text-3xl text-center font-[ubuntu] font-bold">
              Dizz Blog.
            </p>
            <p className="text-lg leading-8 font-[ubuntu] w-[70%] mx-auto max-md:w-[100%] max-md:text-md project-description">
              A NextJS-powered blog website with dynamic post rendering, using a
              JSON-based backend (or API) to manage and display articles with
              routing and responsive design.
            </p>
            <p className="text-center text-3xl font-bold flex justify-evenly max-md:text-lg max-md:grid max-md:grid-cols-2">
              <span>NextJS</span> <span>MongoDB</span>
              <span>NodeJS</span>
            </p>
            <p className="text-center text-3xl font-bold flex gap-10 justify-center">
              <a href="https://github.com/zelalem888/DizzBlog." target="_blank">
                <i className="bi bi-github text-2xl text-white "></i>
              </a>{" "}
              <a href="https://dizz-blog.vercel.app/" target="_blank">
                <i className="bi bi-box-arrow-up-right text-2xl text-white "></i>
              </a>
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="relative overflow-hidden grid grid-cols-2 gap-4 max-lg:grid-cols-1   bg-gray-900 rounded-2xl w-[70%] max-md:w-[85%] mx-auto projects">
          <div className="absolute inset-0 z-0">
            <Aurora
              colorStops={["#00F0FF", "#3A00FF", "#00FFB8"]}
              blend={0.5}
              amplitude={1.0}
              speed={0.5}
            />
          </div>
          <div className="text-white two flex flex-col gap-6 max-md:gap-3 z-10 order-1 max-md:order-2">
            <p className="text-3xl text-center font-[ubuntu] font-bold">
              Random Movies
            </p>
            <p className="text-lg leading-8 font-[ubuntu] w-[70%] mx-auto max-md:w-[100%] max-md:text-md project-description">
              A React-based movie website that dynamically fetches and displays
              movie data from the TMDB API with search and detail features.
            </p>
            <p className="text-center text-3xl font-bold flex justify-evenly max-md:text-lg  max-md:grid max-md:grid-cols-2">
              <span>React</span> <span>Tailwind</span> <span>NodeJS</span>
            </p>
            <p className="text-center text-3xl font-bold flex gap-10 justify-center">
              <a href="https://github.com/zelalem888/movie" target="_blank">
                <i className="bi bi-github text-2xl text-white "></i>
              </a>{" "}
              <a href="https://movie-swart-gamma.vercel.app/" target="_blank">
                <i className="bi bi-box-arrow-up-right text-2xl text-white "></i>
              </a>
            </p>
          </div>
          <div className="one order-2 max-md:order-1">
            <img
              className="rounded-2xl project-image"
              src="/assets/photo/project/movie.png"
            />
          </div>
        </div>
      </div>

      <div>
        <div className="relative overflow-hidden grid grid-cols-2 gap-4 max-lg:grid-cols-1 bg-gray-900 rounded-2xl w-[70%] max-md:w-[85%] mx-auto projects">
          <div className="absolute inset-0 z-0">
            <Aurora
              colorStops={["#00F0FF", "#3A00FF", "#00FFB8"]}
              blend={0.5}
              amplitude={1.0}
              speed={0.5}
            />
          </div>
          <div className="one z-10">
            <img
              className="rounded-2xl project-image"
              src="/assets/photo/project/morgage.png"
            />
          </div>
          <div className="text-white two flex flex-col gap-6 max-md:gap-3">
            <p className="text-3xl text-center font-[ubuntu] font-bold">
              Mortgage Calculator
            </p>
            <p className="text-lg leading-8 font-[ubuntu] w-[70%] mx-auto max-md:w-[100%] max-md:text-md project-description">
              This mortgage calculator estimates your monthly payments based on
              loan amount, interest rate, term, and down payment.
            </p>
            <p className="text-center text-3xl font-bold flex justify-evenly max-md:text-lg  max-md:grid max-md:grid-cols-2">
              <span>HTML</span> <span>CSS</span> <span>JAVASCRIPT</span>
            </p>
            <p className="text-center text-3xl font-bold flex gap-10 justify-center">
              <a
                href="https://github.com/zelalem888/mortgage-repayment-calculator"
                target="_blank"
              >
                <i className="bi bi-github text-2xl text-white "></i>
              </a>{" "}
              <a
                href="https://mortgage-repayment-calculator-sage-xi.vercel.app/"
                target="_blank"
              >
                <i className="bi bi-box-arrow-up-right text-2xl text-white "></i>
              </a>
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="relative overflow-hidden grid grid-cols-2 gap-4 max-lg:grid-cols-1  bg-gray-900 rounded-2xl w-[70%] max-md:w-[85%] mx-auto projects">
          <div className="absolute inset-0 z-0">
            <Aurora
             colorStops={["#00F0FF", "#3A00FF", "#00FFB8"]}
              blend={0.5}
              amplitude={1.0}
              speed={0.5}
            />
          </div>
          <div className="text-white two flex flex-col gap-6 max-md:gap-3 z-10 order-1 max-md:order-2">
            <p className="text-3xl text-center font-[ubuntu] font-bold">
              Tip Calculator
            </p>
            <p className="text-lg leading-8 font-[ubuntu] w-[70%] mx-auto max-md:w-[100%] max-md:text-md project-description">
              A simple and responsive tip calculator built with HTML, CSS, and
              vanilla JavaScript that calculates tip and total per person based
              on user input.
            </p>
            <p className="text-center text-3xl font-bold flex justify-evenly max-md:text-lg  max-md:grid max-md:grid-cols-2">
              <span>HTML</span> <span>CSS</span> <span>JAVASCRIPT</span>
            </p>
            <p className="text-center text-3xl font-bold flex gap-10 justify-center">
              <a
                href="https://github.com/zelalem888/tip-calculator"
                target="_blank"
              >
                <i className="bi bi-github text-2xl text-white "></i>
              </a>{" "}
              <a
                href="https://tip-calculator-amber-eight.vercel.app/"
                target="_blank"
              >
                <i className="bi bi-box-arrow-up-right text-2xl text-white "></i>
              </a>
            </p>
          </div>
          <div className="one order-2 max-md:order-1">
            <img className="rounded-2xl project-image" src="/assets/photo/project/tip.png" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Project;
