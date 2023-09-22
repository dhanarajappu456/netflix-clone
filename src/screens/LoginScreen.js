import React, { useState } from "react";
import "./LoginScreen.css";
import SignupScreen from "./SignupScreen";

function LoginScreen() {
  const [siginIn, setSignIn] = useState(false);
  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          className="loginScreen__logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <button onClick={() => setSignIn(true)} className="loginScreen__button">
          Signin
        </button>
      </div>

      <div className="loginScreen__gradient"></div>

      <div className="loginScreen__body">
        {siginIn ? (
          <SignupScreen />
        ) : (
          <>
            <h1>Unlimited films, TV progrmmmes and more...</h1>
            <h2>Watch anywhere , anytime...</h2>
            <h3>Ready to watch? Enter your mail to create the membership.</h3>
            <div className="loginScreen__input">
              <form>
                <input type="email" placeholder="Enter mail" />
                <button
                  onClick={() => setSignIn(true)}
                  className="loginScreen__GetStarted"
                >
                  Get Started
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
