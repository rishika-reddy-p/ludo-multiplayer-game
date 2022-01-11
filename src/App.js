import React from "react";
import logo from "./ludo.svg";
import "./App.css";
import {
  Grid,
  Typography,
  Button,
  TextField,
  Modal,
  Box,
  Tooltip,
} from "@mui/material";
import GameBoard from "./Components/GameBoard";
import { SERVER_URL, modalContentsStyle } from "./constants";
import Dice from "react-dice-roll";
import { io } from "socket.io-client";
import useSockets from "./Hooks/useSockets";

export var socket;

const App = () => {
  socket = React.useRef(null);

  const [currentDiceValue, setCurrentDiceValue] = React.useState(0);

  const [userDetailsOfCurrentTurn, setUserDetailsOfCurrentTurn] =
    React.useState({
      name: "",
      color: "",
      id: "",
    });
  const [name, setName] = React.useState("");
  const [roomCode, setRoomCode] = React.useState("");
  const [newlyCreatedRoomCode, setNewlyCreatedRoomCode] = React.useState("");
  const [waiting, setWaiting] = React.useState(false);
  const [playerCount, setPlayerCount] = React.useState(0);
  const [showGameBoard, setShowGameBoard] = React.useState(false);
  const { joinRoom } = useSockets(
    roomCode,
    socket,
    name,
    playerCount,
    setPlayerCount,
    setUserDetailsOfCurrentTurn
  );

  React.useEffect(() => {
    if (playerCount >= 2) {
      setShowGameBoard(true);
    }
  }, [playerCount]);

  const createRoom = () => {
    socket.current = io(SERVER_URL);

    socket.current.on("connect", () => {
      setNewlyCreatedRoomCode(socket.current.id);
      if (socket.current.id) {
        setWaiting(true);
        socket.current.emit(
          "join",
          { room: socket.current.id, name: name },
          (error) => {
            console.log("error", error);
          }
        );
        socket.current.on(
          "currentUserData",
          ({ newUser, numberOfUsers, currentTurn }) => {
            numberOfUsers && setPlayerCount(numberOfUsers);
            currentTurn && setUserDetailsOfCurrentTurn(currentTurn);
          }
        );
      }
    });
  };

  return (
    <Grid container direction="row" className="App">
      {!showGameBoard && (
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          sx={{ height: 400 }}
        >
          <Grid container alignItems="center" justifyContent="center">
            <img src={logo} className="App-logo" alt="logo" />
          </Grid>
          <TextField
            label="Name"
            color="secondary"
            autoFocus
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <Grid container alignItems="center" justifyContent="center">
            <Tooltip
              open={!name}
              arrow
              title={"Please enter your name"}
              placement="right"
            >
              <Button
                disabled={!name}
                variant="contained"
                color="secondary"
                onClick={createRoom}
              >
                CREATE A ROOM
              </Button>
            </Tooltip>
            <Modal open={waiting}>
              <Box sx={modalContentsStyle}>
                <Typography>
                  {"Share this room code with your friends to start the game!"}
                </Typography>
                <Typography variant={"h3"}>{newlyCreatedRoomCode}</Typography>
              </Box>
            </Modal>
          </Grid>
          OR
          <Grid container alignItems="center" justifyContent="center">
            <TextField
              label="Game room code"
              color="secondary"
              onChange={(e) => {
                setRoomCode(e.target.value);
              }}
              sx={{ mr: 2 }}
            />
            <Tooltip
              placement="right"
              arrow
              open={!name || !roomCode}
              title={"Please enter your name and room code"}
            >
              <Button
                disabled={!name || !roomCode}
                variant="contained"
                color="secondary"
                size="large"
                onClick={joinRoom}
              >
                JOIN A ROOM
              </Button>
            </Tooltip>
          </Grid>
        </Grid>
      )}

      {showGameBoard && (
        <>
          <Grid
            container
            direction="row"
            justifyContent="center"
            sx={{ mt: 2 }}
          >
            <img src={logo} className="App-logo" alt="logo" />
            {name == userDetailsOfCurrentTurn?.name && (
              <Dice
                onRoll={(value) => {
                  setCurrentDiceValue(value);
                }}
                size={100}
                // disabled={}
              />
            )}
          </Grid>
          <Grid
            container
            direction="column"
            sx={{ alignItems: "center", justifyContent: "center" }}
          >
            <Typography variant="h5">
              {userDetailsOfCurrentTurn.name +
                "'s move" +
                "(" +
                userDetailsOfCurrentTurn.color +
                ")"}
            </Typography>
            <GameBoard
              playerCount={2}
              steps={currentDiceValue}
              player={userDetailsOfCurrentTurn}
              setCurrentDiceValue={setCurrentDiceValue}
              socket={socket}
              roomId={roomCode ? roomCode : newlyCreatedRoomCode}
              userDetailsOfCurrentTurn={userDetailsOfCurrentTurn}
              setUserDetailsOfCurrentTurn={setUserDetailsOfCurrentTurn}
            />
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default App;
