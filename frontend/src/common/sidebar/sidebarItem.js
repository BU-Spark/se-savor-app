import React, { useState } from "react";
import { Link } from "react-router-dom";

const SidebarItem = (props) => {
  const { name, iconClassName, onClick, to} = props;
  const [selected, setSelected] = useState(false);

  return (
    <li className="sidebar-li" onClick={props.onClick}>
      <Link
        exact
        to={to}
        onClick={() => {
          setSelected((e) => !e);
        }}
        className={`sidebar-item`}
      >
        <div className="sidebar-icon">
          <i class={iconClassName}></i>
        </div>
        <span className="menu-label">{name}</span>
      </Link>
    </li>
  );
};

export default SidebarItem;