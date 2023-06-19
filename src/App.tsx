import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Paper, TextField, Button, AppBar } from "@mui/material";

type Inputs = {
  example: string;
  exampleRequired: string;
};

export default function App() {
  const navigate = useNavigate();

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ height: "100vh" }}
    >
      <Grid xs={10}>
        <Paper elevation={3} sx={{ p: 4, height: "100vh" }}>
          <Button
            sx={{ m: 2 }}
            variant="contained"
            onClick={() => navigate("/cwe")}
          >
            Aeldari
          </Button>
          <Button
            sx={{ m: 2 }}
            variant="contained"
            onClick={() => navigate("/sisters")}
          >
            Sororitas
          </Button>
          <Button
            sx={{ m: 2 }}
            variant="contained"
            onClick={() => navigate("/riki")}
          >
            Riki
          </Button>
          <Button
            sx={{ m: 2 }}
            variant="contained"
            onClick={() => navigate("/custo")}
          >
            Custodes
          </Button>
          <Button
            sx={{ m: 2 }}
            variant="contained"
            onClick={() => navigate("/astra")}
          >
            Astra Militarum
          </Button>
          <Button
            sx={{ m: 2 }}
            variant="contained"
            onClick={() => navigate("/am")}
          >
            Admech
          </Button>
          <Button
            sx={{ m: 2 }}
            variant="contained"
            onClick={() => navigate("/sm_bt")}
          >
            Black Templars
          </Button>
          <Button
            sx={{ m: 2 }}
            variant="contained"
            onClick={() => navigate("/sm_ba")}
          >
            Blood Angels
          </Button>
          <Button
            sx={{ m: 2 }}
            variant="contained"
            onClick={() => navigate("/chaos_daemons")}
          >
            Daemons
          </Button>
          <Button
            sx={{ m: 2 }}
            variant="contained"
            onClick={() => navigate("/csm")}
          >
            CSM
          </Button>
          <Button
            sx={{ m: 2 }}
            variant="contained"
            onClick={() => navigate("/drukhari")}
          >
            Drukhari
          </Button>
          <Button
            sx={{ m: 2 }}
            variant="contained"
            onClick={() => navigate("/sm_da")}
          >
            Dark Angels
          </Button>
          <Button
            sx={{ m: 2 }}
            variant="contained"
            onClick={() => navigate("/sm_dw")}
          >
            Death Watch
          </Button>
          <Button
            sx={{ m: 2 }}
            variant="contained"
            onClick={() => navigate("/sm")}
          >
            Space Marines
          </Button>

          <Button
            sx={{ m: 2 }}
            variant="contained"
            onClick={() => navigate("/we")}
          >
            World Eaters
          </Button>

          <Button
            sx={{ m: 2 }}
            variant="contained"
            onClick={() => navigate("/votann")}
          >
            Votann
          </Button>

          <Button
            sx={{ m: 2 }}
            variant="contained"
            onClick={() => navigate("/tyranids")}
          >
            Tyranids
          </Button>

          <Button
            sx={{ m: 2 }}
            variant="contained"
            onClick={() => navigate("/ts")}
          >
            TS
          </Button>

          <Button
            sx={{ m: 2 }}
            variant="contained"
            onClick={() => navigate("/tau")}
          >
            Tau
          </Button>

          <Button
            sx={{ m: 2 }}
            variant="contained"
            onClick={() => navigate("/sm_sw")}
          >
            Space Wolves
          </Button>

          <Button
            sx={{ m: 2 }}
            variant="contained"
            onClick={() => navigate("/orks")}
          >
            Orks
          </Button>

          <Button
            sx={{ m: 2 }}
            variant="contained"
            onClick={() => navigate("/necrons")}
          >
            Necrons
          </Button>

          <Button
            sx={{ m: 2 }}
            variant="contained"
            onClick={() => navigate("/ik")}
          >
            IK
          </Button>

          <Button
            sx={{ m: 2 }}
            variant="contained"
            onClick={() => navigate("/gsc")}
          >
            GSC
          </Button>

          <Button
            sx={{ m: 2 }}
            variant="contained"
            onClick={() => navigate("/sm_gk")}
          >
            GK
          </Button>

          <Button
            sx={{ m: 2 }}
            variant="contained"
            onClick={() => navigate("/dg")}
          >
            DG
          </Button>

          <Button
            sx={{ m: 2 }}
            variant="contained"
            onClick={() => navigate("/sm_agents")}
          >
            Agents
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
}
