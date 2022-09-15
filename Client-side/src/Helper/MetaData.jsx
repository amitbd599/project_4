import React from "react";
import { Helmet } from "react-helmet";

const MetaData = ({ title, description, imgUrl }) => {
  return (
    <Helmet>
      {/* <!-- Primary Meta Tags --> */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={window.location.pathname + window.location.search}
      />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content={
          "https://res.cloudinary.com/amitjs/image/upload/v1660849223/snfnupsjrzeprtedh59g.png"
        }
      />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://amitjs.com/" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta
        property="twitter:image"
        content={
          "https://res.cloudinary.com/amitjs/image/upload/v1660849223/snfnupsjrzeprtedh59g.png"
        }
      />
    </Helmet>
  );
};

export default MetaData;
