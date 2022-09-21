import React from "react";
import TopBarProgress from "react-topbar-progress-indicator";
const FullScreenLoader = () => {
  TopBarProgress.config({
    barColors: {
      0: "#FF5700",
      "1.0": "#FF5700",
    },
    shadowBlur: 5,
  });
  return (
    <div>
      <TopBarProgress />
    </div>
  );
};

export default FullScreenLoader;
