import React from "react";
import { Suspense } from "react";
import { lazy } from "react";
import { Fragment } from "react";
import { Helmet } from "react-helmet";
import FullScreenLoader from "../MasterLayout/FullScreenLoader";
import MasterLayout from "../MasterLayout/MasterLayout";
const UserComponents = lazy(() => import("../Components/UserComponents"));
const UserPage = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={<FullScreenLoader />}>
          <Helmet>
            <title>AmitJS || About Me</title>
          </Helmet>
          <UserComponents />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};

export default UserPage;
