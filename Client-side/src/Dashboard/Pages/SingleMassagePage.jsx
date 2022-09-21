import React from "react";
import { Suspense } from "react";
import { lazy } from "react";
import { Fragment } from "react";
import { Helmet } from "react-helmet";
import FullScreenLoader from "../MasterLayout/FullScreenLoader";
import MasterLayout from "../MasterLayout/MasterLayout";
const SingleMassageComponents = lazy(() =>
  import("../Components/SingleMassageComponents")
);
const SingleMassagePage = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={<FullScreenLoader />}>
          <Helmet>
            <title>AmitJS || About Me</title>
          </Helmet>
          <SingleMassageComponents />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};

export default SingleMassagePage;
