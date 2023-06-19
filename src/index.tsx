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
import { custoUnits, custoEnhancements } from "./data/custo";
import { amUnits, amEnhancements } from "./data/am";
import { astraUnits, astraEnhancements } from "./data/astra";

// json schema Units: { id: number, name: string, models: number, points: number }
// json schema Enhancements: { id: number, name: string, points: number }

const router = createHashRouter([
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
  {
    path: "/custo",
    element: (
      <Calculator
        units={custoUnits}
        enhancements={custoEnhancements}
        title="ADEPTUS CUSTODES"
      />
    ),
  },
  {
    path: "/astra",
    element: (
      <Calculator
        units={astraUnits}
        enhancements={astraEnhancements}
        title="ASTRA MILITARUM"
      />
    ),
  },
  {
    path: "/am",
    element: (
      <Calculator
        units={amUnits}
        enhancements={amEnhancements}
        title="ADEPTUS MECHANICUS"
      />
    ),
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
