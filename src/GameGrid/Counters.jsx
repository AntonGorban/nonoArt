import React, { useContext } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import * as sett from "../settings.json";
import Context from "../context";

export const Counters = ({ mode, size }) => {
  const { level, data, clearLineData, designer } = useContext(Context);
  const getSize = (size) => {
    let width = Math.floor(size.width / (level.width + 2));
    let height = Math.floor(size.height / (level.height + 2));
    return Math.min(width, height) - 2;
  };
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
      if (!designer)
        data[mode === "row" ? i : j][mode === "row" ? j : i] !== null
          ? counterValue[data[mode === "row" ? i : j][mode === "row" ? j : i]]--
          : undefined;
    }
    counterElements.push(
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={clearLineData.bind(null, mode, i)}
        key={`counter-${mode}-${i}`}
      >
        <View
          style={{
            ...styles.counter,
            flexDirection: mode,
            height: mode === "row" ? getSize(size) : getSize(size) * 2,
            width: mode === "row" ? getSize(size) * 2 : getSize(size),
            justifyContent: "space-evenly",
          }}
        >
          <Text
            style={{
              ...styles.text,
              color: level.colors[0],
              fontSize: Math.round(getSize(size) * 0.47),
            }}
          >
            {counterValue[0]}
          </Text>
          <Text
            style={{
              ...styles.text,
              color: level.colors[1],
              fontSize: Math.round(getSize(size) * 0.47),
            }}
          >
            {counterValue[1]}
          </Text>
          <Text
            style={{
              ...styles.text,
              color: level.colors[2],
              fontSize: Math.round(getSize(size) * 0.47),
            }}
          >
            {counterValue[2]}
          </Text>
        </View>
      </TouchableOpacity>
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
