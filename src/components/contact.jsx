import GradientText from "../assets/Gradient-text/Gradient-Text";
const Contact = () => {
  return (
    <div>
      <div className="mt-10">
        <ContactTitle />
      </div>
      <div></div>
    </div>
  );
};

const ContactTitle = () => {
  return (
    <GradientText
      colors={["#ffffff", "#d9faff", "#a0e7ff", "#d9faff", "#ffffff"]}
      animationSpeed={8}
      showBorder={false}
      className="text-5xl font-bold"
    >
      Contact
    </GradientText>
  );
};

const Details = () => {
  return (
    <div>
      <div>
        
      </div>
    </div>
  );
};
export default Contact;
