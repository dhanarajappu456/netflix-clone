import React, { useEffect, useState } from "react";
import "./Nav.css";
function Nav() {
  const [show, setShow] = useState(false);

  function handleScroll() {
    //console.log(event.target)
    if (window.scrollY > 100) {
      console.log("haahah");
      setShow(true);
    } else {
      setShow(false);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      //clanup happens when unmounting happen, since the list
      //is not keeping track of any variable and its change
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__content">
        <img
          className="nav__logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
        />
        <img
          className="nav__avatar"
          src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        />
      </div>
    </div>
  );
}

export default Nav;
