import * as React from "react";
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
import { Button, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { Calculator } from "./Calculator";

const armies = [
  { id: 1, name: "Adepta Sororitas (Sisters of Battle)", checked: false },
  { id: 2, name: "Adeptus Custodes", checked: false },
  { id: 3, name: "Adeptus Mechanicus", checked: false },
  { id: 4, name: "Astra Militarum (Imperial Guard)", checked: false },
  { id: 5, name: "Blood Angels", checked: false },
  { id: 6, name: "Chaos Daemons", checked: false },
  { id: 7, name: "Chaos Knights", checked: false },
  { id: 8, name: "Chaos Space Marines", checked: false },
  { id: 9, name: "Craftworlds (Eldar)", checked: false },
  { id: 10, name: "Dark Angels", checked: false },
  { id: 11, name: "Death Guard", checked: false },
  { id: 12, name: "Deathwatch", checked: false },
  { id: 13, name: "Drukhari (Dark Eldar)", checked: false },
  { id: 14, name: "Genestealer Cults", checked: false },
  { id: 15, name: "Grey Knights", checked: false },
  { id: 16, name: "Imperial Knights", checked: false },
  { id: 17, name: "Necrons", checked: false },
  { id: 18, name: "Agents of Imperium", checked: false },
  { id: 19, name: "Orks", checked: false },
  { id: 20, name: "Space Marines", checked: false },
  { id: 21, name: "Space Wolves", checked: false },
  { id: 22, name: "Tau Empire", checked: false },
  { id: 23, name: "Thousand Sons", checked: false },
  { id: 24, name: "Tyranids", checked: false },
  { id: 25, name: "Votann", checked: false },
  { id: 26, name: "Black Templars", checked: false },
  { id: 27, name: "World Eaters", checked: false },
];

const concatArrays = (base: any, addition: any, category: string) => {
  return base.concat(
    addition.map((item: any) => ({
      ...item,
      id: base.length + item.id,
      category,
    }))
  );
};

export const MultipleSelect = () => {
  const [selectedArmies, setSelectedArmies] = React.useState(armies);
  const [selectedArmiesData, setSelectedArmiesData] = React.useState([]);
  const [selectedEnhancements, setSelectedEnhancements] = React.useState([]);
  const [showCalculator, setShowCalculator] = React.useState(false);

  const handleCheckArmy = (army: any) => {
    const selectedArmiesCopy = selectedArmies.map((item) => {
      if (item.name === army.name) {
        return {
          ...item,
          checked: !item.checked,
        };
      }
      return item;
    });
    setSelectedArmies(selectedArmiesCopy);
  };

  const selectArmiesDataSets = () => {
    let selectedArmiesUnits: any = [];
    let selectedArmiesEnhancements: any = [];

    selectedArmies.forEach((element) => {
      if (element.checked) {
        switch (element.id) {
          case 1:
            selectedArmiesUnits = concatArrays(
              selectedArmiesUnits,
              sororitasData,
              element.name
            );
            selectedArmiesEnhancements = concatArrays(
              selectedArmiesEnhancements,
              sororitasEnhancements,
              element.name
            );
            break;
          case 2:
            selectedArmiesUnits = concatArrays(
              selectedArmiesUnits,
              custoUnits,
              element.name
            );
            selectedArmiesEnhancements = concatArrays(
              selectedArmiesEnhancements,
              custoEnhancements,
              element.name
            );
            break;
          case 3:
            selectedArmiesUnits = concatArrays(
              selectedArmiesUnits,
              amUnits,
              element.name
            );
            selectedArmiesEnhancements = concatArrays(
              selectedArmiesEnhancements,
              amEnhancements,
              element.name
            );
            break;
          case 4:
            selectedArmiesUnits = concatArrays(
              selectedArmiesUnits,
              astraUnits,
              element.name
            );
            selectedArmiesEnhancements = concatArrays(
              selectedArmiesEnhancements,
              astraEnhancements,
              element.name
            );
            break;
          case 5:
            selectedArmiesUnits = concatArrays(
              selectedArmiesUnits,
              bloodAngelsUnits,
              element.name
            );
            selectedArmiesEnhancements = concatArrays(
              selectedArmiesEnhancements,
              bloodAnglesEnhancements,
              element.name
            );
            break;
          case 6:
            selectedArmiesUnits = concatArrays(
              selectedArmiesUnits,
              chaosDaemonsUnits,
              element.name
            );
            selectedArmiesEnhancements = concatArrays(
              selectedArmiesEnhancements,
              chaosDaemonsEnhancements,
              element.name
            );
            break;
          case 7:
            selectedArmiesUnits = concatArrays(
              selectedArmiesUnits,
              rikiData,
              element.name
            );
            selectedArmiesEnhancements = concatArrays(
              selectedArmiesEnhancements,
              rikiEnhancements,
              element.name
            );
            break;
          case 8:
            selectedArmiesUnits = concatArrays(
              selectedArmiesUnits,
              csmUnits,
              element.name
            );
            selectedArmiesEnhancements = concatArrays(
              selectedArmiesEnhancements,
              csmEnhancements,
              element.name
            );
            break;
          case 9:
            selectedArmiesUnits = concatArrays(
              selectedArmiesUnits,
              aeldariData,
              element.name
            );
            selectedArmiesEnhancements = concatArrays(
              selectedArmiesEnhancements,
              aeldariEnhancements,
              element.name
            );
            break;
          case 10:
            selectedArmiesUnits = concatArrays(
              selectedArmiesUnits,
              daUnits,
              element.name
            );
            selectedArmiesEnhancements = concatArrays(
              selectedArmiesEnhancements,
              daEnhancements,
              element.name
            );
            break;
          case 11:
            selectedArmiesUnits = concatArrays(
              selectedArmiesUnits,
              dgUnits,
              element.name
            );
            selectedArmiesEnhancements = concatArrays(
              selectedArmiesEnhancements,
              dgEnhancements,
              element.name
            );
            break;
          case 12:
            selectedArmiesUnits = concatArrays(
              selectedArmiesUnits,
              deathWatchUnits,
              element.name
            );
            selectedArmiesEnhancements = concatArrays(
              selectedArmiesEnhancements,
              deathWatchEnhancements,
              element.name
            );
            break;
          case 13:
            selectedArmiesUnits = concatArrays(
              selectedArmiesUnits,
              drukhariUnits,
              element.name
            );
            selectedArmiesEnhancements = concatArrays(
              selectedArmiesEnhancements,
              drukhariEnhancements,
              element.name
            );
            break;
          case 14:
            selectedArmiesUnits = concatArrays(
              selectedArmiesUnits,
              gscUnits,
              element.name
            );
            selectedArmiesEnhancements = concatArrays(
              selectedArmiesEnhancements,
              gsxEnhancements,
              element.name
            );
            break;
          case 15:
            selectedArmiesUnits = concatArrays(
              selectedArmiesUnits,
              gkUnits,
              element.name
            );
            selectedArmiesEnhancements = concatArrays(
              selectedArmiesEnhancements,
              gkEnhancements,
              element.name
            );
            break;
          case 16:
            selectedArmiesUnits = concatArrays(
              selectedArmiesUnits,
              ikUnits,
              element.name
            );
            selectedArmiesEnhancements = concatArrays(
              selectedArmiesEnhancements,
              ikEnhancements,
              element.name
            );
            break;
          case 17:
            selectedArmiesUnits = concatArrays(
              selectedArmiesUnits,
              necronsUnits,
              element.name
            );
            selectedArmiesEnhancements = concatArrays(
              selectedArmiesEnhancements,
              necronsEnhancements,
              element.name
            );
            break;
          case 18:
            selectedArmiesUnits = concatArrays(
              selectedArmiesUnits,
              agnetsUnits,
              element.name
            );
            selectedArmiesEnhancements = concatArrays(
              selectedArmiesEnhancements,
              agnetsEnhancements,
              element.name
            );
            break;
          case 19:
            selectedArmiesUnits = concatArrays(
              selectedArmiesUnits,
              orksUnits,
              element.name
            );
            selectedArmiesEnhancements = concatArrays(
              selectedArmiesEnhancements,
              orksEnhancements,
              element.name
            );
            break;
          case 20:
            selectedArmiesUnits = concatArrays(
              selectedArmiesUnits,
              smUnits,
              element.name
            );
            selectedArmiesEnhancements = concatArrays(
              selectedArmiesEnhancements,
              smEnhancements,
              element.name
            );
            break;
          case 21:
            selectedArmiesUnits = concatArrays(
              selectedArmiesUnits,
              spaceWolvesUnits,
              element.name
            );
            selectedArmiesEnhancements = concatArrays(
              selectedArmiesEnhancements,
              spaceWolvesEnhancements,
              element.name
            );
            break;
          case 22:
            selectedArmiesUnits = concatArrays(
              selectedArmiesUnits,
              tauUnits,
              element.name
            );
            selectedArmiesEnhancements = concatArrays(
              selectedArmiesEnhancements,
              tauEnhancements,
              element.name
            );
            break;
          case 23:
            selectedArmiesUnits = concatArrays(
              selectedArmiesUnits,
              tsUnits,
              element.name
            );
            selectedArmiesEnhancements = concatArrays(
              selectedArmiesEnhancements,
              tsEnhancements,
              element.name
            );
            break;
          case 24:
            selectedArmiesUnits = concatArrays(
              selectedArmiesUnits,
              tyranidsUnits,
              element.name
            );
            selectedArmiesEnhancements = concatArrays(
              selectedArmiesEnhancements,
              tyranidsEnhancements,
              element.name
            );
            break;
          case 25:
            selectedArmiesUnits = concatArrays(
              selectedArmiesUnits,
              votannUnits,
              element.name
            );
            selectedArmiesEnhancements = concatArrays(
              selectedArmiesEnhancements,
              votannEnhancements,
              element.name
            );
            break;
          case 26:
            selectedArmiesUnits = concatArrays(
              selectedArmiesUnits,
              blackTemplarUnits,
              element.name
            );
            selectedArmiesEnhancements = concatArrays(
              selectedArmiesEnhancements,
              blackTemplarEnhancements,
              element.name
            );
            break;
          case 27:
            selectedArmiesUnits = concatArrays(
              selectedArmiesUnits,
              weUnits,
              element.name
            );
            selectedArmiesEnhancements = concatArrays(
              selectedArmiesEnhancements,
              weEnhancements,
              element.name
            );
            break;
        }
      }
    });

    setSelectedArmiesData(selectedArmiesUnits);
    setSelectedEnhancements(selectedArmiesEnhancements);
    setShowCalculator(true);
  };

  if (showCalculator)
    return (
      <Calculator
        units={selectedArmiesData}
        enhancements={selectedEnhancements}
        title="Mixed"
      />
    );

  return (
    <div>
      <FormGroup>
        {armies.map((army) => (
          <FormControlLabel
            key={army.name}
            control={<Checkbox value={army.checked} />}
            label={army.name}
            onChange={() => handleCheckArmy(army)}
          />
        ))}
      </FormGroup>
      <Button onClick={selectArmiesDataSets}>Next</Button>
    </div>
  );
};
