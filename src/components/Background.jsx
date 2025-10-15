import DotGrid from "../assets/Dot-grid";

const BackGround = () => {
  return (
    <div className="fixed inset-0 -z-10 w-full h-screen">
      <DotGrid
        dotSize={5}
        gap={15}
        baseColor="#030b30"
        activeColor="#5227FF"
        proximity={120}
        shockRadius={250}
        shockStrength={5}
        resistance={750}
        returnDuration={1.5}
      />
    </div>
  );
};

export default BackGround;
