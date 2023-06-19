import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Paper, TextField, Button, AppBar, Typography } from "@mui/material";
import styled from "@emotion/styled";

const MenuButton = styled(Button)(
  () => `
  width: 200px;
  margin: 8px;
`
);

export default function App() {
  const navigate = useNavigate();

  return (
    <Grid container justifyContent="center" alignItems="center" sx={{ p: 8 }}>
      <Grid xs={12} sx={{ mb: 4 }}>
        <Typography variant="h4" textAlign="center">
          10ed Calculator
        </Typography>
      </Grid>
      <MenuButton variant="contained" onClick={() => navigate("/cwe")}>
        Aeldari
      </MenuButton>

      <MenuButton variant="contained" onClick={() => navigate("/sisters")}>
        Sororitas
      </MenuButton>

      <MenuButton variant="contained" onClick={() => navigate("/riki")}>
        Riki
      </MenuButton>
      <MenuButton variant="contained" onClick={() => navigate("/custo")}>
        Custodes
      </MenuButton>

      <MenuButton variant="contained" onClick={() => navigate("/astra")}>
        Astra Militarum
      </MenuButton>
      <MenuButton variant="contained" onClick={() => navigate("/am")}>
        Admech
      </MenuButton>
      <MenuButton variant="contained" onClick={() => navigate("/sm_bt")}>
        Black Templars
      </MenuButton>
      <MenuButton variant="contained" onClick={() => navigate("/sm_ba")}>
        Blood Angels
      </MenuButton>
      <MenuButton
        variant="contained"
        onClick={() => navigate("/chaos_daemons")}
      >
        Daemons
      </MenuButton>

      <MenuButton variant="contained" onClick={() => navigate("/csm")}>
        CSM
      </MenuButton>
      <MenuButton variant="contained" onClick={() => navigate("/drukhari")}>
        Drukhari
      </MenuButton>
      <MenuButton variant="contained" onClick={() => navigate("/sm_da")}>
        Dark Angels
      </MenuButton>
      <MenuButton variant="contained" onClick={() => navigate("/sm_dw")}>
        Death Watch
      </MenuButton>
      <MenuButton variant="contained" onClick={() => navigate("/sm")}>
        Space Marines
      </MenuButton>

      <MenuButton variant="contained" onClick={() => navigate("/we")}>
        World Eaters
      </MenuButton>

      <MenuButton variant="contained" onClick={() => navigate("/votann")}>
        Votann
      </MenuButton>

      <MenuButton variant="contained" onClick={() => navigate("/tyranids")}>
        Tyranids
      </MenuButton>

      <MenuButton variant="contained" onClick={() => navigate("/ts")}>
        TS
      </MenuButton>

      <MenuButton variant="contained" onClick={() => navigate("/tau")}>
        Tau
      </MenuButton>

      <MenuButton variant="contained" onClick={() => navigate("/sm_sw")}>
        Space Wolves
      </MenuButton>

      <MenuButton variant="contained" onClick={() => navigate("/orks")}>
        Orks
      </MenuButton>

      <MenuButton variant="contained" onClick={() => navigate("/necrons")}>
        Necrons
      </MenuButton>

      <MenuButton variant="contained" onClick={() => navigate("/ik")}>
        IK
      </MenuButton>

      <MenuButton variant="contained" onClick={() => navigate("/gsc")}>
        GSC
      </MenuButton>

      <MenuButton variant="contained" onClick={() => navigate("/sm_gk")}>
        GK
      </MenuButton>

      <MenuButton variant="contained" onClick={() => navigate("/dg")}>
        DG
      </MenuButton>

      <MenuButton variant="contained" onClick={() => navigate("/sm_agents")}>
        Agents
      </MenuButton>

      <MenuButton variant="contained" onClick={() => navigate("/mix")}>
        Mix Armies
      </MenuButton>
    </Grid>
  );
}
