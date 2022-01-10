export const COLORS = {
  RED: "red",
  GREEN: "green",
  BLUE: "blue",
  YELLOW: "yellow",
  WHITE: "white",
};

export const RED_CHIPS = [
  {
    color: COLORS.RED,
    x: 1,
    y: 1,
    id: "R1",
  },
  {
    color: COLORS.RED,
    x: 2,
    y: 1,
    id: "R2",
  },
  {
    color: COLORS.RED,
    x: 1,
    y: 2,
    id: "R3",
  },
  {
    color: COLORS.RED,
    x: 2,
    y: 2,
    id: "R4",
  },
];

export const YELLOW_CHIPS = [
  {
    color: COLORS.YELLOW,
    x: 1,
    y: 8,
    id: "Y1",
  },
  {
    color: COLORS.YELLOW,
    x: 2,
    y: 8,
    id: "Y2",
  },
  {
    color: COLORS.YELLOW,
    x: 1,
    y: 9,
    id: "Y3",
  },
  {
    color: COLORS.YELLOW,
    x: 2,
    y: 9,
    id: "Y4",
  },
];

export const GREEN_CHIPS = [
  {
    color: COLORS.GREEN,
    x: 8,
    y: 1,
    id: "G1",
  },
  {
    color: COLORS.GREEN,
    x: 9,
    y: 1,
    id: "G2",
  },
  {
    color: COLORS.GREEN,
    x: 8,
    y: 2,
    id: "G3",
  },
  {
    color: COLORS.GREEN,
    x: 9,
    y: 2,
    id: "G4",
  },
];

export const BLUE_CHIPS = [
  {
    color: COLORS.BLUE,
    x: 8,
    y: 8,
    id: "B1",
  },
  {
    color: COLORS.BLUE,
    x: 9,
    y: 8,
    id: "B2",
  },
  {
    color: COLORS.BLUE,
    x: 8,
    y: 9,
    id: "B3",
  },
  {
    color: COLORS.BLUE,
    x: 9,
    y: 9,
    id: "B4",
  },
];

export const TWO_PLAYER_INITIAL_STATE = [...RED_CHIPS, ...BLUE_CHIPS];

export const THREE_PLAYER_INITIAL_STATE = [
  ...RED_CHIPS,
  ...GREEN_CHIPS,
  ...BLUE_CHIPS,
];

export const FOUR_PLAYER_INITIAL_STATE = [
  ...RED_CHIPS,
  ...YELLOW_CHIPS,
  ...GREEN_CHIPS,
  ...BLUE_CHIPS,
];

export const RED_STARTING_POINT = { x: 4, y: 1 };

export const YELLOW_STARTING_POINT = { x: 1, y: 6 };

export const GREEN_STARTING_POINT = { x: 9, y: 4 };

export const BLUE_STARTING_POINT = { x: 6, y: 9 };

export const RED_PATH = [
  { x: 4, y: 1 },
  { x: 4, y: 2 },
  { x: 4, y: 3 },
  { x: 3, y: 4 },
  { x: 2, y: 4 },
  { x: 1, y: 4 },
  { x: 0, y: 4 },
  { x: 0, y: 5 },
  { x: 0, y: 6 },
  { x: 1, y: 6 },
  { x: 2, y: 6 },
  { x: 3, y: 6 },
  { x: 4, y: 7 },
  { x: 4, y: 8 },
  { x: 4, y: 9 },
  { x: 4, y: 10 },
  { x: 5, y: 10 },
  { x: 6, y: 10 },
  { x: 6, y: 9 },
  { x: 6, y: 8 },
  { x: 6, y: 7 },
  { x: 7, y: 6 },
  { x: 8, y: 6 },
  { x: 9, y: 6 },
  { x: 10, y: 6 },
  { x: 10, y: 5 },
  { x: 10, y: 4 },
  { x: 9, y: 4 },
  { x: 8, y: 4 },
  { x: 7, y: 4 },
  { x: 6, y: 3 },
  { x: 6, y: 2 },
  { x: 6, y: 1 },
  { x: 6, y: 0 },
  { x: 5, y: 0 },
  { x: 5, y: 1 },
  { x: 5, y: 2 },
  { x: 5, y: 3 },
  { x: 5, y: 4 },
];

// modify
export const YELLOW_PATH = [
  { x: 4, y: 1 },
  { x: 4, y: 2 },
  { x: 4, y: 3 },
  { x: 3, y: 4 },
  { x: 2, y: 4 },
  { x: 1, y: 4 },
  { x: 0, y: 4 },
  { x: 0, y: 5 },
  { x: 0, y: 6 },
  { x: 1, y: 6 },
  { x: 2, y: 6 },
  { x: 3, y: 6 },
  { x: 4, y: 7 },
  { x: 4, y: 8 },
  { x: 4, y: 9 },
  { x: 4, y: 10 },
  { x: 5, y: 10 },
  { x: 6, y: 10 },
  { x: 6, y: 9 },
  { x: 6, y: 8 },
  { x: 6, y: 7 },
  { x: 7, y: 6 },
  { x: 8, y: 6 },
  { x: 9, y: 6 },
  { x: 10, y: 6 },
  { x: 10, y: 5 },
  { x: 9, y: 5 },
  { x: 8, y: 5 },
  { x: 7, y: 5 },
  { x: 6, y: 5 },
];

// modify
export const GREEN_PATH = [
  { x: 4, y: 1 },
  { x: 4, y: 2 },
  { x: 4, y: 3 },
  { x: 3, y: 4 },
  { x: 2, y: 4 },
  { x: 1, y: 4 },
  { x: 0, y: 4 },
  { x: 0, y: 5 },
  { x: 0, y: 6 },
  { x: 1, y: 6 },
  { x: 2, y: 6 },
  { x: 3, y: 6 },
  { x: 4, y: 7 },
  { x: 4, y: 8 },
  { x: 4, y: 9 },
  { x: 4, y: 10 },
  { x: 5, y: 10 },
  { x: 6, y: 10 },
  { x: 6, y: 9 },
  { x: 6, y: 8 },
  { x: 6, y: 7 },
  { x: 7, y: 6 },
  { x: 8, y: 6 },
  { x: 9, y: 6 },
  { x: 10, y: 6 },
  { x: 10, y: 5 },
  { x: 9, y: 5 },
  { x: 8, y: 5 },
  { x: 7, y: 5 },
  { x: 6, y: 5 },
];

// modify
export const BLUE_PATH = [
  { x: 4, y: 1 },
  { x: 4, y: 2 },
  { x: 4, y: 3 },
  { x: 3, y: 4 },
  { x: 2, y: 4 },
  { x: 1, y: 4 },
  { x: 0, y: 4 },
  { x: 0, y: 5 },
  { x: 0, y: 6 },
  { x: 1, y: 6 },
  { x: 2, y: 6 },
  { x: 3, y: 6 },
  { x: 4, y: 7 },
  { x: 4, y: 8 },
  { x: 4, y: 9 },
  { x: 4, y: 10 },
  { x: 5, y: 10 },
  { x: 6, y: 10 },
  { x: 6, y: 9 },
  { x: 6, y: 8 },
  { x: 6, y: 7 },
  { x: 7, y: 6 },
  { x: 8, y: 6 },
  { x: 9, y: 6 },
  { x: 10, y: 6 },
  { x: 10, y: 5 },
  { x: 9, y: 5 },
  { x: 8, y: 5 },
  { x: 7, y: 5 },
  { x: 6, y: 5 },
];
