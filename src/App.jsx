import NavBar from "./components/NavBar";
import BackGround from "./components/Background";
import MainContent from "./components/main-content";
import Skill from "./components/Skill";
import Project from "./components/project";
import About from "./components/about";
import Contact from "./components/contact";
function App() {
  return (
    <>
      <BackGround />
      <NavBar />
      <MainContent />
      <Skill />
      <Project />
      <About  />
      <Contact />
    </>
  );
}

export default App;
