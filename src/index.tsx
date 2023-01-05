import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import socketIO from "./controllers/SocketIO";

ReactDOM.render(<App socketIO={socketIO} />, document.getElementById("root"));
