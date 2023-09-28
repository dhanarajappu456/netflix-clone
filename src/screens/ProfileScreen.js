import React from "react";
import Nav from "../Nav";
import "./ProfileScreen.css";
import { auth } from "../firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../features/counter/userSlice";
import { Link, NavLink, Navigate, useNavigate } from "react-router-dom";
function ProfileScreen() {
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  return (
    <div className="profile">
      <Nav />
      <div className="profile__body">
        <h1>Edit profile </h1>
        <div className="profile__content">
          <img src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" />
          <div className="profile__info">
            <h2>{user.email}</h2>

            <div className="profile__plans">
              <h3>Plans</h3>

              <div className="profile__signout">
                <button onClick={() => auth.signOut()}>SignOut</button>
              </div>
            </div>
          </div>
        </div>
        <div className="additional__service">
          <Link to={"/privacy"}>Privacy</Link>
          <Link to={"/terms"}>Terms</Link>
          <Link to={"/cancellation"}>Cancellation</Link>
          <Link to={"/support"}>Support</Link>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
