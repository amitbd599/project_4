import React from "react";
import { useSelector } from "react-redux";
import { PropagateLoader } from "react-spinners";
const Loader = () => {
  const loader = useSelector((state) => state.LoaderSetting.loader);
  return (
    <div className={"Loader " + loader}>
      <div className="loader__body">
        <PropagateLoader
          className="ringLoader"
          color="#FF5600"
          cssOverride={{}}
          size={30}
          loading
          speedMultiplier={1}
        />
      </div>
    </div>
  );
};

export default Loader;
