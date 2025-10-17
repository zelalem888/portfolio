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
      <div className="grid grid-cols-[3fr_2fr] max-lg:grid-cols-1 text-white">
        <div>
          <div className="grid grid-cols-2 max-lg:grid-cols-[2fr_3fr]">
            <div className="grid grid-cols-1 justify-center items-center">
              <div className="grid grid-cols-2 gap-2 items-center">
                <a className="grid justify-self-end icons" href="https://www.linkedin.com/in/zelalemlegesse/">
                  <i className="bi bi-linkedin text-3xl icons-linkedin"></i>
                </a>
                <span className="iconsName max-lg:text-sm">LinkedIn</span>
              </div>
              <div className="grid grid-cols-2 gap-2 items-center">
                <a className="grid justify-self-end" href="https://github.com/zelalem888/">
                  <i className="bi bi-github text-3xl icons-github"></i>
                </a>
                <span className="max-lg:text-sm">Github</span>
              </div>
              <div className="grid grid-cols-2 gap-2 items-center">
                <a className="grid justify-self-end" href="https://wa.me/qr/X64XOVQNDMBID1">
                  <i className="bi bi-whatsapp text-3xl icons-whatsapp"></i>
                </a>
                <span className="max-lg:text-sm">Whatsapp</span>
              </div>
              <div className="grid grid-cols-2 gap-2 items-center">
                <a className="grid justify-self-end" href="https://t.me/Zlelew">
                  <i className="bi bi-telegram text-3xl icons-telegram"></i>
                </a>
                <span className="max-lg:text-sm">Telegram</span>
              </div>
            </div>


            <div className="grid justify-start">
              <p className="text-center text-2xl max-lg:text-xl">UpWork</p>
              <img
                className="h-[12rem] max-lg:h-[10rem] rounded-2xl"
                src="/public/assets/photo/qr-code.png"
              />
              <p className="text-center text-2xl max-lg:text-xl">Scan Me!</p>
            </div>
          </div>
        </div>


        <form ref={form} onSubmit={sendEmail}>
          <div className="grid gap-4 mt-6 max-lg:mx-auto w-[100%]">
            <div className="grid grid-cols-[1fr_6fr] max-lg:grid-cols-1  justify-items-start max-lg:justify-items-center">
              <label className="max-lg:w-[80%] max-lg:mx-auto">Name: </label>
              <input
                className="outline-2 outline-gray-400 rounded-sm py-2 w-[60%] max-lg:w-[80%]  nameInput"
                type="text"
                name="user_name"
                required
              />
            </div>
            <div className="grid grid-cols-[1fr_6fr] max-lg:grid-cols-1  justify-items-start max-lg:justify-items-center">
              <label className="max-lg:w-[80%] max-lg:mx-auto">Email: </label>
              <input
                className="outline-2 outline-gray-400 rounded-sm py-2 w-[60%] max-lg:w-[80%] emailInput"
                type="email"
                name="user_email"
                required
              />
            </div>
            <div className="grid grid-cols-[1fr_6fr] max-lg:grid-cols-1  justify-items-start max-lg:justify-items-center">
              <label className="max-lg:w-[80%] max-lg:mx-auto">Message: </label>
              <textarea
                className="outline-2 outline-gray-400 rounded-sm py-2 w-[60%] max-lg:w-[80%] messageInput"
                name="message"
                required
              />
            </div>

            <input
              className="max-lg:w-[80%] max-lg:mx-auto w-[50%] bg-blue-700/50 text-center font-bold border-1 border-gray-900 rounded-md py-2 btn"
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
