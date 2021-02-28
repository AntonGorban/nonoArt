import React from "react";
import { View, Text, StyleSheet } from "react-native";
import * as sett from "../settings.json";

export const LevelName = ({ index, name }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.index}> {`уровень № ${index}`} </Text>
      <Text style={styles.name}> {name} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 90,
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  index: {
    color: sett.colors.white,
    fontSize: 16,
    fontFamily: "Montserrat-Alternates-light",
    textAlign: "center",
  },
  name: {
    color: sett.colors.white,
    fontSize: 23,
    fontFamily: "Montserrat-Alternates-bold",
    textAlign: "center",
  },
});
