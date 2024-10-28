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
    borderColor: "#6379ff",
    borderWidth: 1,
    width: monthForScrollWidth,
  },
  indicator: {
    fontSize: 28,
    color: "#FFFFFF",
    fontWeight: "bold",
    textAlign: "center",
  },
  text: {
    fontSize: 24,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});

export default MonthForScroll;
