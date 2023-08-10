import PropTypes from "prop-types";
import ContactForm from "../../contactForm";
import { Close } from "../../../icons/iconComponent";
import Button from "../buttons";

const ModalFormContact = ({ modalClass, clickFn }) => {
  return (
    <div className="flex justify-between absolute top-1/2 left-2/4 -translate-x-1/2 -translate-y-1/2 z-50 rounded-[16px]">
      <div className="w-[300px] h-[615px] xl:w-[800px] xl:h-[540px] bg-modal bg-no-repeat bg-left bg-bg-main rounded-[16px] shadow-modal">
        <div className="w-full h-full md:bg-modalGirl bg-no-repeat bg-left-bottom">
          <Button type="button" btnStyle="closeBtn" clickFn={clickFn} aria={"close button"}>
            <Close />
          </Button>
          <div className="w-full xl:w-[480px] h-full ml-auto bg-bg-main rounded-[16px] p-4 xl:p-10 flex flex-col gap-y-4 xl:gap-y-6">
            <h3 className="text-2xl xl:text-4xl text-white font-medium mt-[120px] xl:mt-0">
              Consultation of the area expert
            </h3>
            <p className="text-base xl:text-lg text-white opacity-[.6]">
              More than 4+ ears of experience that helps build effective process.
            </p>
            <ContactForm section="modal" />
          </div>
        </div>
      </div>
    </div>
  );
};

ModalFormContact.propTypes = {
  modalClass: PropTypes.string,
  clickFn: PropTypes.func,
};

export default ModalFormContact;
