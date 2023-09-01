import PropTypes from "prop-types";
// import env from "react-dotenv";
import { useState } from "react";

import Button from "./UI/buttons";
import Input from "./UI/input";
import { useTranslation } from "react-i18next";
import Notification from "./notification";

const ContactForm = ({ section, formFn }) => {
  const { t } = useTranslation();
  const handleClick = () => (formFn ? formFn() : null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [showNotificationSucess, setShowNotificationSucess] = useState(false);
  const [showNotificationError, setShowNotificationError] = useState(false);

  const { REACT_APP_TOKEN: TOKEN, REACT_APP_CHAT_ID: CHAT_ID } = process.env;

  const API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  const formStyle =
    section === "modal"
      ? "max-w-[285px] flex flex-col gap-y-6"
      : "w-[280px] md:w-full xl:w-[896px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-4 md:gap-y-6 xl:gap-y-0 md:gap-x-4 xl:gap-x-6 rounded-[8px] border-[1px] border-bg-green border-opacity-[.4] py-4 px-6 items-end xl:ml-auto relative";

  const btnFormStyle = section !== "modal" ? "absolute top-[215px] left-0 md:static" : "";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (section === "modal" && (name === "" || email === "")) {
      setError(true);
      return;
    }
    if (section === "consultation" && (phone === "" || email === "")) {
      setError(true);
      return;
    }

    const message =
      section === "modal"
        ? `<b>New contact from Landing!</b> %0A<b>Phone:</b> ${name} %0A<b>Email:</b> ${email}`
        : `<b>New contact from Landing!</b> %0A<b>Phone:</b> ${phone} %0A<b>Email:</b> ${email}`;

    fetch(`${API}?chat_id=${CHAT_ID}&text=${message}&parse_mode=html`)
      .then((res) => {
        setShowNotificationSucess(true);
        setTimeout(() => {
          resetForm();
          handleClick();
          setShowNotificationSucess(false);
        }, 3000);
      })
      .catch((error) => {
        setShowNotificationError(true);

        setTimeout(() => {
          setShowNotificationError(false);
        }, 3000);
      });
  };

  function resetForm() {
    setName("");
    setPhone("");
    setEmail("");
    setError(false);
  }

  return (
    <>
      <form className={`${formStyle}`} onSubmit={handleSubmit} id="form">
        {section === "modal" ? (
          <Input
            type={"text"}
            name={t(`input.name`)}
            placeholder={t(`input.placeholder_name`)}
            changeFn={setName}
            value={name}
            error={error}
          />
        ) : (
          <Input
            type={"text"}
            name={t(`input.phone`)}
            placeholder={t(`input.placeholder_phone`)}
            changeFn={setPhone}
            value={phone}
            error={error}
          />
        )}
        <Input
          type={"email"}
          name={t(`input.email`)}
          placeholder={t(`input.placeholder_email`)}
          changeFn={setEmail}
          value={email}
          error={error}
        />

        <div className="md:col-span-2 xl:col-span-1 mx-auto">
          {section === "modal" ? (
            <Button type="button" btnStyle="contactBtn" btnClass="mt-4" aria={"Contact us"}>
              {t(`buttons.1`)}
            </Button>
          ) : (
            <Button type="submit" btnStyle="startedBtn" aria={"Get Started"} btnClass={btnFormStyle}>
              {t(`buttons.0`)}
            </Button>
          )}
        </div>
      </form>
      {showNotificationSucess && (
        <Notification
          type={"success"}
          text="Contacts sent! We will contact you shortly!"
          clickFn={() => setShowNotificationSucess(!showNotificationSucess)}
        />
      )}
      {showNotificationError && (
        <Notification
          type={"error"}
          text="Oops, something happened! Please try again!"
          clickFn={() => setShowNotificationError(!showNotificationError)}
        />
      )}
    </>
  );
};

ContactForm.propTypes = {
  section: PropTypes.string,
  formFn: PropTypes.func,
};

export default ContactForm;
