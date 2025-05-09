import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";

function UserMenu() {
  const dispatch = useDispatch();
  const { name } = useSelector(selectUser);

  return (
    <div className={css.userMenu}>
      <p className={css.userName}>Welcome, {name}</p>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
}

export default UserMenu;
