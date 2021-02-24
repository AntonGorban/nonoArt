import React from "react";
import { View, StyleSheet } from "react-native";
import { Row } from "./Row";
import * as sett from "../settings.json";

export const GameGrid = ({ art, colors, onClick }) => {
  return (
    <View style={styles.container}>
      {art.map((row, rowIndex) => (
        <Row
          row={row}
          rowIndex={rowIndex}
          colors={colors}
          onClick={onClick}
          key={rowIndex.toString()}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "95%",
    backgroundColor: sett.colors.darkBlack,
  },
});
