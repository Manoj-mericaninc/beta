import React from "react";
import { Login } from "@components/authentication";

const page = () => {
  return (
    <>
      <Login
        Signin="Sign In Account"
        email="Email Address"
        Password="Password"
        buttontext="Login"
      />
    </>
  );
};

export default page;
