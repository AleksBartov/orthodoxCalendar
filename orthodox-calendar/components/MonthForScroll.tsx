import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { actualMonth, monthForScrollWidth } from "@/constants/data";

const MonthForScroll = ({ name, index }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.indicator}>
        {actualMonth === index + 1 ? "." : " "}
      </Text>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: monthForScrollWidth,
    height: 120,
  },
  indicator: {
    fontSize: 28,
    color: "#FFFFFF",
    fontWeight: "bold",
    textAlign: "center",
  },
  text: {
    fontSize: 28,
    color: "#FFFFFF",
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Nunito_800ExtraBold",
  },
});

export default MonthForScroll;
