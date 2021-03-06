import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Avnish from "../Images/avnish-avatar.png";
import Avatar from "@material-ui/core/Avatar";
import "../styles.css";
const Navbar = ({ setTheme, bgColor }) => {
  const [toggle, setToggle] = useState(false);
  const [navbarColor, setNavbarColor] = useState(
    "navbar navbar-expand-lg navbar-light bg-white fixed-top"
  );
  //  if(toggle==true){
  //   setNavbarColor('navbar navbar-expand-lg navbar-light bg-light fixed-top');
  //  }
  const setData = () => {
    setToggle(!toggle);
    setTheme(toggle);
    if (toggle === true) {
      setNavbarColor("navbar navbar-expand-lg navbar-light bg-white fixed-top");
    } else {
      setNavbarColor("navbar navbar-expand-lg navbar-dark bg-darkk fixed-top");
    }
    console.log(bgColor);
  };

  return (
    <div>
      <nav className={navbarColor}>
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <Avatar alt="Avnish" src={Avnish} />
            {/* <h2>Home</h2> */}
            {/* <img src="https://img.icons8.com/color/48/000000/circled-user-male-skin-type-1-2--v2.png" />{" "} */}
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto" style={{ fontSize: "x-large" }}>
              <li className="nav-item " >
                <NavLink className="nav-link f-700" exact to="/">

                  Home <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link f-700" to="/About">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link f-700" to="/Project">
                  Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link f-700" to="/Contact">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <label class="switch mt-2 ml-2">
                  <input type="checkbox" onClick={setData} />
                  <span className="slider round"></span>
                </label>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
