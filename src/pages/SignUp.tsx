import React from "react";
import Form from "../components/Form";

const SignUp = () => {
  return (
    <>
      <Form
        title="Sign Up"
        subtitle="Your details are required here"
        lableEmail=""
        lablePassword=""
        lableOr="or"
        forgotPasswordLink=""
        signUpLink=""
        alreadyAccountLink="Already Have a Account"
        placeholder1="Full Name"
        placeholder2="Email"
        placeholder3="password"
        show="block"
        hide="block"
        img="https://images.unsplash.com/photo-1622900658258-56508b418f14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8&w=1000&q=80"
        lableHide="none"
      />
    </>
  );
};

export default SignUp;
