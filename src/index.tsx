import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./Component/Header";
import Mandir from "./Component/Mandir";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Header />
    <Mandir />
  </React.StrictMode>
);
