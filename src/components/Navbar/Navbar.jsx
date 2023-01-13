import React from "react";
import CardWidget from "../CardWidget/CardWidget";
import { NavLink } from "react-router-dom";
import "../Navbar/Navbar.css";

function Navbar() {
  return (
    <>
      <div className="topnav">
        <nav>
          <ul>
            <li>
              <NavLink className="nav_link" to="/">
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink className="nav_link" to="/categoria/Uppergarment">
                Upper garment
              </NavLink>
            </li>
            <li>
              <NavLink className="nav_link" to="/categoria/Lowergarment">
                Lower garment
              </NavLink>
            </li>
            <li>
              <NavLink className="nav_link" to="cart">
                <CardWidget />
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
