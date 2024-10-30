import { StyleSheet } from "react-native";
import React from "react";
import { BORDER_RADIUS, MONTH_HEIGHT, MONTH_WIDTH } from "@/constants/SIZES";
import Animated, { FadeIn, useAnimatedStyle } from "react-native-reanimated";
import Day from "./Day";

const DAYS_ARRAY = new Array(31).fill(null).map((_, i) => {
  return i + 1;
});

const Month = ({ index: monthIndex, scrollOffset }) => {
  const rStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: monthIndex * MONTH_HEIGHT,
        },
      ],
    };
  }, []);

  return (
    <Animated.View
      entering={FadeIn.delay(monthIndex * 100)}
      style={[styles.monthBox, rStyles]}
    >
      {DAYS_ARRAY.map((d, i) => {
        return (
          <Day
            key={i}
            index={i}
            monthIndex={monthIndex}
            day={d}
            scrollOffset={scrollOffset}
          />
        );
      })}
    </Animated.View>
  );
};

export default Month;

const styles = StyleSheet.create({
  monthBox: {
    height: MONTH_HEIGHT,
    position: "absolute",
    width: MONTH_WIDTH,
  },
});
