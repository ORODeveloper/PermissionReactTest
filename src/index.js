import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import bcakgroundImage from "./assets/images/Forceoro24Background.png";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div
      className="bg-cover bg-center flex w-screen h-screen "
      style={{ backgroundImage: `url(${bcakgroundImage})` }}
    >
      <App />
    </div>
  </React.StrictMode>
);

reportWebVitals();
