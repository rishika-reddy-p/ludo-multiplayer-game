import logo from "./ludo.svg";
import "./App.css";
import { Grid } from "@mui/material";
import GameBoard from "./Components/GameBoard";

function App() {
  return (
    <Grid container className="App">
      <Grid container direction="row" sx={{ justifyContent: "center" }}>
        <img src={logo} className="App-logo" alt="logo" />
      </Grid>
      <Grid container sx={{ alignItems: "center", justifyContent: "center" }}>
        <GameBoard />
      </Grid>
    </Grid>
  );
}

export default App;
