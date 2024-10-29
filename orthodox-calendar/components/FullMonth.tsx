import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { monthBoxHeight } from "@/constants/SIZES";

const monthBoxWidth = monthBoxHeight * 1.618;

const FullMonth = ({ title }) => {
  return (
    <View style={styles.box}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.allDays}></View>
    </View>
  );
};

export default FullMonth;

const styles = StyleSheet.create({
  box: {
    height: monthBoxHeight,
    width: monthBoxWidth,
    gap: 10,
    paddingVertical: 10,
  },
  title: {
    textAlign: "center",
    color: "rgba(255,255,255,.4)",
    fontSize: 20,
    fontFamily: "Nunito_500Medium",
  },
  allDays: {},
});
