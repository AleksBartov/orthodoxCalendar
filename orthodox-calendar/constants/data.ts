import { Dimensions } from "react-native";

export const actualMonth = 10;
export const actualDay = 4;
export const monthForScrollWidth = Dimensions.get("window").width * 0.45;

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
