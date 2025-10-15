import TextType from "../assets/Text-Type";
import SplitText from "../assets/SplitText";
import ProfileCard from "../assets/Profile-card/ProfileCard";


const MainContent = () => {
  return (
    <div>
      <div className="grid grid-cols-2 min-h-[400px] max-md:grid-cols-1">
        <div className="grid grid-cols-1 place-content-center gap-6 w-[80%] mx-auto">
          <TextTyping />
          <SplitTexting />
          
        </div>
        <div className="flex justify-self-center items-center">
         <Profile />
        </div>
      </div>
    </div>
  );
};

const TextTyping = () => {
  return (
    <TextType
      text={[
        "Am Zelalem Legesse",
        "I am FullStack Developer",
        "Am Web Developer",
      ]}
      className="text-white text-3xl font-ubuntu font-bold "
      typingSpeed={75}
      pauseDuration={1500}
      showCursor={true}
      cursorCharacter="_"
      cursorClassName="text-white"
    />
  );
};

const SplitTexting = () => {
  return (
    <SplitText
      text="Hey, I’m Uranus Destroyer, a Full Stack Web Developer who builds fast, clean, and modern websites that actually work. I turn ideas into smooth digital experiences — from the front-end beauty to the back-end brains.
            I love clean code, smart design, and a good challenge (plus a bit of coffee doesn’t hurt ☕).  Let’s turn your idea into something awesome!"
      className="text-white font-semibold text-center indent-.5"
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
  );
};

const  Profile = ()=>{
  return(
    <div className="">
    <ProfileCard
  name="Zelalem Legesse"
  title="Full Stack Developer"
  handle="javicodes"
  status="Online"
  contactText="Contact Me"
  iconUrl="/src/assets/photo/20250823_084014-Photoroom.png"
  avatarUrl="/src/assets/photo/20250823_084014-Photoroom.png"
  showUserInfo={false}
  enableTilt={true}
  enableMobileTilt={false}
  onContactClick={() => console.log('Contact clicked')}
/>
</div>
  )
}
export default MainContent;
 