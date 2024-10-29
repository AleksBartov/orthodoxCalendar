import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { monthBoxHeight } from "@/constants/SIZES";
import { myWhite } from "@/constants/Colors";

const { width } = Dimensions.get("window");

const monthBoxWidth = monthBoxHeight * 1.618;
const dayBoxWidth = monthBoxWidth / 9;

const daysPositionJan = [
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

const FullMonth = ({ title }) => {
  return (
    <View style={styles.box}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.allDays}>
        {daysPositionJan.map((w, i) => {
          return (
            <View style={styles.row} key={i}>
              {w.map((d, j) => {
                return (
                  <View
                    style={[
                      styles.dayBox,
                      {
                        transform: [
                          {
                            translateX: j * dayBoxWidth,
                          },
                          { translateY: i * dayBoxWidth },
                        ],
                      },
                    ]}
                    key={j}
                  >
                    <Text style={styles.dayNum}>{d.num}</Text>
                  </View>
                );
              })}
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default FullMonth;

const styles = StyleSheet.create({
  box: {
    maxHeight: monthBoxHeight,
    width: monthBoxWidth,
    gap: 2,
    paddingVertical: 10,
  },
  title: {
    textAlign: "center",
    color: myWhite,
    opacity: 0.4,
    fontSize: 20,
    fontFamily: "Nunito_500Medium",
  },
  allDays: {},
  row: {
    flexDirection: "row",
    position: "absolute",
    left: -(width - monthBoxWidth) + 20,
  },
  dayBox: {
    width: dayBoxWidth,
    padding: 4,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  dayNum: {
    color: myWhite,
    fontSize: 20,
    fontFamily: "Nunito_500Medium",
  },
});
