import { hydrateRoot } from "react-dom/client";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import router from "../router";

const Client = () => {
  return (
    <BrowserRouter>
      <Routes>
        {router?.map((item, idx) => (
          <Route {...item} key={idx} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

hydrateRoot(document.getElementById("root") as Document | Element, <Client />);