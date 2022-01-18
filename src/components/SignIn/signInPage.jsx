import React from "react";
import Form from "../Form";

const SignInPage = () => {
  return (
    <div>
      <Form
        submitBtnText="Sign In"
        signInOrUpText="Don't have an account? Sign Up |"
        goToCatalogText="Continue to catalog"
      />
    </div>
  );
};

export default SignInPage;
