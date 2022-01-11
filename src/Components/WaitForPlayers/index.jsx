import React from "react";
import { Grid, Typography } from "@mui/material";

const WaitForPlayers = ({ roomCode }) => {
  return (
    <Grid alignItems="center" justifyContent="center">
      <Typography>
        {"Share this room code with your friends to start the game!"}
      </Typography>
      <Typography>{roomCode}</Typography>
    </Grid>
  );
};

export default WaitForPlayers;
