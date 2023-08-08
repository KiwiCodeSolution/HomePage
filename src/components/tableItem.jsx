import PropTypes from "prop-types";

const TableItem = ({ element }) => {
  return (
    <li className="border-[1px] border-bg-green border-opacity-[.4] w-[433px] h-[117px] py-2 pl-4 pr-[64px]">
      <div className="flex gap-x-2 items-center mb-1">
        <p className="w-8 h-8 text-center text-2xl font-bold text-txt-green rounded-full border-[0.5px] border-bg-green border-opacity-[.4]">
          {element.id}
        </p>
        <h4 className="text-base font-bold">{element.title}</h4>
      </div>
      <p className="text-base opacity-[.6]">{element.text}</p>
    </li>
  );
};
TableItem.propTypes = {
  element: PropTypes.object.isRequired,
};
export default TableItem;
