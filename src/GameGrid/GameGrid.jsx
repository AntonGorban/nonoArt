import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Row } from "./Row";
import { Counters } from "./Counters";
import * as sett from "../settings.json";

export const GameGrid = ({ art, data, colors, onClick, selectedColor }) => {
  // console.log(Dimensions.get("screen"));
  const [size, setSize] = useState(0);
  const updateSize = (size) =>
    setSize((prev) => {
      let width = Math.floor(size.width / (art[0].length + 2));
      let height = Math.floor(size.height / (art.length + 2));
      return Math.min(width, height) - 2;
    });

  return (
    <View
      style={styles.gameGrid}
      onLayout={(event) => updateSize(event.nativeEvent.layout)}
    >
      {/* <Text style={{ fontSize: 20, color: "white" }}>{`size: ${size}`}</Text> */}
      <View style={styles.container}>
        <Counters
          mode="column"
          size={size}
          art={art}
          data={data}
          colors={colors}
        />
        <View style={styles.rowContainer}>
          <Counters
            mode="row"
            size={size}
            art={art}
            data={data}
            colors={colors}
          />
          <View>
            {data.map((row, rowIndex) => (
              <Row
                size={size}
                row={row}
                rowIndex={rowIndex}
                colors={colors}
                onClick={onClick}
                key={rowIndex.toString()}
                selectedColor={selectedColor}
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
