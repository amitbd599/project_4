import React, { Fragment, Suspense, lazy } from "react";
import MasterLayout from "../MasterLayout/MasterLayout";
import { Helmet } from "react-helmet";
import FullScreenLoader from "../MasterLayout/FullScreenLoader";
import DashboardFooter from "../Components/DashboardFooter";
const DashboardComponent = lazy(() =>
  import("../Components/DashboardComponent")
);
const DashboardPage = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={<FullScreenLoader />}>
          <Helmet>
            <title>AmitJS || About Me</title>
          </Helmet>
          <DashboardComponent />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};

export default DashboardPage;
