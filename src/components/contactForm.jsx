import Button from "./UI/buttons";
import Input from "./UI/input";

const ContactForm = ({ section }) => {
  const formStyle =
    section === "modal"
      ? "w-[285px] flex flex-col gap-y-6"
      : "w-[896px] flex gap-x-4 rounded-[8px] border-[1px] border-bg-green border-opacity-[.4] py-4 px-6 items-end gap-x-6 ml-auto";

  return (
    <form className={`${formStyle}`}>
      <Input type={"text"} name={"Name"} placeholder={"Your name"} />
      {section === "modal" ? (
        <Input type={"email"} name={"Email"} placeholder={"Your email"} />
      ) : (
        <Input type={"text"} name={"Phone"} placeholder={"Your phone"} />
      )}
      {section === "modal" ? (
        <Button type="submit" btnStyle="contactBtn" btnClass="mt-4" aria={"Contact us"}>
          Contact us
        </Button>
      ) : (
        <Button type="submit" btnStyle="startedBtn" aria={"Get Started"}>
          Get Started
        </Button>
      )}
    </form>
  );
};

export default ContactForm;
