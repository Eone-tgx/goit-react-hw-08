import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

function AuthNav() {
  return (
    <div className={css.autWrapper}>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Login</NavLink>
    </div>
  );
}

export default AuthNav;
