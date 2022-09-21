import React from "react";
import { useRef } from "react";
import { login__Request__API } from "../../API/API";
import { ErrorTost, IsEmpty } from "../../Helper/FormHelper";
const LoginComponent = () => {
  let emailRef,
    passwordRef = useRef();
  const loginRequestAPI__Fun = () => {
    let email = emailRef.value;
    let password = passwordRef.value;
    if (IsEmpty(email)) {
      ErrorTost("Email Required!");
    } else if (IsEmpty(password)) {
      ErrorTost("Password Required!");
    } else {
      login__Request__API(email, password).then((result) => {
        if (result === true) {
          window.location.href = "/dashboard";
        }
      });
    }
  };
  return (
    <div className="login">
      <div className="wrapper">
        <div className="wrapper__body">
          <div className="main__body">
            <div className="inner__body">
              <div className="user__email mb-2">
                <label htmlFor=""> Email: </label>
                <input
                  type="email"
                  placeholder="Email ID"
                  className="mt-1"
                  ref={(input) => (emailRef = input)}
                />
              </div>
              <div className="user__password">
                <label htmlFor=""> Password: </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="mt-1"
                  ref={(input) => (passwordRef = input)}
                />
              </div>
              <div className="mt-3">
                <button onClick={loginRequestAPI__Fun} className="my__btn">
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
