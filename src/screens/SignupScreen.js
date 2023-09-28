import React, { useEffect, useRef } from "react";
import "./SignUpScreen.css";
import { auth } from "../firebase";
function SignupScreen() {
  const emaiRef = useRef();
  const passRef = useRef();

  const register = () => {
    auth
      .createUserWithEmailAndPassword(
        emaiRef.current.value,
        passRef.current.value
      )
      .then(() => {
        alert("success registering");
      })
      .catch((err) => {
        alert(err.message);
      });
    console.log(emaiRef.current.value, passRef.current.value);
  };
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(emaiRef.current.value, passRef.current.value)
      .then((user) => console.log(user))

      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="signUpScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emaiRef} type="email" placeholder="Email"></input>
        <input ref={passRef} type="password" placeholder="Password"></input>
        <button onClick={signIn} type="submit">
          Sign In
        </button>

        <h4>
          <span className="signUpScreen__gray"> New to Netflix? </span>
          <span onClick={register} className="signUpScreen__link">
            SignUp
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignupScreen;
