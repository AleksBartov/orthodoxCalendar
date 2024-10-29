import { StyleSheet, Text, View } from "react-native";
import React from "react";

const DayBox = () => {
  return (
    <View style={styles.dayBox}>
      <Text style={styles.dayName}>пн</Text>
      <Text style={styles.dayNum}>1</Text>
    </View>
  );
};

export default DayBox;

const styles = StyleSheet.create({});
