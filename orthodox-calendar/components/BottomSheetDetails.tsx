import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { myWhite } from "@/constants/Colors";
import {
  BORDER_RADIUS,
  DAY_HEIGHT,
  GAP,
  HEADER_HEIGHT,
} from "@/constants/SIZES";

const { height: wHeight, width: wWidth } = Dimensions.get("window");

const styles = StyleSheet.create({
  box: {
    position: "absolute",
    height: wHeight,
    width: wWidth,
    backgroundColor: myWhite,
    alignItems: "center",
    justifyContent: "center",
  },
});

const BottomSheetDetails = ({ detailsActive }) => {
  const gesture = Gesture.Pan();

  const rStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: detailsActive.value
            ? withTiming(GAP * 3 + HEADER_HEIGHT + DAY_HEIGHT * 2)
            : withTiming(wHeight),
        },
      ],
    };
  }, []);
  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[rStyles, styles.box]}>
        <View
          style={{
            borderColor: "#5164ba",
            borderWidth: 2,
            width: wWidth * 0.6,
            height: wWidth * 0.6 * 1.618,
            borderRadius: BORDER_RADIUS,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>TEST</Text>
        </View>
      </Animated.View>
    </GestureDetector>
  );
};

export default BottomSheetDetails;
