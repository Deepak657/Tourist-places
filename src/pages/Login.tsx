import React from "react";
import Form from "../components/Form";

const Login = () => {
  return (
    <>
      <Form
        title="Welcome"
        subtitle="Log in or Create Account to Continues"
        lableEmail="Email"
        lablePassword="Password"
        lableOr="or"
        forgotPasswordLink="Forgot Password"
        signUpLink="Don't have a account? Sign up here"
        alreadyAccountLink=""
        placeholder1="Enter Your Email"
        placeholder2="Enter Your Password"
        placeholder3="password"
        show="block"
        hide="none"
        img="https://images.unsplash.com/photo-1521856729154-7118f7181af9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMHdpdGglMjBjYW1lcmF8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
        lableHide="block"
      />
    </>
  );
};

export default Login;
