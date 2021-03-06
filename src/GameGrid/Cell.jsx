import React, { useContext } from "react";
import { View, StyleSheet, TouchableNativeFeedback } from "react-native";
import * as sett from "../settings.json";
import Context from "../context";

export const Cell = ({ cell, rowIndex, cellIndex, size }) => {
  const { level, updateData, selectedColor } = useContext(Context);
  const getSize = (size) => {
    let width = Math.floor(size.width / (level.width + 2));
    let height = Math.floor(size.height / (level.height + 2));
    return Math.min(width, height) - 2;
  };
  return (
    <TouchableNativeFeedback
      onPress={updateData.bind(null, rowIndex, cellIndex, selectedColor)}
      background={TouchableNativeFeedback.Ripple(
        level.colors[selectedColor] !== level.colors[cell]
          ? level.colors[selectedColor]
          : sett.colors.white,
        true
      )}
    >
      <View
        style={{
          ...styles.pixel,
          backgroundColor: level.colors[cell]
            ? level.colors[cell]
            : sett.colors.white,
          width: getSize(size),
          height: getSize(size),
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
