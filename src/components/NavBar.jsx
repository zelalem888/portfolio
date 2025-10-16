import GooeyNav from "../assets/GooeyNav/GooeyNav";
import TrueFocus from "../assets/True-focus";

const NavBar = () => {
  const items = [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#project" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#" },
  ];
  return (
    <div className="grid grid-cols-2 items-center pt-10 max-md:grid-cols-1" id="home">
      <TrueFocuses />
      <div className="flex justify-evenly">
        <GooeyNav
          items={items}
          particleCount={15}
          particleDistances={[90, 10]}
          particleR={100}
          initialActiveIndex={0}
          animationTime={600}
          timeVariance={300}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        />
      </div>
    </div>
  );
};

const TrueFocuses = () => {
  return (
    <div className="text-white font-[ubuntu]">
      <TrueFocus
        sentence="MY PORTFOLIO"
        manualMode={false}
        blurAmount={5}
        borderColor="red"
        animationDuration={0.7}
        pauseBetweenAnimations={1.4}
      />
    </div>
  );
};

export default NavBar;
