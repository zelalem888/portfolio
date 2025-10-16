import ScrollFloat from "../assets/ScrollFloat/ScrollFloat";
import TiltedCard from "../assets/Title-Card/Title-Card";
import "../assets/Title-Card/ TiltedCards.css";


const Project = () => {
  return <TiltedCards />;
};





const TiltedCards = () => {
  const ImageData = [
    {
      title: "Dizz Blog.",
      caption: "Dizz Blog.",
      altText: "Dizz Blog.",
      github: "https://github.com/zelalem888/DizzBlog.",
      link: "https://dizz-blog.vercel.app/",
      image: "/assets/photo/project/dizz.png",
    },
    {
      title: "Random Movies",
      caption: "Random Movies",
      altText: "Random Movies",
      github: "https://github.com/zelalem888/movie",
      link: "https://movie-swart-gamma.vercel.app/",
      image: "/assets/photo/project/movie.png",
    },
    {
      title: "Mortgage Calculator",
      caption: "Mortgage Calculator",
      altText: "Mortgage Calculator",
      github: "https://github.com/zelalem888/mortgage-repayment-calculator",
      link: "https://mortgage-repayment-calculator-sage-xi.vercel.app/",
      image: "/assets/photo/project/morgage.png",
    },
    {
      title: "tip Calculator",
      caption: "tip Calculator",
      altText: "tip Calculator",
      github: "https://github.com/zelalem888/tip-calculator",
      link: "https://tip-calculator-amber-eight.vercel.app/",
      image: "/assets/photo/project/tip.png",
    },
  ];

  return (
    <div className="grid grid-cols-3 w-[80%] mx-auto gap-y-10">
      {ImageData.map((item) => {
        return (
          <TiltedCard
            imageSrc={item.image}
            altText={item.altText}
            captionText={item.caption}
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
                  <p className="tilted-card-demo-text">{item.title}</p>
                  <div className="flex justify-evenly gap-5 self-end ">
                    <a href={item.github} target="_blank">
                      <i className="bi bi-github text-2xl text-white"></i>
                    </a>
                    <a href={item.link} target="_blank">
                      <i className="bi bi-box-arrow-up-right text-2xl text-white"></i>
                    </a>
                  </div>
                </div>
              </>
            }
          />
        );
      })}
    </div>
  );
};

export default Project;
