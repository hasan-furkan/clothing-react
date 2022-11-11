import {
  signInWithGooglePopup,
  createUserDocumentAuth,
} from "../../utils/firebase/firebase.utils";
import SignupForm from "../../components/sign-up-form/signup-form.component";

const Authentication = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentAuth(user);
  };

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={logGoogleUser}>Sign in with google</button>
      <SignupForm />
    </div>
  );
};

export default Authentication;
