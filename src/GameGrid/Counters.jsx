import React, { useContext } from "react";
import { View, StyleSheet, TouchableNativeFeedback, Text } from "react-native";
import * as sett from "../settings.json";
import Context from "../context";

export const Counters = ({ mode, size }) => {
  const { level, data } = useContext(Context);
  const counterElements = [];
  for (
    let i = 0;
    i < (mode === "row" ? level.art.length : level.art[0].length);
    i++
  ) {
    let counterValue = [0, 0, 0];
    for (
      let j = 0;
      j < (mode === "row" ? level.art[0].length : level.art.length);
      j++
    ) {
      level.art[mode === "row" ? i : j][mode === "row" ? j : i] !== null
        ? counterValue[
            level.art[mode === "row" ? i : j][mode === "row" ? j : i]
          ]++
        : undefined;
      data[mode === "row" ? i : j][mode === "row" ? j : i] !== null
        ? counterValue[data[mode === "row" ? i : j][mode === "row" ? j : i]]--
        : undefined;
    }
    counterElements.push(
      <View
        style={{
          ...styles.counter,
          flexDirection: mode,
          height: mode === "row" ? size : size * 2,
          width: mode === "row" ? size * 2 : size,
          justifyContent: "space-evenly",
        }}
        key={`counter-${mode}-${i}`}
      >
        <Text
          style={{
            ...styles.text,
            color: level.colors[0],
            fontSize: Math.round(size * 0.47),
          }}
        >
          {counterValue[0]}
        </Text>
        <Text
          style={{
            ...styles.text,
            color: level.colors[1],
            fontSize: Math.round(size * 0.47),
          }}
        >
          {counterValue[1]}
        </Text>
        <Text
          style={{
            ...styles.text,
            color: level.colors[2],
            fontSize: Math.round(size * 0.47),
          }}
        >
          {counterValue[2]}
        </Text>
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
  text: {
    fontFamily: "Montserrat-Alternates-regular",
  },
});
