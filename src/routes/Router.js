import { createBrowserRouter } from "react-router-dom";
import ErrorScreen from "../pages/errorScreen/ErrorScreen";
import AppLayout from "../layout/Layout";
import LazyComponent from "./LazyComponent";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorScreen />,
    children: [
      {
        path: "/",
        element: <LazyComponent path="main/Main" />,
      },
      {
        path: "contact",
        element: <LazyComponent path="contact/Contact" />,
      },
      {
        path: "portfolio",
        element: <LazyComponent path="portfolio/Work" />,
      },
      {
        path: "profile",
        element: <LazyComponent path="profile/Profile" />,
      },
      
      {
        path: "*",
        element: <ErrorScreen />,
      }

    ],
  },
]);

