import ScrollFloat from "../assets/ScrollFloat/ScrollFloat";
import TiltedCard from "../assets/Title-Card/Title-Card";
import "../assets/Title-Card/ TiltedCards.css";
const Project = () => {
  return (
    <div className="grid grid-cols-3 w-[80%] mx-auto gap-y-10">
      <TiltedCards />
      <TiltedCards />
      <TiltedCards />
      <TiltedCards />
    </div>
  );
};
const TiltedCards = () => {
  return (
    <div>
      <TiltedCard
        imageSrc="/assets/photo/20250823_084014.jpg"
        altText="Zelalem Legesse"
        captionText="Zelalem"
        containerHeight="300px"
        containerWidth="270px"
        imageHeight="300px"
        imageWidth="270px"
        rotateAmplitude={12}
        scaleOnHover={1.2}
        showMobileWarning={false}
        showTooltip={true}
        displayOverlayContent={true}
        overlayContent={
          <>
            <div className="grid grid-rows-2 content-between h-[290px]">
              <p className="tilted-card-demo-text">Kendrick Lamar - GNX</p>
              <div className="flex justify-evenly gap-5 self-end ">
                <a href=""><i className="bi bi-github text-2xl text-white"></i></a>
                <a href=""><i className="bi bi-box-arrow-up-right text-2xl text-white"></i></a>
              </div>
            </div>
          </>
        }
      />
    </div>
  );
};

export default Project;
