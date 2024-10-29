import { Dimensions } from "react-native";

export const actualMonth = 10;
export const actualDay = 4;
export const monthForScrollWidth = Dimensions.get("window").width * 0.45;

export const daysPositionJan = [
  [
    { name: "пн", num: 1 },
    { name: "вт", num: 2 },
    { name: "ср", num: 3 },
    { name: "чт", num: 4 },
    { name: "пт", num: 5 },
    { name: "сб", num: 6 },
    { name: "вс", num: 7 },
  ],
  [
    { name: "пн", num: 8 },
    { name: "вт", num: 9 },
    { name: "ср", num: 10 },
    { name: "чт", num: 11 },
    { name: "пт", num: 12 },
    { name: "сб", num: 13 },
    { name: "вс", num: 14 },
  ],
  [
    { name: "пн", num: 15 },
    { name: "вт", num: 16 },
    { name: "ср", num: 17 },
    { name: "чт", num: 18 },
    { name: "пт", num: 19 },
    { name: "сб", num: 20 },
    { name: "вс", num: 21 },
  ],
  [
    { name: "пн", num: 22 },
    { name: "вт", num: 23 },
    { name: "ср", num: 24 },
    { name: "чт", num: 25 },
    { name: "пт", num: 26 },
    { name: "сб", num: 27 },
    { name: "вс", num: 28 },
  ],
  [
    { name: "пн", num: 29 },
    { name: "вт", num: 30 },
    { name: "ср", num: 31 },
  ],
];

export const daysAndMonthsAndYears = [
  {
    year: 2024,
    months: [
      {
        name: "Январь",
        duration: 31,
        days: [
          { dayName: "пн", dayNum: 1 },
          { dayName: "вт", dayNum: 2 },
          { dayName: "ср", dayNum: 3 },
          { dayName: "чт", dayNum: 4 },
          { dayName: "пт", dayNum: 5 },
          { dayName: "сб", dayNum: 6 },
          { dayName: "вс", dayNum: 7 },
          { dayName: "пн", dayNum: 8 },
          { dayName: "вт", dayNum: 9 },
          { dayName: "ср", dayNum: 10 },
          { dayName: "чт", dayNum: 11 },
          { dayName: "пт", dayNum: 12 },
        ],
      },
      {
        name: "Февраль",
        duration: 29,
        days: [
          { dayName: "чт", dayNum: 1 },
          { dayName: "пт", dayNum: 2 },
          { dayName: "сб", dayNum: 3 },
        ],
      },
      {
        name: "Март",
        duration: 31,
        days: [
          { dayName: "пт", dayNum: 1 },
          { dayName: "сб", dayNum: 2 },
          { dayName: "вс", dayNum: 3 },
        ],
      },
      {
        name: "Апрель",
        duration: 30,
        days: [
          { dayName: "пн", dayNum: 1 },
          { dayName: "вт", dayNum: 2 },
          { dayName: "ср", dayNum: 3 },
        ],
      },
      {
        name: "Май",
        duration: 31,
        days: [
          { dayName: "ср", dayNum: 1 },
          { dayName: "чт", dayNum: 2 },
          { dayName: "пт", dayNum: 3 },
        ],
      },
      {
        name: "Июнь",
        duration: 30,
        days: [
          { dayName: "сб", dayNum: 1 },
          { dayName: "вс", dayNum: 2 },
          { dayName: "пн", dayNum: 3 },
        ],
      },
      {
        name: "Июль",
        duration: 31,
        days: [
          { dayName: "пн", dayNum: 1 },
          { dayName: "вт", dayNum: 2 },
          { dayName: "ср", dayNum: 3 },
        ],
      },
      {
        name: "Август",
        duration: 31,
        days: [
          { dayName: "чт", dayNum: 1 },
          { dayName: "пт", dayNum: 2 },
          { dayName: "сб", dayNum: 3 },
        ],
      },
      {
        name: "Сентябрь",
        duration: 30,
        days: [
          { dayName: "вс", dayNum: 1 },
          { dayName: "пн", dayNum: 2 },
          { dayName: "вт", dayNum: 3 },
        ],
      },
      {
        name: "Октябрь",
        duration: 31,
        days: [
          { dayName: "вт", dayNum: 1 },
          { dayName: "ср", dayNum: 2 },
          { dayName: "чт", dayNum: 3 },
        ],
      },
      {
        name: "Ноябрь",
        duration: 30,
        days: [
          { dayName: "пт", dayNum: 1 },
          { dayName: "сб", dayNum: 2 },
          { dayName: "вс", dayNum: 3 },
        ],
      },
      {
        name: "Декабрь",
        duration: 31,
        days: [
          { dayName: "вс", dayNum: 1 },
          { dayName: "пн", dayNum: 2 },
          { dayName: "вт", dayNum: 3 },
        ],
      },
    ],
  },
];
