import Shuffle from "../assets/Sheffle";
import GooeyNav from "../assets/GooeyNav/GooeyNav";

const NavBar = () => {
  const items = [
    { label: "Home", href: "#" },
    { label: "Projects", href: "#project" },
    { label: "About", href: "#" },
    { label: "Contact", href: "#" },
  ];
  return (
    <div className="grid grid-cols-2 items-center pt-10">
      <ShuffleWord />
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

const ShuffleWord = () => (
  <Shuffle
    text="Portfolio"
    tag="h5"
    className="font-['Press Start 2P', system-ui] text-white"
    shuffleDirection="right"
    duration={0.35}
    animationMode="evenodd"
    shuffleTimes={1}
    ease="power3.out"
    stagger={0.03}
    threshold={0.1}
    triggerOnce={true}
    triggerOnHover={true}
    respectReducedMotion={true}
  />
);
export default NavBar;
