import React from "react";
import { View, StyleSheet } from "react-native";
import { Cell } from "./Cell";
import * as sett from "../settings.json";

export const Row = ({ row, rowIndex, colors, onClick }) => {
  return (
    <View style={styles.row}>
      {row.map((cell, cellIndex) => (
        <Cell
          cell={cell}
          rowIndex={rowIndex}
          cellIndex={cellIndex}
          color={colors[cell]}
          onClick={onClick}
          key={`${rowIndex}:${cellIndex}`}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
