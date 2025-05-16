import { NavLink } from "react-router-dom";
import styles from "../css/Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <h2>Menu</h2>
      <ul>
        <li>
          <NavLink 
            to="about" 
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="endpoints" 
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Endpoints
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="deployed" 
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Deployed
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="repository" 
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Repository
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="ideas" 
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Ideas
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;