import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidate } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    console.log(isSignInForm);
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const mssg = checkValidate(email.current.value, password.current.value);
    setErrorMessage(mssg);
    if (mssg) return;
    if (!isSignInForm) {
      // Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      ).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "-" + errorMessage);
      });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      ).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "-" + errorMessage);
      });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/6b2842d1-2339-4f08-84f6-148e9fcbe01b/IN-en-20231218-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="logo"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-3/12 p-10 mx-auto right-0 left-0 my-36 bg-black text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            className="p-3 my-3  w-full bg-gray-700 rounded-lg"
            type="text"
            placeholder="Full Name"
          />
        )}

        <input
          ref={email}
          className="p-3 my-3 w-full bg-gray-700 rounded-lg"
          type="txt"
          placeholder="email address"
        />
        <input
          ref={password}
          className="p-3 my-3 w-full bg-gray-700 rounded-lg"
          type="password"
          placeholder="password"
        />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button
          className="p-3 my-3 w-full bg-red-700 rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-3 cursor-pointer " onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign up now."
            : "Already registered ? Sign in now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
