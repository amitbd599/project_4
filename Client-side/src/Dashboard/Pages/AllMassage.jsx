import React, { Fragment, lazy, Suspense } from "react";
import { Helmet } from "react-helmet";
import FullScreenLoader from "../MasterLayout/FullScreenLoader";
import MasterLayout from "../MasterLayout/MasterLayout";
const AllMassageComponent = lazy(() =>
  import("../Components/AllMassageComponent")
);

const AllMassage = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={<FullScreenLoader />}>
          <Helmet>
            <title>AmitJS || About Me</title>
          </Helmet>
          <AllMassageComponent />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};

export default AllMassage;
