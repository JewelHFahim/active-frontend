import { createBrowserRouter } from "react-router-dom";
import Main from "../layoout/Main";
import HomePage from "../components/home/HomePage";

const router = createBrowserRouter([
  {
    path: "",
    element: <Main />,
    childsren: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);

export default router;
