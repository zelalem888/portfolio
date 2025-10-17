import GradientText from "../../assets/Gradient-text/Gradient-Text";
import "./about.css";

const About = () => {
  return (
    <>
      <div className="mt-10" id="about">
        <Gradient />
      </div>
      <Folder />
    </>
  );
};

const Gradient = () => {
  return (
    <GradientText
      colors={["#ffffff", "#d9faff", "#a0e7ff", "#d9faff", "#ffffff"]}
      animationSpeed={8}
      showBorder={false}
      className="text-5xl font-bold text-center max-md:text-3xl"
    >
      Wanna Know More about Me.
    </GradientText>
  );
};

const Folder = () => {
  return (
    <div className="mt-4">
      <div className="grid grid-cols-3 justify-items-center max-md:grid-cols-1">
        <div className="grid grid-cols-1 gap-4 justify-items-center">
          <p className="text-white text-2xl font-bold mb-4"> Resume</p>
          <img
            className="cv"
            src="/assets/photo/Full Stack Web Developer Resume Template [free download].jpeg"
            style={{ height: "250px" }}
          />
          <a className="cv-link">
            {" "}
            <i className="bi bi-download text-3xl bg-cyan-300 px-2 py-1 rounded-lg"></i>
          </a>
        </div>
        <div className="grid grid-cols-1 gap-4 justify-items-center">
          <p className="text-white text-2xl font-bold mb-4"> CV</p>
          <img
            className="cv"
            src="/assets/photo/Full Stack Web Developer Resume Template [free download].jpeg"
            style={{ height: "250px" }}
          />
          <a className="cv-link">
            {" "}
            <i className="bi bi-download text-3xl bg-cyan-300 px-2 py-1 rounded-lg"></i>
          </a>
        </div>
        <div className="grid grid-cols-1 gap-4 justify-items-center">
          <p className="text-white text-2xl font-bold mb-4"> Certificate</p>
          <img
            className="cv"
            src="/assets/photo/Full Stack Web Developer Resume Template [free download].jpeg"
            style={{ height: "250px" }}
          />
          <a className="cv-link">
            {" "}
            <i className="bi bi-download text-3xl bg-cyan-300 px-2 py-1 rounded-lg"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
