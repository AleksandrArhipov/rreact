import React from "react";
import s from "./../dialogs.module.css";
import { NavLink } from "react-router-dom";


const Item = props => {
    let path = "/dialogs/" + props.id;
    return (
      <div className={s.item}>
        <NavLink to={path}>{props.name}</NavLink>
      </div>
    );
  };

  export default Item;