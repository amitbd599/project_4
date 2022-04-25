import React, { Fragment } from "react";
import Helmet from "../components/common/Helmet";
import Header from "../components/header/Header";

const SlideList = [
  {
    textPosition: "text-center",
    bgImage: "bg_image--22",
    category: "",
    title: "UX Research.",
    description:
      "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.",
    buttonText: "Contact Us",
    buttonLink: "/contact",
  },
  {
    textPosition: "text-center",
    bgImage: "bg_image--21",
    category: "",
    title: "Marketing",
    description:
      "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.",
    buttonText: "Contact Us",
    buttonLink: "/contact",
  },
  {
    textPosition: "text-center",
    bgImage: "bg_image--23",
    category: "",
    title: "Development.",
    description:
      "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.",
    buttonText: "Contact Us",
    buttonLink: "/contact",
  },
  {
    textPosition: "text-center",
    bgImage: "bg_image--20",
    category: "",
    title: "UX Research.",
    description:
      "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.",
    buttonText: "Contact Us",
    buttonLink: "/contact",
  },
];

const DigitalCleaningService = () => {
  return (
    <Fragment>
      <Helmet pageTitle="Digital Agency" />

      {/* Header Section */}

      <Header logo="dark" />
    </Fragment>
  );
};

export default DigitalCleaningService;
