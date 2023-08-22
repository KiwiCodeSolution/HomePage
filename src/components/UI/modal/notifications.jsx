import PropTypes from "prop-types";

const notificationsStyle = {
  error: "",
  info: "",
  warning: "",
  success: "",
};

const Notifications = ({ children, status }) => {
  return (
    <div
      className={`flex justify-between absolute top-1/2 left-2/4 -translate-x-1/2 -translate-y-1/2 z-50 w-[300px] h-full md:w-[650px] xl:w-[800px] bg-bg-main rounded-[16px] p-10 ${notificationsStyle[status]}`}
    >
      <p>{children}</p>
    </div>
  );
};

Notifications.propTypes = {
  children: PropTypes.node.isRequired,
  status: PropTypes.oneOf(["error", "info", "warning", "success"]).isRequired,
};

export default Notifications;
