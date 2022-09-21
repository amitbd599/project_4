import React, { Fragment, Suspense } from "react";
import LoginComponent from "../Components/LoginComponent";

const LoginPage = () => {
  return (
    <Fragment>
      <Suspense>
        <LoginComponent />
      </Suspense>
    </Fragment>
  );
};

export default LoginPage;
