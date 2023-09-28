import React from "react";

import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { Routes, Route, useNavigate } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SignupScreen from "./screens/SignupScreen";
import ErrorPage from "./screens/ErrorPage";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/counter/userSlice";
import Privacy from "./screens/Privacy";
import Cancellation from "./screens/Cancellation";
import Support from "./screens/Support";
import Terms from "./screens/Terms";

function App() {
  //return function that can be used to send the actions to the store
  const dispatch = useDispatch();
  //useSelector rerender the component where it is used , hen the redux store state is changed using the dispatch action
  //to update the state changes
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  console.log("selector", user);

  useEffect(() => {
    console.log("effect");
    //this detect any changes in the authentication , like if user new user signed in  ,
    //or user logged out
    //etc...
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        console.log("state change", userAuth.email);
        //dispatch only takes the action, the initialstate that is expected
        //inside the reducer is auto passed by redux toolkit, and initialstate is
        //already set in the userSlice,refer UserSlice for more
        dispatch(login({ uid: userAuth.uid, email: userAuth.email }));
        navigate("/");
      } else {
        dispatch(logout());
        navigate("/login");

        //navigate("/login", { replace: true });
      }
    });
    return unsubscribe;
  }, []);

  return !user ? (
    <LoginScreen />
  ) : (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomeScreen />} />

        <Route path="/error" element={<ErrorPage />} />

        <Route path="/login" element={<LoginScreen />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/cancellation" element={<Cancellation />} />
        <Route path="/support" element={<Support />} />
        <Route path="/terms" element={<Terms />} />

        <Route path="/profile" element={<ProfileScreen />} />
      </Routes>
    </div>
  );
}

export default App;
