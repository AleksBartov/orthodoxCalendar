import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { BORDER_RADIUS, MONTH_HEIGHT } from "@/constants/SIZES";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

const Month = ({ index, scrollOffset }) => {
  const pressed = useSharedValue(false);

  const tap = Gesture.Tap().onEnd(() => {
    pressed.value = true;
  });

  const rStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: pressed.value
            ? withTiming(0 + scrollOffset.value)
            : index * MONTH_HEIGHT,
        },
      ],
    };
  }, []);

  return (
    <GestureDetector gesture={tap}>
      <Animated.View style={[styles.monthBox, rStyles]}></Animated.View>
    </GestureDetector>
  );
};

export default Month;

const styles = StyleSheet.create({
  monthBox: {
    backgroundColor: "#6379ff",
    height: MONTH_HEIGHT,
    borderRadius: BORDER_RADIUS,
    position: "absolute",
    width: "100%",
    borderWidth: 1,
  },
});
