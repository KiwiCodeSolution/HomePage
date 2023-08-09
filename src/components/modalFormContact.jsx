import PropTypes from "prop-types";
import ContactForm from "./contactForm";

const ModalFormContact = ({ modalClass }) => {
  return (
    <div className="w-[800px] h-[540px] bg-modal bg-no-repeat bg-left bg-bg-main rounded-[16px] shadow-modal">
      <div className="w-full h-full bg-modalGirl bg-no-repeat bg-left-bottom">
        <div className="w-[480px] h-full ml-auto bg-bg-main rounded-[16px] p-10 flex flex-col gap-y-6">
          <h3 className="text-4xl text-white font-medium">Consultation of the area expert</h3>
          <p className="text-lg text-white opacity-[.6]">
            More than 4+ ears of experience that helps build effective process.
          </p>
          <ContactForm section="modal" />
        </div>
      </div>
    </div>
  );
};

ModalFormContact.propTypes = {
  modalClass: PropTypes.string,
};

export default ModalFormContact;
