import React from "react";
import { Grid } from "@mui/material";
import { getColor, getSpecialStyles, getPath } from "../../helpers";
import {
  TWO_PLAYER_INITIAL_STATE,
  THREE_PLAYER_INITIAL_STATE,
  FOUR_PLAYER_INITIAL_STATE,
} from "../../constants";
import SmartToyIcon from "@mui/icons-material/SmartToy";

const BOARD_CONTAINER_STYLE = {
  border: "1px solid black",
  height: "772px",
  width: "772px",
};

const squares = new Array(11).fill(0);

const GameBoard = ({ playerCount, steps, player, setCurrentDiceValue }) => {
  console.log("player", player);
  const [chips, setChips] = React.useState([]);

  React.useEffect(() => {
    if (playerCount === 2) {
      setChips(TWO_PLAYER_INITIAL_STATE);
    } else if (playerCount === 3) {
      setChips(THREE_PLAYER_INITIAL_STATE);
    } else {
      setChips(FOUR_PLAYER_INITIAL_STATE);
    }
  }, [playerCount]);

  const getChipInPosition = (rowIndex, columnIndex) => {
    const chipsInPosition = chips.filter(
      (chip) => chip.x === rowIndex && chip.y === columnIndex
    );
    return chipsInPosition.length ? chipsInPosition[0] : null;
  };

  const moveChip = (chip) => {
    const path = getPath(player.color);
    let currentIndex = path.findIndex(
      (position) => position.x === chip.x && position.y === chip.y
    );
    // Add below condition to add '6' as the starter value for a chip
    // && steps == 6
    if (currentIndex === -1) {
      // chip is at home
      // setting starting position to 0
      currentIndex = 0;
    }
    const newIndex = currentIndex + steps;
    if (newIndex < path.length) {
      const newPostion = path[newIndex];
      console.log("new pos", newPostion);
      let tempChips = chips;
      tempChips = tempChips.map((tempChip) => {
        if (tempChip.id == chip.id) {
          return {
            ...tempChip,
            x: newPostion.x,
            y: newPostion.y,
          };
        }
        return tempChip;
      });
      console.log("tempChips", tempChips);
      // check winner
      setChips(tempChips);
      setCurrentDiceValue(0);
    } else {
      console.log("invalid throw - skipped turn");
    }
  };

  return (
    <Grid container direction="column" sx={BOARD_CONTAINER_STYLE}>
      {squares.map((_rowSquare, rowIndex) => {
        return (
          <Grid container direction="row">
            {squares.map((_columnSquare, columnIndex) => {
              const chipInPosition = getChipInPosition(rowIndex, columnIndex);
              return (
                <Grid
                  sx={{
                    height: "70px",
                    width: "70px",
                    backgroundColor: getColor(rowIndex, columnIndex),
                    boxShadow: "inset 0px 0px 0px 1px black",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    ...getSpecialStyles(rowIndex, columnIndex),
                  }}
                >
                  {chipInPosition ? (
                    <SmartToyIcon
                      fontSize="large"
                      sx={{
                        color: chipInPosition.color,
                        backgroundColor: "black",
                      }}
                      onClick={() => {
                        steps &&
                          player.color == chipInPosition.color &&
                          moveChip(chipInPosition);
                      }}
                    />
                  ) : (
                    // null
                    "x:" + rowIndex + "; y:" + columnIndex
                  )}
                </Grid>
              );
            })}
          </Grid>
        );
      })}
    </Grid>
  );
};

export default GameBoard;
