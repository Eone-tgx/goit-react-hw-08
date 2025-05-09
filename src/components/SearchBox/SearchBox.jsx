import { useId } from "react";
import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";

const SearchBox = () => {
  const searchId = useId();
  const dispatch = useDispatch();
  const filterValue = useSelector(selectNameFilter);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.searchWrapper}>
      <label htmlFor={searchId}>Find contacts by name or number</label>
      <input
        type="text"
        value={filterValue}
        onChange={handleChange}
        id={searchId}
      />
    </div>
  );
};

export default SearchBox;
