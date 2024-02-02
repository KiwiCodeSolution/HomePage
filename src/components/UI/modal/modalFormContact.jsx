import PropTypes from "prop-types";
import ContactForm from "../../contactForm";
import { Close } from "../../../icons/iconComponent";
import Button from "../buttons";
import { useTranslation } from "react-i18next";

const ModalFormContact = ({ modalClass, clickFn }) => {
  const { t } = useTranslation();
  return (
    <div className="w-[300px] h-[615px] md:w-[650px] xl:w-[800px] xl:h-[540px] bg-modal bg-no-repeat bg-left bg-bg-main rounded-[16px] shadow-modal">
      <div className="w-full h-full md:bg-modalGirl bg-no-repeat bg-left-bottom">
        <Button type="button" btnStyle="closeBtn" clickFn={clickFn} aria={"close button"}>
          <Close />
        </Button>
        <div className="w-full md:w-[340px] xl:w-[480px] h-full ml-auto bg-bg-main rounded-[16px] p-4 xl:p-10 flex flex-col gap-y-4 xl:gap-y-6">
          <h3 className="text-2xl xl:text-4xl text-white font-medium mt-[120px] xl:mt-0">{t(`title.modal`)}</h3>
          <p className="text-base xl:text-lg text-white opacity-[.6]">{t(`subtitle.modal`)}</p>
          <ContactForm section="modal" formFn={clickFn} />
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
