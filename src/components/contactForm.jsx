import Button from "./UI/buttons";
import Input from "./UI/input";

const ContactForm = ({ section }) => {
  return (
    <form className="flex">
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
