import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Sidebar</h2>
      <ul>
        <li><NavLink to="about">About</NavLink></li>
        <li><NavLink to="endpoints">Endpoints</NavLink></li>
        <li><NavLink to="deployed">Deployed</NavLink></li>
        <li><NavLink to="repository">Repository</NavLink></li>
        <li><NavLink to="ideas">Ideas</NavLink></li>
      </ul>
    </div>
  );
}
export default Sidebar;