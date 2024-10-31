import { StyleSheet, Text } from "react-native";
import React from "react";
import Animated, {
  Easing,
  useAnimatedReaction,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import {
  DAY_HEIGHT,
  DAY_WIDTH,
  DURATION,
  MONTH_HEIGHT,
} from "@/constants/SIZES";
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

const Day = ({
  index,
  day,
  scrollOffset,
  monthIndex,
  detailsActive,
  haveToHide,
}) => {
  const pressed = useSharedValue(false);
  useAnimatedReaction(
    () => detailsActive.value,
    (v) => {
      if (!v) {
        pressed.value = false;
      }
    }
  );

  const tap = Gesture.Tap().onEnd(() => {
    pressed.value = true;
    haveToHide.value = true;
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
          translateX:
            pressed.value && haveToHide.value && detailsActive.value
              ? withTiming(0, {
                  duration: DURATION,
                  easing: Easing.inOut(Easing.ease),
                })
              : withTiming(getPosition(index).x, {
                  duration: DURATION,
                  easing: Easing.inOut(Easing.ease),
                }),
        },
        {
          translateY:
            pressed.value && haveToHide.value && detailsActive.value
              ? withTiming(-(monthIndex * MONTH_HEIGHT) + scrollOffset.value, {
                  duration: DURATION,
                  easing: Easing.inOut(Easing.ease),
                })
              : withTiming(getPosition(index).y, {
                  duration: DURATION,
                  easing: Easing.inOut(Easing.ease),
                }),
        },
        {
          scale:
            pressed.value && haveToHide.value && detailsActive.value
              ? withTiming(1.2, {
                  duration: DURATION,
                  easing: Easing.inOut(Easing.ease),
                })
              : withTiming(0.6, {
                  duration: DURATION,
                  easing: Easing.inOut(Easing.ease),
                }),
        },
      ],
      opacity: haveToHide.value && !pressed.value ? 0 : 1,
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
