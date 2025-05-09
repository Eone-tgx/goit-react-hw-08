import css from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={css.homeWrapper}>
      <h1 className={css.title}>Welcome to Contact Book</h1>
      <p className={css.subtitle}>
        Manage your contacts easily and efficiently
      </p>
    </div>
  );
}

export default HomePage;
