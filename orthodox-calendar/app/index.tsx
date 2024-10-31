import BottomSheetDetails from "@/components/BottomSheetDetails";
import Month from "@/components/Month";
import {
  BORDER_RADIUS,
  DAY_HEIGHT,
  GAP,
  HEADER_HEIGHT,
  MONTH_HEIGHT,
} from "@/constants/SIZES";
import { StatusBar } from "expo-status-bar";
import { Dimensions, StyleSheet, View } from "react-native";
import Animated, {
  useAnimatedRef,
  useScrollViewOffset,
  useSharedValue,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#364775",
    paddingHorizontal: 10,
    gap: GAP,
  },
  header: {
    backgroundColor: "#6379ff",
    height: HEADER_HEIGHT,
    borderRadius: BORDER_RADIUS,
  },
});

const MONTHS_ARRAY = new Array(12).fill(null).map((_, i) => {
  return i + 1;
});

export default function Index() {
  const detailsActive = useSharedValue(false);
  const animatedRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(animatedRef);
  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView style={styles.container}>
        <View style={styles.header}></View>
        <Animated.ScrollView
          snapToInterval={MONTH_HEIGHT}
          decelerationRate={"fast"}
          disableIntervalMomentum
          scrollEventThrottle={16}
          ref={animatedRef}
          contentContainerStyle={{
            height: MONTH_HEIGHT * MONTHS_ARRAY.length,
            alignItems: "center",
          }}
        >
          {MONTHS_ARRAY.map((m, i) => {
            return (
              <Month
                key={i}
                index={i}
                scrollOffset={scrollOffset}
                detailsActive={detailsActive}
              />
            );
          })}
        </Animated.ScrollView>
        <BottomSheetDetails detailsActive={detailsActive} />
      </SafeAreaView>
    </>
  );
}
