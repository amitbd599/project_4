import React, { Fragment, Suspense } from "react";
import DashboardComponent from "../Components/DashboardComponent";
import MasterLayout from "../Components/MasterLayout";

const DashboardPage = () => {
  return (
    <Fragment>
      <MasterLayout>
        <>
          <DashboardComponent />
        </>
      </MasterLayout>
    </Fragment>
  );
};

export default DashboardPage;
