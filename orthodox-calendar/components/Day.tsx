import { StyleSheet, Text } from "react-native";
import React from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { DAY_HEIGHT, DAY_WIDTH, MONTH_HEIGHT } from "@/constants/SIZES";
import { myWhite } from "@/constants/Colors";

const styles = StyleSheet.create({
  day: {
    position: "absolute",
    width: DAY_WIDTH,
    height: DAY_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: myWhite,
    fontSize: 26,
    fontFamily: "Nunito_800ExtraBold",
  },
});

const Day = ({ index, day, scrollOffset, monthIndex, detailsActive }) => {
  const pressed = useSharedValue(false);

  const tap = Gesture.Tap().onEnd(() => {
    pressed.value = true;
    detailsActive.value = true;
  });

  const rStyles = useAnimatedStyle(() => {
    const getPosition = (position: number) => {
      "worklet";

      return {
        x: position % 7 === 0 ? 0 : DAY_WIDTH * (position % 7),
        y: Math.floor(position / 7) * DAY_HEIGHT,
      };
    };

    return {
      transform: [
        {
          translateX: pressed.value ? withTiming(0) : getPosition(index).x,
        },
        {
          translateY: pressed.value
            ? withTiming(-(monthIndex * MONTH_HEIGHT) + scrollOffset.value)
            : getPosition(index).y,
        },
        {
          scale: pressed.value ? withTiming(1.2) : 0.6,
        },
      ],
    };
  }, []);
  return (
    <GestureDetector gesture={tap}>
      <Animated.View style={[styles.day, rStyles]}>
        <Text style={styles.text}>{day}</Text>
      </Animated.View>
    </GestureDetector>
  );
};

export default Day;
