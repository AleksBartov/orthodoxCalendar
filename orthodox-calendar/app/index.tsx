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
          <TouchableOpacity>
            <FontAwesome6 name="add" size={24} color="#ffffff" />
          </TouchableOpacity>
        </View>
        <ScrollView horizontal contentContainerStyle={{ height: 100 }}>
          <View>
            <Text style={styles.month}>Январь</Text>
          </View>
          <View>
            <Text style={styles.month}>Февраль</Text>
          </View>
          <View>
            <Text style={styles.month}>Март</Text>
          </View>
          <View>
            <Text style={styles.month}>Апрель</Text>
          </View>
          <View>
            <Text style={styles.month}>Май</Text>
          </View>
          <View>
            <Text style={styles.month}>Июнь</Text>
          </View>
          <View>
            <Text style={styles.month}>Июль</Text>
          </View>
          <View>
            <Text style={styles.month}>Август</Text>
          </View>
          <View>
            <Text style={styles.month}>Сентябрь</Text>
          </View>
          <View>
            <Text style={styles.month}>Октябрь</Text>
          </View>
          <View>
            <Text style={styles.month}>Ноябрь</Text>
          </View>
          <View>
            <Text style={styles.month}>Декабрь</Text>
          </View>
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
