import React, { useState, useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Row } from "./Row";
import { Counters } from "./Counters";
import { ClearButton } from "./ClearButton";
import * as sett from "../settings.json";

export const GameGrid = () => {
  const { level, data } = useContext(Context);
  const [size, setSize] = useState({ height: 20, width: 20 });

  return (
    <View
      style={styles.gameGrid}
      onLayout={(event) =>
        setSize({
          height: event.nativeEvent.layout.height,
          width: event.nativeEvent.layout.width,
        })
      }
    >
      <View style={styles.container}>
        <View style={styles.rowContainer}>
          <ClearButton size={size} />
          <Counters mode="column" size={size} />
        </View>
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
