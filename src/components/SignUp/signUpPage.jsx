import React from "react";
import Form from "../Form";


const SignUpPage = () => {

  return (
    <div>
      <Form
        submitBtnText="Sign Up"
        signInOrUpText="Already have an account? Sign In"
        goToCatalogText="Continue to catalog"
      />
    </div>
  );
};

export default SignUpPage;