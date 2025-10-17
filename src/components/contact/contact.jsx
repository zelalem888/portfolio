import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import GradientText from "../../assets/Gradient-text/Gradient-Text";
import "./style.css";
const Contact = () => {
  return (
    <div>
      <div className="mt-10" id="contact">
        <ContactTitle />
      </div>
      <div></div>
    </div>
  );
};

const ContactTitle = () => {
  return (
    <div className="bg-gray-900/80 py-8 box">
      <GradientText
        colors={["#ffffff", "#d9faff", "#a0e7ff", "#d9faff", "#ffffff"]}
        animationSpeed={8}
        showBorder={false}
        className="text-5xl font-bold"
      >
        Contact
      </GradientText>
      <div>
        <Details />
      </div>
    </div>
  );
};

const Details = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("default_service", "template_jf1hd4v", form.current, {
        publicKey: "mWE79mxrIXH8ilM-0",
      })
      .then(
        () => {
          console.log("success!");
          document.querySelector(".nameInput").value = "";
          document.querySelector(".emailInput").value = "";
          document.querySelector(".messageInput").value = "";
        },
        (error) => {
          console.log("error", error.text);
        }
      );
  };
  return (
    <div className="">
      <div className="grid grid-cols-2 max-lg:grid-cols-1 text-white">
        <div></div>
        <form ref={form} onSubmit={sendEmail}>
          <div className="grid gap-4 mt-6 justify-items-center">
            <div className="flex gap-9">
              <label>Name: </label>
              <input
                className="outline-2 outline-gray-400 rounded-sm py-2 nameInput"
                type="text"
                name="user_name"
                required
              />
            </div>
            <div className="flex gap-10">
              <label>Email: </label>
              <input
                className="outline-2 outline-gray-400 rounded-sm py-2 emailInput"
                type="email"
                name="user_email"
                required
              />
            </div>
            <div className="flex gap-4">
              <label>Message: </label>
              <textarea
                className="outline-2 outline-gray-400 rounded-sm py-2 messageInput"
                name="message"
                required
              />
            </div>

            <input
              className="w-[45%] bg-blue-700/50 text-center font-bold border-1 border-gray-900 rounded-md py-2 btn"
              type="submit"
              value="send"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
export default Contact;
