import React from "react";
import ReactDOM from "react-dom";
import AppRouters from "./routers/AppRouters";
import "./styles/styles.scss";


const app = document.querySelector("#app");
ReactDOM.render(<AppRouters />, app);

