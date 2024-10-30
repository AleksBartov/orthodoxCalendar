import { Easing, StyleSheet, Text, View } from "react-native";
import React from "react";
import Animated, {
  FadeIn,
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
    fontSize: 33,
    fontFamily: "Nunito_800ExtraBold",
  },
});

const Day = ({ index, day, scrollOffset, monthIndex }) => {
  const pressed = useSharedValue(false);

  const tap = Gesture.Tap().onEnd(() => {
    pressed.value = true;
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
          translateX: pressed.value
            ? withTiming(DAY_WIDTH * 2)
            : getPosition(index).x,
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
      <Animated.View
        entering={FadeIn.delay(index * Math.floor(Math.random() * 50))}
        style={[styles.day, rStyles]}
      >
        <Text style={styles.text}>{day}</Text>
      </Animated.View>
    </GestureDetector>
  );
};

export default Day;
