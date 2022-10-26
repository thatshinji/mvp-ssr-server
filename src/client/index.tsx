import { hydrateRoot } from "react-dom/client";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import router from "../router";
import { clientStore } from "../store/store";
import { Provider } from "react-redux";

const Client = () => {
  return (
    <Provider store={clientStore}>
      <BrowserRouter>
        <Routes>
          {router?.map((item, idx) => (
            <Route {...item} key={idx} />
          ))}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

hydrateRoot(document.getElementById("root") as Document | Element, <Client />);