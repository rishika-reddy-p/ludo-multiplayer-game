import { SERVER_URL } from "./../constants";
import { io } from "socket.io-client";

const useSockets = (
  roomId,
  socket,
  name,
  playerCount,
  setPlayerCount,
  setUserDetailsOfCurrentTurn
) => {
  const joinRoom = () => {
    //   creating a connection
    socket.current = io.connect(SERVER_URL, {
      forceNew: true,
    });

    socket.current.emit("join", { room: roomId, name: name }, (error) => {
      console.log("error", error);
    });

    socket.current.on(
      "currentUserData",
      ({ newUser, numberOfUsers, currentTurn }) => {
        numberOfUsers && setPlayerCount(numberOfUsers);
        currentTurn && setUserDetailsOfCurrentTurn(currentTurn);
      }
    );
  };

  return { joinRoom };
};

export default useSockets;
