import React from "react";
import { Grid, Modal, Box, Typography } from "@mui/material";
import {
  getColor,
  getSpecialStyles,
  getPath,
  getHomePoint,
} from "../../helpers";
import {
  TWO_PLAYER_INITIAL_STATE,
  THREE_PLAYER_INITIAL_STATE,
  FOUR_PLAYER_INITIAL_STATE,
  modalContentsStyle,
} from "../../constants";
import SmartToyIcon from "@mui/icons-material/SmartToy";

const BOARD_CONTAINER_STYLE = {
  border: "1px solid black",
  height: "772px",
  width: "772px",
};

const squares = new Array(11).fill(0);

const GameBoard = ({
  playerCount,
  steps,
  player,
  setCurrentDiceValue,
  socket,
  roomId,
  userDetailsOfCurrentTurn,
  setUserDetailsOfCurrentTurn,
}) => {
  const [chips, setChips] = React.useState([]);
  const [isGameOver, setIsGameOver] = React.useState(false);
  const [winnerName, setWinnerName] = React.useState("");

  socket?.current?.on(
    "next-move",
    ({ currentTurn, state, gameOver, winner }) => {
      state && setChips(state);
      setUserDetailsOfCurrentTurn(currentTurn);
      gameOver && setIsGameOver(true);
      winner && setWinnerName(winner.name);
    }
  );

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

  const checkIfGameOver = (updatedChips, path) => {
    const currentPlayerChips = updatedChips.filter(
      (tempChip) => tempChip.color === player?.color
    );
    const endPoint = path[path.length - 1];
    const chipsThatReachedEndPoint = currentPlayerChips.filter(
      (currentPlayerChip) =>
        endPoint.x === currentPlayerChip.x && endPoint.y === currentPlayerChip.y
    );
    return chipsThatReachedEndPoint.length === 4;
  };

  const moveChip = (chip) => {
    const path = getPath(player?.color);
    let currentIndex = path.findIndex(
      (position) => position.x === chip.x && position.y === chip.y
    );
    // Add below condition to add '6' as the starter value for a chip
    // && steps == 6
    // if (currentIndex === -1) {
    // chip is at home
    //   currentIndex = 0;
    // }
    const newIndex = currentIndex + steps;
    if (newIndex < path.length) {
      const newPostion = path[newIndex];

      let tempChips = chips;
      tempChips = tempChips.map((tempChip) => {
        if (tempChip.id === chip.id) {
          return {
            ...tempChip,
            x: newPostion.x,
            y: newPostion.y,
          };
        } else if (
          tempChip.x === newPostion.x &&
          tempChip.y === newPostion.y &&
          player?.color !== tempChip.color
        ) {
          // kill
          const startingHomePoint = getHomePoint(tempChip.id);
          return {
            ...tempChip,
            x: startingHomePoint.x,
            y: startingHomePoint.y,
          };
        }
        return tempChip;
      });
      // check winner here
      setChips(tempChips);
      setCurrentDiceValue(0);

      socket?.current?.emit(
        "move-finished",
        {
          state: tempChips,
          room: roomId,
          currentTurn: userDetailsOfCurrentTurn,
          gameOver: checkIfGameOver(tempChips, path),
        },
        (error) => {
          console.log("error", error);
        }
      );
    } else {
      console.log("invalid throw - skipped turn");
    }
  };

  return (
    <Grid container direction="column" sx={BOARD_CONTAINER_STYLE}>
      <Modal open={isGameOver}>
        <Box sx={modalContentsStyle}>
          <Typography variant={"h3"}>{"GAME OVER!"}</Typography>
          {winnerName && (
            <Typography variant={"h5"}>
              {winnerName + " won the game!!"}
            </Typography>
          )}
        </Box>
      </Modal>
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
                          player?.color === chipInPosition.color &&
                          moveChip(chipInPosition);
                      }}
                    />
                  ) : null}
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
