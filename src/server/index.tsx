import express from "express";
import childProcess from "child_process";
import { renderToString } from "react-dom/server";
import React from "react";
import path from "path";
import router from "../router";
import { Route, Routes } from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";
import { Helmet } from "react-helmet";
import { serverStore } from "../store/store";
import { Provider } from "react-redux";
import bodyPaser from 'body-parser'
const app = express();

app.use(express.static(path.resolve(process.cwd(), "client_build")));

app.use(bodyPaser.json())
app.use(bodyPaser.urlencoded({extended: true}))

app.post('/api/getDemoData', (req, res) => {
  res.send({
    data: req.body,
    status_code: 0
  })
})

app.get("*", (req, res) => {
  const content = renderToString(
    <Provider store={serverStore}>
      <StaticRouter location={req.path}>
        <Routes>
          {
            router?.map((item, idx) => (
              <Route key={idx} {...item} />
            ))
          }
        </Routes>
      </StaticRouter>
    </Provider>
  );
  const helmet = Helmet.renderStatic();

  res.send(`
    <html>
      <header>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
      </header>
      <body>
        <div id="root">${content}</div>
        <script src="/index.js"></script>
      </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log("ssr-server listen on 3000");
});

childProcess.exec("start http://127.0.0.1:3000");
