import React from "react";
import Home from "./pages/home";
import Demo from "./pages/demo";

type Router = {
  path: string
  element: JSX.Element
}

const router: Router[] = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/demo",
    element: <Demo />
  }
];

export default router;