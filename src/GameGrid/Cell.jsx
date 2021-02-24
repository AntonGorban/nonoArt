import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import * as sett from "../settings.json";

export const Cell = ({ cell, rowIndex, cellIndex, color, onClick }) => {
  const clickHandler = () =>
    onClick(rowIndex, cellIndex, Math.trunc((Math.random() * 10) % 3));

  return (
    <TouchableOpacity
      style={{
        ...styles.pixel,
        backgroundColor: color ? color : sett.colors.white,
      }}
      onPress={clickHandler}
    >
      {/* <Text style={{fontSize: 15}}>{cell ?? '-'}</Text> */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  pixel: {
    width: 30,
    height: 30,
    margin: 1,
    backgroundColor: sett.colors.white,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 3,
  },
});
