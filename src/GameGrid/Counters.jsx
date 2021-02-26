import React from "react";
import { View, StyleSheet, TouchableNativeFeedback, Text } from "react-native";
import * as sett from "../settings.json";

export const Counters = ({ mode, art, data, colors }) => {
  const counterElements = [];
  for (let i = 0; i < (mode === "row" ? art[0].length : art.length); i++) {
    let counterValue = [0, 0, 0];
    for (let j = 0; j < (mode === "row" ? art.length : art[0].length); j++) {
      art[mode === "row" ? i : j][mode === "row" ? j : i] !== null
        ? counterValue[art[mode === "row" ? i : j][mode === "row" ? j : i]]++
        : undefined;
    }
    counterElements.push(
      <View
        style={{
          ...styles.counter,
          flexDirection: mode,
          height: mode === "row" ? 25 : 70,
          width: mode === "row" ? 70 : 25,
          justifyContent: "space-evenly",
        }}
      >
        <Text style={{ color: colors[0] }}>{counterValue[0]}</Text>
        <Text style={{ color: colors[1] }}>{counterValue[1]}</Text>
        <Text style={{ color: colors[2] }}>{counterValue[2]}</Text>
      </View>
    );
  }

  return (
    <View
      style={{
        ...styles.counters,
        flexDirection: mode === "row" ? "column" : "row",
      }}
    >
      {counterElements}
    </View>
  );
};

const styles = StyleSheet.create({
  counters: {
    justifyContent: "flex-end",
  },
  counter: {
    width: 30,
    height: 30,
    margin: 1,
    backgroundColor: sett.colors.white,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 3,
  },
});
