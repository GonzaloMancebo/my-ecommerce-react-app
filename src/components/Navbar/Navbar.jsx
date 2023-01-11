import React from "react";
import CardWidget from "../CardWidget/CardWidget";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div>
        <nav>
          <div>
            <NavLink className="nav_link" to="/">
              Logo
            </NavLink>
          </div>
          <ul>
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
