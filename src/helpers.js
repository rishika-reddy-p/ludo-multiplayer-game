import {
  COLORS,
  RED_PATH,
  YELLOW_PATH,
  GREEN_PATH,
  BLUE_PATH,
  RED_STARTING_POINT,
  BLUE_STARTING_POINT,
  YELLOW_STARTING_POINT,
  GREEN_STARTING_POINT,
  FOUR_PLAYER_INITIAL_STATE,
} from "./constants";

export const getColor = (rowIndex, colIndex) => {
  if (rowIndex < 4 && colIndex < 4) {
    return COLORS.RED;
  }
  if (rowIndex > 6 && colIndex > 6) {
    return COLORS.BLUE;
  }
  if (rowIndex > 6 && colIndex < 4) {
    return COLORS.GREEN;
  }
  if (rowIndex < 4 && colIndex > 6) {
    return COLORS.YELLOW;
  }
  return COLORS.WHITE;
};

export const getSpecialStyles = (rowIndex, colIndex) => {
  if (rowIndex === 5 && colIndex === 5) {
    return {
      backgroundImage: "linear-gradient(to right, red, yellow, green, blue)",
    };
  }
};

export const getPath = (color) => {
  switch (color) {
    case COLORS.RED:
      return RED_PATH;
    case COLORS.YELLOW:
      return YELLOW_PATH;
    case COLORS.GREEN:
      return GREEN_PATH;
    case COLORS.BLUE:
      return BLUE_PATH;
    default:
      return [];
  }
};

export const getCurrentTurnUser = () => {
  const tempUserDetails = localStorage.getItem("currentTurn");
  if (tempUserDetails) {
    return tempUserDetails;
  } else {
    return null;
  }
};

export const getStartingPoint = (color) => {
  switch (color) {
    case COLORS.RED:
      return RED_STARTING_POINT;
    case COLORS.YELLOW:
      return YELLOW_STARTING_POINT;
    case COLORS.GREEN:
      return GREEN_STARTING_POINT;
    case COLORS.BLUE:
      return BLUE_STARTING_POINT;
    default:
      return { x: 0, y: 0 };
  }
};

export const getHomePoint = (chipId) => {
  let homePoint = { x: 0, y: 0 };
  FOUR_PLAYER_INITIAL_STATE.forEach((chip) => {
    if (chip.id === chipId) {
      homePoint.x = chip.x;
      homePoint.y = chip.y;
    }
  });
  return homePoint;
};
