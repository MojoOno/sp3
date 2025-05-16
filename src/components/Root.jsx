import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Root = () => {
  return (
    <div>
        <Header />
        <Sidebar />
      <h1>Root Component</h1>
      <p>This is the root component of the application.</p>
      <Outlet />
    </div>
  );
}
export default Root;