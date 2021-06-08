import React from "react";
import { Link } from "react-scroll";

import "./NavTab.css";

function NavTab(props) {
  return (
    <nav className="nav-tab">
      <ul className="nav-tab__link-items">
        <li className="nav-tab__link-item">
          <Link to={"aboutProject"} className="nav-tab__link">
            О проекте
          </Link>
        </li>
        <li className="nav-tab__link-item">
          <Link to={"technology"} className="nav-tab__link">
            Технологии
          </Link>
        </li>
        <li className="nav-tab__link-item">
          <Link to={"aboutMe"} className="nav-tab__link">
            Студент
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;
