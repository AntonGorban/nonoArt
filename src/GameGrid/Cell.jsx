import React from "react";
import { View, StyleSheet, TouchableNativeFeedback } from "react-native";
import * as sett from "../settings.json";

export const Cell = ({
  cell,
  rowIndex,
  cellIndex,
  color,
  onClick,
  size,
  selectedColor,
}) => {
  const clickHandler = () => onClick(rowIndex, cellIndex, selectedColor);

  return (
    <TouchableNativeFeedback onPress={clickHandler}>
      <View
        style={{
          ...styles.pixel,
          backgroundColor: color ? color : sett.colors.white,
          width: size,
          height: size,
        }}
      />
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  pixel: {
    width: 15,
    height: 15,
    margin: 1,
    backgroundColor: sett.colors.white,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 3,
  },
});
