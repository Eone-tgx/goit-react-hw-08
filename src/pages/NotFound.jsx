import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CircleLoader } from "react-spinners";
import css from "./NotFound.module.css";

function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/", { replace: true });
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className={css.notFound}>
      <p className={css.notFoundText}>
        Page not found. Returning to the main page...
      </p>
      <CircleLoader color="#f60a0a" size={100} />
    </div>
  );
}

export default NotFound;
