import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";

const setActiveClass = ({ isActive }) => {
  return clsx(isActive && css.active);
};

function Navigation() {
  return (
    <nav className={css.navigation}>
      <NavLink className={setActiveClass} to="/">
        Home
      </NavLink>
      <NavLink className={setActiveClass} to="/contacts">
        Contacts
      </NavLink>
    </nav>
  );
}

export default Navigation;
