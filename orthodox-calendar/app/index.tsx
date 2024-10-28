import MonthForScroll from "@/components/MonthForScroll";
import { daysAndMonthsAndYears, monthForScrollWidth } from "@/constants/data";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#364775",
    gap: 10,
  },
  header: {
    flexDirection: "row",
    width: "100%",
    height: 40,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
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
    fontSize: 24,
    color: "#FFFFFF",
  },
});

const months = daysAndMonthsAndYears[0].months.map((data, index) => {
  return data.name;
});

export default function Index() {
  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <FontAwesome6 name="grip-lines" size={24} color="#ffffff" />
          </TouchableOpacity>
          <Text style={styles.text}>2024</Text>
          <View style={{ width: 200 }}></View>
          <TouchableOpacity>
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
          contentContainerStyle={{ height: 100, alignItems: "center" }}
        >
          {months.map((m, i) => {
            return <MonthForScroll key={i} name={m} index={i} />;
          })}
        </ScrollView>
        <ScrollView style={styles.daysScroll}></ScrollView>
        <Text style={styles.title}>october</Text>
        <View style={styles.textBox}>
          <Text style={styles.text}>some data here</Text>
        </View>
      </SafeAreaView>
    </>
  );
}
