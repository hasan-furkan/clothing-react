import SignupForm from "../../components/sign-up-form/signup-form.component";
import SignInForm from "../../components/sign-in-form/signin-form.component";

import "./authentication.styles..scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignupForm />
    </div>
  );
};

export default Authentication;
