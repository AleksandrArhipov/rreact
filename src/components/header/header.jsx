import React from "react";
import s from "./header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className={s.wrap}>
      <ul className={s.nav}>
        <li>
          <NavLink to="/">На главную</NavLink>
        </li>
        <li>
          <NavLink to="/profile">Мой профиль</NavLink>
        </li>
        <li>
          <NavLink to="/dialogs">Сообщения</NavLink>
        </li>
        <li>
          <NavLink to="/news">Новости</NavLink>
        </li>
        <li>
          <NavLink to="/login">Войти</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
