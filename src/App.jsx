import NavBar from "./components/NavBar";
import BackGround from "./components/Background";
import MainContent from "./components/main-content/main-content";
import Skill from "./components/Skill";
import Project from "./components/Project/project";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Scroll from "./components/scroll";
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
      <Scroll />
    </>
  );
}

export default App;
