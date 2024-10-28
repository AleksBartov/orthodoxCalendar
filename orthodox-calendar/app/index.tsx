import ActiveDayModal from "@/components/ActiveDayModal";
import DayForScroll from "@/components/DayForScroll";
import MonthForScroll from "@/components/MonthForScroll";
import { daysAndMonthsAndYears, monthForScrollWidth } from "@/constants/data";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { StatusBar } from "expo-status-bar";
import { useRef } from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#364775",
  },
  header: {
    flexDirection: "row",
    width: "100%",
    height: 40,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 40,
  },
  month: {
    fontSize: 24,
    color: "#FFFFFF",
  },
  daysScroll: {},
  title: {
    fontSize: 30,
    color: "#6379ff",
  },
  textBox: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5164ba",
  },
  text: {
    fontSize: 20,
    color: "#FFFFFF",
    fontFamily: "Nunito_500Medium",
  },
});

const months = daysAndMonthsAndYears[0].months.map((data, index) => {
  return data.name;
});

export default function Index() {
  const activeDayModalRef = useRef<BottomSheetModal>(null);

  const handlePresentActiveDayModalPress = () =>
    activeDayModalRef.current?.present();

  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView style={styles.container}>
        <ActiveDayModal ref={activeDayModalRef} />
        <View style={styles.header}>
          <TouchableOpacity>
            <FontAwesome6 name="grip-lines" size={24} color="#ffffff" />
          </TouchableOpacity>
          <Text style={styles.text}>2024</Text>
          <View style={{ width: 100 }}></View>
          <TouchableOpacity onPress={handlePresentActiveDayModalPress}>
            <FontAwesome6 name="add" size={24} color="#ffffff" />
          </TouchableOpacity>
        </View>
        <ScrollView
          snapToInterval={monthForScrollWidth}
          decelerationRate={"fast"}
          disableIntervalMomentum
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          horizontal
          contentContainerStyle={{
            alignItems: "center",
            transform: [{ translateX: monthForScrollWidth / 3 }],
          }}
        >
          {months.map((m, i) => {
            return <MonthForScroll key={i} name={m} index={i} />;
          })}
        </ScrollView>
        <ScrollView
          decelerationRate={"fast"}
          disableIntervalMomentum
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          horizontal
          contentContainerStyle={{
            alignItems: "center",
            transform: [{ translateX: monthForScrollWidth / 2 }],
          }}
        >
          {daysAndMonthsAndYears[0].months[0].days.map((data, i) => {
            return (
              <DayForScroll
                key={i}
                name={data.dayName}
                num={data.dayNum}
                index={i}
              />
            );
          })}
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
