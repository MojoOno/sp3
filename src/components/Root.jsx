import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styles from "../css/Root.module.css";

const Root = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Header />
      </header>
      <aside className={styles.sidebar}>
        <Sidebar />
      </aside>
      <main className={styles.main}>
        <h1>Root Component</h1>
        <p>This is the root component of the application.</p>
        <Outlet />
      </main>
    </div>
  );
};

export default Root;