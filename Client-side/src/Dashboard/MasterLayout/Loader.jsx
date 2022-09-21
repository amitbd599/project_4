import React from "react";
import { useSelector } from "react-redux";
import { HashLoader } from "react-spinners";
const Loader = () => {
  const loader = useSelector((state) => state.LoaderSetting.loader);
  return (
    <div className={"Loader " + loader}>
      <div className="loader__body">
        <HashLoader
          className="ringLoader"
          color="#17B978"
          cssOverride={{}}
          size={70}
          loading
          speedMultiplier={1}
        />
      </div>
    </div>
  );
};

export default Loader;
