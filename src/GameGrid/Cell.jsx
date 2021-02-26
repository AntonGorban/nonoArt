import React from "react";
import { View, StyleSheet, TouchableNativeFeedback } from "react-native";
import * as sett from "../settings.json";

export const Cell = ({ cell, rowIndex, cellIndex, color, onClick }) => {
  const clickHandler = () => onClick(rowIndex, cellIndex, /* colorId: */ 0);
  // onClick(rowIndex, cellIndex, Math.trunc((Math.random() * 10) % 3));

  return (
    <TouchableNativeFeedback onPress={clickHandler}>
      <View
        style={{
          ...styles.pixel,
          backgroundColor: color ? color : sett.colors.white,
        }}
      />
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  pixel: {
    width: 25,
    height: 25,
    margin: 1,
    backgroundColor: sett.colors.white,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 3,
  },
});
