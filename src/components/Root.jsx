import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import styles from "../css/Root.module.css";

const Root = () => {
  return (
    <div className={styles.root}>
      <Header />
      <div className={styles.layout}>
        <Sidebar />
        <main className={styles.main}>
          <h1>Root Component</h1>
          <p>This is the root component of the application.</p>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Root;
