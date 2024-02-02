import { ThreeCircles } from "react-loader-spinner";
import Overlay from "./modal/overlay";

const Loader = () => {
  return (
    <Overlay>
      <ThreeCircles
        visible={true}
        height="100"
        width="100"
        color="#38ef7d"
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </Overlay>
  );
};

export default Loader;
