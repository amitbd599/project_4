const imgScript = () => {
  const logoBlack = (
    <img src="/assets/images/logo/LogoBlack.png" alt="" />
  );
  const logoLight = (
    <img src="/assets/images/logo/LogoLight.png" alt="" />
  );
  const aboutUsImg = (
    <img
      className="img-fluid"
      src="/assets/images/aboutUS/aboutUs_1.png"
      alt=""
    />
  );
  const aboutUsImg_2 = (
    <img
      className="img-fluid"
      src="/assets/images/aboutUS/aboutUs_2.png"
      alt=""
    />
  );

  const featureImg = (
    <img
      className="img-fluid"
      src="/assets/images/featureHouse/serviceWomen-1.png"
      alt=""
    />
  );

  return {logoBlack,logoLight, aboutUsImg, featureImg,aboutUsImg_2 };
};

export default imgScript;
