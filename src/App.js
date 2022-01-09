import React from "react";
import logo from "./ludo.svg";
import "./App.css";
import { Grid, Typography } from "@mui/material";
import GameBoard from "./Components/GameBoard";
import { COLORS } from "./constants";
import Dice from "react-dice-roll";

const App = () => {
  const currentPlayer = { name: "Rishika", color: COLORS.RED };
  const [currentDiceValue, setCurrentDiceValue] = React.useState(0);

  return (
    <Grid container direction="row" className="App">
      {/* <Grid container direction="row" sx={{ justifyContent: "center" }}>
        <img src={logo} className="App-logo" alt="logo" />
      </Grid> */}
      <Grid container direction="row" justifyContent="center" sx={{ mt: 2 }}>
        <img src={logo} className="App-logo" alt="logo" />
        <Dice
          onRoll={(value) => {
            console.log("dice value", value);
            setCurrentDiceValue(value);
          }}
          size={100}
        />
      </Grid>
      <Grid
        container
        direction="column"
        sx={{ alignItems: "center", justifyContent: "center" }}
      >
        <Typography variant="h5">{currentPlayer.name + "'s move"}</Typography>
        <GameBoard
          playerCount={2}
          steps={currentDiceValue}
          player={currentPlayer}
          setCurrentDiceValue={setCurrentDiceValue}
        />
      </Grid>
    </Grid>
  );
};

export default App;
