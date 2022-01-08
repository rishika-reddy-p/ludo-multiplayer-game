import React from "react";
import { Grid } from "@mui/material";
import { getColor } from "../../helpers";

const BOARD_CONTAINER_STYLE = {
  border: "1px solid black",
  height: "772px",
  width: "772px",
};

const squares = new Array(11).fill(0);

const GameBoard = () => {
  return (
    <Grid container direction="column" sx={BOARD_CONTAINER_STYLE}>
      {squares.map((_rowSquare, rowIndex) => {
        return (
          <Grid container direction="row">
            {squares.map((_columnSquare, columnIndex) => {
              console.log(rowIndex, columnIndex);
              return (
                <Grid
                  sx={{
                    height: "70px",
                    width: "70px",
                    backgroundColor: getColor(rowIndex, columnIndex),
                    boxShadow: "inset 0px 0px 0px 1px black",
                  }}
                ></Grid>
              );
            })}
          </Grid>
        );
      })}
    </Grid>
  );
};

export default GameBoard;
