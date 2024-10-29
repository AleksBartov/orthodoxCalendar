import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { monthBoxHeight } from "@/constants/SIZES";
import { myWhite } from "@/constants/Colors";
import { daysPositionJan } from "@/constants/data";
import Animated from "react-native-reanimated";
import DayBox from "./DayBox";

const { width } = Dimensions.get("window");

const monthBoxWidth = monthBoxHeight * 1.618;
const dayBoxWidth = monthBoxWidth / 9;

const FullMonth = ({ title }) => {
  return (
    <View style={styles.box}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.allDays}>
        {daysPositionJan.map((w, i) => {
          return (
            <View style={styles.row} key={i}>
              {w.map((d, j) => {
                return <DayBox key={`${i}+${j}+${d.name}`} i={i} j={j} d={d} />;
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
