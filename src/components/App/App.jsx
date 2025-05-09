import "./App.css";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import LoginPage from "../../pages/LoginPage";
import RegistrationPage from "../../pages/RegistrationPage";
import ContactsPage from "../../pages/ContactsPage";
import NotFound from "../../pages/NotFound";
import Layout from "../Layout/Layout";
import { refreshUser } from "../../redux/auth/operations";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsLoggedIn,
  selectIsRefreshing,
} from "../../redux/auth/selectors";
import { PrivateRoute } from "../../routes/PrivateRoute";
import { RestrictedRoute } from "../../routes/RestrictedRoute";
import { fetchContacts } from "../../redux/contacts/operations";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ClipLoader } from "react-spinners";

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    const runRefresh = async () => {
      try {
        await dispatch(refreshUser());
        isLoggedIn && dispatch(fetchContacts());
      } catch (error) {
        alert(error);
      }
    };

    runRefresh();
  }, [dispatch, isLoggedIn]);

  return isRefreshing ? (
    <ClipLoader color="#0040ff" size={50} />
  ) : (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/login"
            element={<RestrictedRoute component={LoginPage} />}
          />
          <Route
            path="/register"
            element={<RestrictedRoute component={RegistrationPage} />}
          />
          <Route
            path="/contacts"
            element={<PrivateRoute component={ContactsPage} />}
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </div>
  );
}

export default App;
