import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

import "./authentication.styles.scss";

import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const Authentication = () => {
  useEffect(() => {
    const fetUserData = async () => {
      try {
        const response = await getRedirectResult(auth);
        if (response) {
          await createUserDocumentFromAuth(response.user);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetUserData();
  }, []);

  const logGoogleRedirectUser = () => {
    const logGoogleUser = async () => {
      const { user } = await signInWithGoogleRedirect();
    };
  };
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
