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
        </Paper>
      </Grid>
    </Grid>
  );
}
