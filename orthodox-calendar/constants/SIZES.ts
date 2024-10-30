import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const HEADER_HEIGHT = height * 0.07;

// month dimensions
export const MONTH_HEIGHT = height * 0.25;
export const MONTH_WIDTH = MONTH_HEIGHT * 1.618;

// day dimensions
export const DAY_HEIGHT = MONTH_HEIGHT / 6;
export const DAY_WIDTH = MONTH_WIDTH / 7;

export const BORDER_RADIUS = 20;
export const GAP = 10;
