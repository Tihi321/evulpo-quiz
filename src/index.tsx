import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import socketIO from "./controllers/SocketIO";
import "./i18n/config";

ReactDOM.render(
  <BrowserRouter>
    <App socketIO={socketIO} />
  </BrowserRouter>,
  document.getElementById("root")
);
