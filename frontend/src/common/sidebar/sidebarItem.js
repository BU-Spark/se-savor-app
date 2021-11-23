import React, { useRef, useState } from "react";
import { NavLink, Link } from "react-router-dom";

const SidebarItem = (props) => {
  const { name, iconClassName, onClick, to} = props;
  const [selected, setSelected] = useState(false);

  return (
    <li onClick={props.onClick}>
      <Link
        exact="true"
        to={to}
        onClick={() => {
          setSelected((e) => !e);
        }}
        className={`sidebar-item`}
      >
        <div className="sidebar-icon">
          <i className={iconClassName}></i>
        </div>
        <span className="menu-label">{name}</span>
      </Link>
    </li>
  );
};

export default SidebarItem;