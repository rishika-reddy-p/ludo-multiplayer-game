import { COLORS } from "./constants";

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
