import { hoverAnimations } from "../helpers/stylesHelpers";

const ContactList = () => {
  return (
    <ul className="flex flex-wrap gap-y-5 justify-between w-[380px]">
      <li className="flex flex-col w-fit relative overflow-hidden pb-1">
        <p className="text-2xl mb-2">Phone</p>
        <div className="flex flex-col gap-y-[7px]">
          <a href="tel:+380971718829" className={`text-base opacity-[.6] ${hoverAnimations}`}>
            +38 097 171 88 29
          </a>

          {/* <a href="tel:4805550103" className={`text-base opacity-[.6] ${hoverAnimations}`}>
            (480) 555-0103
          </a>
          */}
        </div>
      </li>
      <li className="flex flex-col w-[222px]">
        <p className="text-2xl mb-2">Adress</p>
        <address className="not-italic text-base opacity-[.6]">3891 Ranchview Dr. Richardson, California 62639</address>
      </li>
      <li className="flex flex-col w-fit relative overflow-hidden pb-1">
        <p className="text-2xl mb-2">Email</p>
        <a href="email:support@kiwicode.tech" className={`text-base opacity-[.6] ${hoverAnimations}`}>
          support@kiwicode.tech
        </a>
      </li>
    </ul>
  );
};

export default ContactList;
