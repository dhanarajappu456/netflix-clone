import React from "react";
import "./SignUpScreen.css";
function SignupScreen() {
  const signIn = (e) => {
    e.preventDefault();
  };

  return (
    <div className="signUpScreen">
      <form>
        <h1>Sign In</h1>
        <input type="email" placeholder="Enter email address"></input>
        <input type="password" placeholder="Password"></input>
        <button onClick={signIn} type="submit">
          Sign In
        </button>

        <h4>
          <span className="signUpScreen__gray"> New to Netflix? </span>
          <span className="signUpScreen__link">SignUp</span>
        </h4>
      </form>
    </div>
  );
}

export default SignupScreen;
