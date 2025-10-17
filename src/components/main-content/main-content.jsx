import TextType from "../../assets/Text-Type";
import SplitText from "../../assets/SplitText";
import ProfileCard from "../../assets/Profile-card/ProfileCard";
import "./Main-content.css";

const MainContent = () => {
  return (
    <div>
      <div className="grid grid-cols-2 min-h-[400px] w-[70%] mx-auto max-md:grid-cols-1 max-md:w-[90%]">
        <div className="grid grid-cols-1 place-content-center gap-6">
          <TextTyping />
          <SplitTexting />
        </div>
        <div className="flex justify-self-end items-center max-md:justify-self-center-safe">
          <Profile />
        </div>
      </div>
    </div>
  );
};

const TextTyping = () => {
  return (
    <div>
      <p className="text-white text-4xl font-bold hey">Hey 👋,</p>
      <TextType
        text={[
          "Am Zelalem Legesse",
          "Am FullStack Developer",
          "Am Web Developer",
        ]}
        className="text-white text-3xl font-ubuntu font-bold mt-3 max-md:text-2xl max-md:my-3"
        typingSpeed={75}
        pauseDuration={1500}
        showCursor={true}
        cursorCharacter="_"
        cursorClassName="text-white"
      />
    </div>
  );
};

const SplitTexting = () => {
  return (
    <div className="details">
      <SplitText
        text="Full Stack Developer creating clean, fast, and functional websites.
I build smooth digital experiences from front to back — with smart design, solid code, and a love for solving problems(with a bit of coffee ☕ in the mix)."
        className="text-white font-semibold text-center indent-.5 max-md:font-normal max-md:mb-4"
        delay={20}
        duration={0.3}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="left"
        tag="p"
      />
    </div>
  );
};

const Profile = () => {
  return (
    <div className="max-md:mb-5">
      <ProfileCard
        name="Zelalem Legesse"
        title="Full Stack Developer"
        handle="Zelalem"
        status="Online"
        contactText="Contact Me"
        iconUrl="/assets/photo/20250823_084014-Photoroom.png"
        avatarUrl="/assets/photo/20250823_084014-Photoroom.png"
        showUserInfo={false}
        enableTilt={true}
        enableMobileTilt={false}
        onContactClick={() => console.log("Contact clicked")}
      />
    </div>
  );
};
export default MainContent;
