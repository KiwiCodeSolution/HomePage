import Button from "./UI/buttons";
import Input from "./UI/input";

const ContactForm = ({ section }) => {
  const formStyle =
    section === "modal"
      ? "max-w-[285px] flex flex-col gap-y-6"
      : "w-[335px] xl:w-[896px] flex flex-col md:flex-row gap-y-4 md:gap-y-0 md:gap-x-4 rounded-[8px] border-[1px] border-bg-green border-opacity-[.4] py-4 px-6 items-end gap-x-6 ml-auto relative";

  const btnFormStyle = section !== "modal" ? "absolute top-[215px] left-0 md:static" : "";

  return (
    <form className={`${formStyle}`}>
      {section === "modal" ? (
        <Input type={"text"} name={"Name"} placeholder={"Your name"} />
      ) : (
        <Input type={"text"} name={"Phone"} placeholder={"Your phone"} />
      )}
      <Input type={"email"} name={"Email"} placeholder={"Your email"} />

      {section === "modal" ? (
        <Button type="submit" btnStyle="contactBtn" btnClass="mt-4" aria={"Contact us"}>
          Contact us
        </Button>
      ) : (
        <Button type="submit" btnStyle="startedBtn" aria={"Get Started"} btnClass={btnFormStyle}>
          Get Started
        </Button>
      )}
    </form>
  );
};

export default ContactForm;
