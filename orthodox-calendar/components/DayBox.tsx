import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { monthBoxHeight } from "@/constants/SIZES";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { myWhite } from "@/constants/Colors";
const { width } = Dimensions.get("window");

const monthBoxWidth = monthBoxHeight * 1.618;
const dayBoxWidth = monthBoxWidth / 9;

const DayBox = ({ i, j, d }) => {
  const pressed = useSharedValue(false);

  const tap = Gesture.Tap().onEnd(() => {
    pressed.value = true;
  });

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: pressed.value ? withTiming(100) : j * dayBoxWidth,
      },
      { translateY: pressed.value ? withTiming(200) : i * dayBoxWidth },
      { scale: pressed.value ? withTiming(3) : 1 },
    ],
  }));

  return (
    <GestureDetector gesture={tap}>
      <Animated.View style={[styles.dayBox, animatedStyles]}>
        <Text style={styles.dayNum}>{d.num}</Text>
      </Animated.View>
    </GestureDetector>
  );
};

export default DayBox;

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
  dayName: {
    color: myWhite,
    opacity: 0.4,
    fontSize: 14,
    fontFamily: "Nunito_500Medium",
  },
  dayNum: {
    color: myWhite,
    fontSize: 20,
    fontFamily: "Nunito_500Medium",
  },
});
