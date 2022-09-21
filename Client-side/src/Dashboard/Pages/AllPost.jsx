import React from "react";
import { lazy } from "react";
import { Suspense } from "react";
import { Fragment } from "react";
import { Helmet } from "react-helmet";
import FullScreenLoader from "../MasterLayout/FullScreenLoader";
import MasterLayout from "../MasterLayout/MasterLayout";
const AllPostComponent = lazy(() => import("../Components/AllPostComponent"));
const AllPost = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={<FullScreenLoader />}>
          <Helmet>
            <title>AmitJS || About Me</title>
          </Helmet>
          <AllPostComponent />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};

export default AllPost;
