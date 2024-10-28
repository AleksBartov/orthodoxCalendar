import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { actualDay } from "@/constants/data";
const SIZE = 60;

const DayForScroll = ({ name, num, index }) => {
  return (
    <View
      style={{
        gap: 10,
        width: SIZE,
        height: SIZE * 1.618,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: actualDay === index + 1 ? "#6379ff" : "transparent",
        borderRadius: SIZE / 2,
      }}
    >
      <Text
        style={{
          color: "rgba(255,255,255,0.3)",
          fontFamily: "Nunito_500Medium",
          fontSize: 17,
        }}
      >
        {name}
      </Text>
      <Text
        style={{
          color: "rgba(255,255,255,1)",
          fontFamily: "Nunito_500Medium",
          fontSize: 20,
        }}
      >
        {num}
      </Text>
    </View>
  );
};

export default DayForScroll;

const styles = StyleSheet.create({});
