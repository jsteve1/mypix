import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import "./index.css";
import Login from "./routes/Login";
import MyPix from "./routes/MyPix";
import Home from "./routes/Home";
import { store } from './app/store';
import { Provider } from 'react-redux';

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/my-pix",
    element: <MyPix />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
     <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);