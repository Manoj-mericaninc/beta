import React from "react";
import { Signup } from "@components/authentication";

const page = () => {
  return (
    <>
      <Signup
        Signup="Create an Account"
        email="Email Address"
        Password="Password"
        confirmpassword="Confirm Password"
        buttontext="SignUp"
      />
    </>
  );
};

export default page;
