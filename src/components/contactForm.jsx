import PropTypes from "prop-types";
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";

import Button from "./UI/buttons";
import Input from "./UI/input";
import { useTranslation } from "react-i18next";
import Notification from "./notification";
import useScrollBlock from "../hooks/useScrollBlock";
import Loader from "./UI/loader";

const ContactForm = ({ section, formFn }) => {
  const { t } = useTranslation();
  const { control, handleSubmit, reset } = useForm();
  const [blockScroll, allowScroll] = useScrollBlock();
  const [isLoading, setIsLoading] = useState(false);
  const [showNotificationSucess, setShowNotificationSucess] = useState(false);
  const [showNotificationError, setShowNotificationError] = useState(false);

  const { REACT_APP_TOKEN: TOKEN, REACT_APP_CHAT_ID: CHAT_ID } = process.env;

  const API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  const formStyle =
    section === "modal"
      ? "max-w-[285px] flex flex-col gap-y-6"
      : "w-[280px] md:w-full xl:w-[896px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-4 md:gap-y-6 xl:gap-y-0 md:gap-x-4 xl:gap-x-6 rounded-[8px] border-[1px] border-bg-green border-opacity-[.4] py-4 px-6 items-end xl:ml-auto relative bg-bg-grey";

  const btnFormStyle = section !== "modal" ? "absolute top-[215px] left-0 md:static" : "";

  const closeSuccesNotiication = () => {
    reset();
    setShowNotificationSucess(false);

    if (section === "modal") {
      formFn();
    }
  };

  const showNotification = (type) => {
    if (type === "success") {
      setShowNotificationSucess(true);
    }
    if (type === "error") {
      setShowNotificationError(true);
    }
  };

  const hideNotification = (type) => {
    if (type === "success") {
      closeSuccesNotiication();
    }
    if (type === "error") {
      setShowNotificationError(false);
    }
  };

  const informing = (type) => {
    setIsLoading(false);
    blockScroll();
    showNotification(type);
    setTimeout(() => {
      allowScroll();
      hideNotification(type);
    }, 3000);
  };

  const onSubmit = (data) => {
    setIsLoading(true);
    const message =
      section === "modal"
        ? `<b>New contact from Landing!</b> %0A<b>Name:</b> ${data.name} %0A<b>Email:</b> ${data.email}`
        : `<b>New contact from Landing!</b> %0A<b>Phone:</b> ${data.phone} %0A<b>Email:</b> ${data.email}`;

    fetch(`${API}?chat_id=${CHAT_ID}&text=${message}&parse_mode=html`)
      .then((res) => {
        informing("success");
      })
      .catch((error) => {
        informing("error");
      });
  };

  return (
    <>
      <form className={`${formStyle}`} onSubmit={handleSubmit(onSubmit)} id="form">
        {section === "modal" ? (
          <Controller
            name={t(`input.name`)}
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                control={control}
                type={"text"}
                name={t(`input.name`)}
                placeholder={t(`input.placeholder_name`)}
              />
            )}
          />
        ) : (
          <Controller
            name={t(`input.phone`)}
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                control={control}
                type={"text"}
                name={t(`input.phone`)}
                placeholder={t(`input.placeholder_phone`)}
              />
            )}
          />
        )}
        <Controller
          name={t(`input.email`)}
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              control={control}
              type={"email"}
              name={t(`input.email`)}
              placeholder={t(`input.placeholder_email`)}
            />
          )}
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
        <Notification type={"success"} text={t(`notification.success`)} clickFn={closeSuccesNotiication} />
      )}
      {showNotificationError && (
        <Notification type={"error"} text={t(`notification.error`)} clickFn={() => setShowNotificationError(false)} />
      )}
      {isLoading && <Loader />}
    </>
  );
};

ContactForm.propTypes = {
  section: PropTypes.string,
  formFn: PropTypes.func,
};

export default ContactForm;
