import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { aeldariData, aeldariEnhancements } from "./data/aeldari";
import { rikiData, rikiEnhancements } from "./data/riki";
import { Calculator } from "./Calculator";
import { sororitasData, sororitasEnhancements } from "./data/sororitas";

// { id: number, name: string, models: number, points: number }
// { id: number, name: string, points: number }

const router = createHashRouter(
  [
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/cwe",
      element: (
        <Calculator
          units={aeldariData}
          enhancements={aeldariEnhancements}
          title="AELDARI"
        />
      ),
    },
    {
      path: "/riki",
      element: (
        <Calculator
          units={rikiData}
          enhancements={rikiEnhancements}
          title="CHAOS KNIGHTS"
        />
      ),
    },
    {
      path: "/sisters",
      element: (
        <Calculator
          units={sororitasData}
          enhancements={sororitasEnhancements}
          title="ADEPTA SORORITAS"
        />
      ),
    },
  ],
  {
    basename: "/index.html",
  }
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
