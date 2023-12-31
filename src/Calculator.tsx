import {
  Autocomplete,
  Button,
  FormControl,
  InputLabel,
  ListSubheader,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import * as React from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useNavigate } from "react-router-dom";
import { RoosterFormatter } from "./RoosterFormatter";

const { v4: uuidv4 } = require("uuid");

export const Calculator = ({
  enhancements,
  units,
  title,
}: {
  enhancements: any;
  units: any;
  title: string;
}) => {
  const [roster, setRoster] = React.useState<any[]>([]);
  const [unitId, setUnitId] = React.useState("");
  const [enhancementId, setEnhancementId] = React.useState("");
  const [usedEnhanced, setUsedEnhanced] = React.useState<any[]>([]);
  const [points, setPoints] = React.useState(0);
  const [unitOptions, setUnitOptions] = React.useState("");
  const navigate = useNavigate();

  const reset = () => {
    setRoster([]);
    setUnitId("");
    setEnhancementId("");
    setUsedEnhanced([]);
    setPoints(0);
    setUnitOptions("");
  };

  const getMenuItems = () => {
    return units
      .sort((a: any, b: any) => a?.category - b?.category)
      .map((item: any) => {
        if (item?.id === "category") {
          return (
            <ListSubheader key={item.id + item.category}>
              {item.category}
            </ListSubheader>
          );
        }
        return (
          <MenuItem
            key={item.id}
            value={item.id}
          >{`${item.models} ${item.name} [${item.points}pts]`}</MenuItem>
        );
      });
  };

  const getEnhancementItems = () => {
    return enhancements
      .sort((a: any, b: any) => a?.category - b?.category)
      .map((item: any) => {
        if (item?.id === "category") {
          return (
            <ListSubheader key={item.id + item.category}>
              {item.category}
            </ListSubheader>
          );
        }
        const isItemUsed = usedEnhanced.find(
          (enhancement) => enhancement === item.id
        );
        if (!isItemUsed)
          return (
            <MenuItem key={item.id} value={item.id}>
              {`${item.name} [${item.points}pts]`}
            </MenuItem>
          );
      });
  };

  const handleAddUnit = (id: any) => {
    if (+id > 0) {
      const rosterCopy = [...roster];
      const unit = units.find((item: any) => item.id === id);
      const enhancement = enhancements.find(
        (enhancement: any) => enhancement.id === +enhancementId
      );
      const overallCost = (unit?.points ?? 0) + (enhancement?.points ?? 0);

      setRoster([
        ...rosterCopy,
        {
          ...unit,
          points: overallCost,
          enhancementId,
          enhancementName: enhancement?.name,
          rosterUnitId: uuidv4(),
          unitOptions,
        },
      ]);
      if (enhancementId) {
        setUsedEnhanced((prevValue) => [...prevValue, enhancementId]);
      }
    }
    setEnhancementId("");
  };

  const removeUnit = (uuid: any) => {
    const index = roster.findIndex((item) => item.rosterUnitId === uuid);
    if (index !== -1) {
      const unit = roster[index];
      if (+unit.enhancementId > 0) {
        const usedEnhancementIndex = usedEnhanced.findIndex(
          (id) => id === +unit.enhancementId
        );
        const usedEnhancedCopy = [...usedEnhanced];
        usedEnhancedCopy.splice(usedEnhancementIndex, 1);
        setUsedEnhanced(usedEnhancedCopy);
      }
      const rosterCopy = [...roster];
      rosterCopy.splice(index, 1);
      setRoster(rosterCopy);
    }
  };

  const UnitRow = ({ unit }: { unit: any }) => {
    return (
      <Grid
        container
        alignItems="center"
        borderBottom={0.5}
        borderColor="rgba(0,0,0,0.3)"
        pb={1}
        marginX={3}
      >
        <Grid xs={3} md={3}>
          <Typography>
            <strong>{`${unit?.models} ${unit?.name}`}</strong>
          </Typography>
        </Grid>
        <Grid xs={4} md={2}>
          {unit.enhancementName ?? ""}
        </Grid>
        <Grid xs={2} md={1}>
          {`[${unit?.points}pts]`}
        </Grid>
        <Grid xs={2} md={1}>
          <Button onClick={() => removeUnit(unit.rosterUnitId)}>Remove</Button>
        </Grid>
        <Grid xs={1} md={4}></Grid>
        <Grid xs={2}></Grid>
        <Grid xs={2}>
          <Typography variant="subtitle2">Options:</Typography>
        </Grid>
        <Grid xs={8}>
          <Typography variant="caption">
            {unit?.unitOptions.length > 0 ? unit?.unitOptions : "-"}
          </Typography>
        </Grid>
      </Grid>
    );
  };

  React.useEffect(() => {
    const unitPoints = roster.reduce((acc: number, item: any) => {
      return (acc += item.points);
    }, 0);
    setPoints(unitPoints);
  }, [roster]);

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid xs={12} md={1}>
        <Button onClick={() => navigate("/")}>Home</Button>
      </Grid>
      <Grid xs={12} md={1}>
        <Button onClick={() => reset()}>Reset</Button>
      </Grid>
      <Grid xs={12} md={10}>
        <Typography variant="h3">{`${title} - ${points}/2000`}</Typography>
      </Grid>
      <Grid xs={12} md={4}>
        <Autocomplete
          id="grouped-units"
          options={units.sort((a: any, b: any) => a?.category - b?.category)}
          groupBy={(option: any) => option?.category}
          getOptionLabel={(item) =>
            `${item.models} ${item.name} [${item.points}pts]`
          }
          onChange={(event: any, newValue: any) => {
            setUnitId(newValue?.id ?? 0);
          }}
          renderInput={(params) => <TextField {...params} label="Units" />}
          sx={{ m: 1, width: "90%" }}
        />
      </Grid>
      <Grid xs={12} md={4}>
        <FormControl sx={{ m: 1, width: "90%" }}>
          <InputLabel id="label-ENHANCEMENTS">ENHANCEMENTS</InputLabel>
          <Select
            labelId="label-ENHANCEMENTS"
            id="ENHANCEMENTS"
            label="ENHANCEMENTS"
            value={enhancementId}
            onChange={(e) => setEnhancementId(e.target.value)}
          >
            {getEnhancementItems()}
          </Select>
        </FormControl>
      </Grid>
      <Grid xs={12} md={2}>
        <div>
          <TextField
            sx={{ m: 1, width: "90%" }}
            label="Options"
            id="outlined-size-normal"
            value={unitOptions}
            onChange={(e) => setUnitOptions(e.target.value)}
          />
        </div>
      </Grid>
      <Grid xs={12} md={2} mb={2}>
        <Button
          sx={{ m: 2 }}
          variant="contained"
          onClick={() => handleAddUnit(unitId)}
        >
          Add Unit
        </Button>
      </Grid>
      <Grid xs={12} mb={3} ml={2}>
        <Typography variant="h5">Roster:</Typography>
      </Grid>
      <Grid xs={12} mb={3}>
        {roster.map((unit) => (
          <UnitRow unit={unit} key={unit.rosterUnitId} />
        ))}
      </Grid>
      <Grid xs={12} md={4}>
        <Typography>Roster Text: </Typography>
      </Grid>
      <Grid xs={12} md={8}>
        <RoosterFormatter rooster={roster} />
      </Grid>
    </Grid>
  );
};
