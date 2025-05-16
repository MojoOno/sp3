import { StrictMode } from 'react'
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import apiRoutes from './routes/apiRoutes';
import ErrorPage from './ErrorPage.jsx';
import Root from './components/Root.jsx';
import './index.css'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      ...apiRoutes
    ]
  }
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
  