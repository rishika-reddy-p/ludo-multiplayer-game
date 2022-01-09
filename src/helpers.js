import {
  COLORS,
  RED_PATH,
  YELLOW_PATH,
  GREEN_PATH,
  BLUE_PATH,
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
