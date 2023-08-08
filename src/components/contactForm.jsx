import Button from "./UI/buttons";
import Input from "./UI/input";

const ContactForm = ({ section }) => {
  const formStyle =
    section === "modal"
      ? "lex flex-col gap-y-6"
      : "flex gap-x-4 rounded-[8px] border-[1px] border-bg-green border-opacity-[.4] py-4 px-6 items-end gap-x-6 ml-auto";

  return (
    <form className={`${formStyle} w-[896px]`}>
      <Input type={"text"} name={"Name"} placeholder={"Your name"} />
      {section === "modal" ? (
        <Input type={"email"} name={"Email"} placeholder={"Your email"} />
      ) : (
        <Input type={"text"} name={"Phone"} placeholder={"Your phone"} />
      )}

      <Button type="submit" btnStyle="startedBtn">
        Get Started
      </Button>
    </form>
  );
};

export default ContactForm;
