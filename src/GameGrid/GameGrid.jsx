import React, { useState, useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Row } from "./Row";
import { Counters } from "./Counters";
import * as sett from "../settings.json";

export const GameGrid = () => {
  const { level, data } = useContext(Context);
  // console.log(Dimensions.get("screen"));
  const [size, setSize] = useState(0);
  const updateSize = (size) =>
    setSize((prev) => {
      let width = Math.floor(size.width / (level.art[0].length + 2));
      let height = Math.floor(size.height / (level.art.length + 2));
      return Math.min(width, height) - 2;
    });

  return (
    <View
      style={styles.gameGrid}
      onLayout={(event) => updateSize(event.nativeEvent.layout)}
    >
      <View style={styles.container}>
        <Counters mode="column" size={size} />
        <View style={styles.rowContainer}>
          <Counters mode="row" size={size} />
          <View>
            {data.map((row, rowIndex) => (
              <Row
                size={size}
                row={row}
                rowIndex={rowIndex}
                key={rowIndex.toString()}
              />
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gameGrid: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "98%",
    backgroundColor: sett.colors.black,
  },
  container: {
    flexDirection: "column",
  },
  rowContainer: {
    flexDirection: "row",
  },
});
