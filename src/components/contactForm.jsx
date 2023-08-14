import PropTypes from "prop-types";
import env from "react-dotenv";
import { useState } from "react";

import Button from "./UI/buttons";
import Input from "./UI/input";

const ContactForm = ({ section, formFn }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const formStyle =
    section === "modal"
      ? "max-w-[285px] flex flex-col gap-y-6"
      : "w-[335px] md:w-full xl:w-[896px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-4 md:gap-y-6 xl:gap-y-0 md:gap-x-4 xl:gap-x-6 rounded-[8px] border-[1px] border-bg-green border-opacity-[.4] py-4 px-6 items-end xl:ml-auto relative";

  const btnFormStyle = section !== "modal" ? "absolute top-[215px] left-0 md:static" : "";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (section === "modal" && (name === "" || email === "")) {
      alert("OOOPS!");
    }
    if (section === "consultation" && (name === "" || phone === "")) {
      alert("OOOPS! ---- 2 ");
    }
    resetForm();
    formFn();
  };

  function resetForm() {
    setName("");
    setPhone("");
    setEmail("");
  }

  const { React_App_TOKEN: TOKEN, React_App_CHAT_ID: CHAT_ID } = env;
  console.log(TOKEN, CHAT_ID);
  const API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  return (
    <form className={`${formStyle}`} onSubmit={handleSubmit}>
      {section === "modal" ? (
        <Input type={"text"} name={"Name"} placeholder={"Your name"} changeFn={setName} value={name} />
      ) : (
        <Input type={"text"} name={"Phone"} placeholder={"Your phone"} changeFn={setPhone} value={phone} />
      )}
      <Input type={"email"} name={"Email"} placeholder={"Your email"} changeFn={setEmail} value={email} />

      <div className="md:col-span-2 mx-auto">
        {section === "modal" ? (
          <Button type="button" btnStyle="contactBtn" btnClass="mt-4" aria={"Contact us"}>
            Contact us
          </Button>
        ) : (
          <Button type="submit" btnStyle="startedBtn" aria={"Get Started"} btnClass={btnFormStyle}>
            Get Started
          </Button>
        )}
      </div>
    </form>
  );
};

ContactForm.propTypes = {
  section: PropTypes.string,
  formFn: PropTypes.func,
};

export default ContactForm;
