import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MultipleSelect } from "./MulipleSelect";
import { Calculator } from "./Calculator";
import { aeldariData, aeldariEnhancements } from "./data/aeldari";
import { rikiData, rikiEnhancements } from "./data/riki";
import { sororitasData, sororitasEnhancements } from "./data/sororitas";
import { custoUnits, custoEnhancements } from "./data/custo";
import { amUnits, amEnhancements } from "./data/am";
import { astraUnits, astraEnhancements } from "./data/astra";
import {
  blackTemplarEnhancements,
  blackTemplarUnits,
} from "./data/blackTemplars";
import { bloodAngelsUnits, bloodAnglesEnhancements } from "./data/bloodAngles";
import { chaosDaemonsEnhancements, chaosDaemonsUnits } from "./data/danonki";
import { csmEnhancements, csmUnits } from "./data/csm";
import { drukhariEnhancements, drukhariUnits } from "./data/drukhari";
import { daEnhancements, daUnits } from "./data/da";
import { deathWatchEnhancements, deathWatchUnits } from "./data/deathWatch";
import { agnetsEnhancements, agnetsUnits } from "./data/agents";
import { smEnhancements, smUnits } from "./data/sm";
import { weEnhancements, weUnits } from "./data/we";
import { votannEnhancements, votannUnits } from "./data/votann";
import { tyranidsEnhancements, tyranidsUnits } from "./data/tyranids";
import { tsEnhancements, tsUnits } from "./data/ts";
import { tauEnhancements, tauUnits } from "./data/tau";
import { spaceWolvesEnhancements, spaceWolvesUnits } from "./data/sw";
import { dgEnhancements, dgUnits } from "./data/dg";
import { gkEnhancements, gkUnits } from "./data/gk";
import { gscUnits, gsxEnhancements } from "./data/gsc";
import { ikEnhancements, ikUnits } from "./data/ik";
import { necronsEnhancements, necronsUnits } from "./data/necrons";
import { orksEnhancements, orksUnits } from "./data/orks";

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
  {
    path: "/sm_bt",
    element: (
      <Calculator
        units={blackTemplarUnits}
        enhancements={blackTemplarEnhancements}
        title="BLACK TEMPLARS"
      />
    ),
  },
  {
    path: "/sm_ba",
    element: (
      <Calculator
        units={bloodAngelsUnits}
        enhancements={bloodAnglesEnhancements}
        title="BLOOD ANGELS"
      />
    ),
  },
  {
    path: "/chaos_daemons",
    element: (
      <Calculator
        units={chaosDaemonsUnits}
        enhancements={chaosDaemonsEnhancements}
        title="CHAOS DAEMONS"
      />
    ),
  },
  {
    path: "/csm",
    element: (
      <Calculator
        units={csmUnits}
        enhancements={csmEnhancements}
        title="CHAOS SPACE MARINES"
      />
    ),
  },
  {
    path: "/drukhari",
    element: (
      <Calculator
        units={drukhariUnits}
        enhancements={drukhariEnhancements}
        title="DRUKHARI"
      />
    ),
  },
  {
    path: "/sm_da",
    element: (
      <Calculator
        units={daUnits}
        enhancements={daEnhancements}
        title="DARK ANGELS"
      />
    ),
  },
  {
    path: "/sm_dw",
    element: (
      <Calculator
        units={deathWatchUnits}
        enhancements={deathWatchEnhancements}
        title="DEATHWATCH"
      />
    ),
  },
  {
    path: "/sm_agents",
    element: (
      <Calculator
        units={agnetsUnits}
        enhancements={agnetsEnhancements}
        title="AGENTS OF THE IMPERIUM"
      />
    ),
  },
  {
    path: "/sm",
    element: (
      <Calculator
        units={smUnits}
        enhancements={smEnhancements}
        title="SPACE MARINES"
      />
    ),
  },
  {
    path: "/we",
    element: (
      <Calculator
        units={weUnits}
        enhancements={weEnhancements}
        title="WORLD EATERS"
      />
    ),
  },
  {
    path: "/votann",
    element: (
      <Calculator
        units={votannUnits}
        enhancements={votannEnhancements}
        title="VOTANN"
      />
    ),
  },
  {
    path: "/tyranids",
    element: (
      <Calculator
        units={tyranidsUnits}
        enhancements={tyranidsEnhancements}
        title="TYRANIDS"
      />
    ),
  },
  {
    path: "/ts",
    element: (
      <Calculator
        units={tsUnits}
        enhancements={tsEnhancements}
        title="THOUSAND SONS"
      />
    ),
  },
  {
    path: "/tau",
    element: (
      <Calculator
        units={tauUnits}
        enhancements={tauEnhancements}
        title="T’AU EMPIRE"
      />
    ),
  },
  {
    path: "/sm_sw",
    element: (
      <Calculator
        units={spaceWolvesUnits}
        enhancements={spaceWolvesEnhancements}
        title="SPACE WOLVES"
      />
    ),
  },
  {
    path: "/orks",
    element: (
      <Calculator
        units={orksUnits}
        enhancements={orksEnhancements}
        title="ORKS"
      />
    ),
  },
  {
    path: "/necrons",
    element: (
      <Calculator
        units={necronsUnits}
        enhancements={necronsEnhancements}
        title="NECRONS"
      />
    ),
  },
  {
    path: "/ik",
    element: (
      <Calculator
        units={ikUnits}
        enhancements={ikEnhancements}
        title="IMPERIAL KNIGHTS"
      />
    ),
  },
  {
    path: "/gsc",
    element: (
      <Calculator
        units={gscUnits}
        enhancements={gsxEnhancements}
        title="GENESTEALER CULTS"
      />
    ),
  },
  {
    path: "/sm_gk",
    element: (
      <Calculator
        units={gkUnits}
        enhancements={gkEnhancements}
        title="GREY KNIGHTS"
      />
    ),
  },
  {
    path: "/dg",
    element: (
      <Calculator
        units={dgUnits}
        enhancements={dgEnhancements}
        title="DEATH GUARD"
      />
    ),
  },
  {
    path: "/mix",
    element: <MultipleSelect />,
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
