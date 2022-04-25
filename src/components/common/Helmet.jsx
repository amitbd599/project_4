import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
const HelmetData = (props) => {
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{props.pageTitle} || New React Project By Amit</title>
        <meta name="description" content="Helmet application" />
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
    </React.Fragment>
  );
};

Helmet.propTypes = {
  title: PropTypes.string,
};
export default HelmetData;
