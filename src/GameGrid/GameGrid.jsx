import React from "react";
import { View, StyleSheet } from "react-native";
import { Row } from "./Row";
import { Counters } from "./Counters";
import * as sett from "../settings.json";

export const GameGrid = ({ art, data, colors, onClick }) => {
  return (
    <View
      style={styles.gameGrid}
      // onLayout={(event) => console.dir(event.nativeEvent.layout)}
    >
      <View style={styles.container}>
        <Counters mode="column" art={art} data={data} colors={colors} />
        <View style={styles.rowContainer}>
          <Counters mode="row" art={art} data={data} colors={colors} />
          <View>
            {data.map((row, rowIndex) => (
              <Row
                row={row}
                rowIndex={rowIndex}
                colors={colors}
                onClick={onClick}
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "95%",
    backgroundColor: sett.colors.darkBlack,
  },
  container: {
    flexDirection: "column",
  },
  rowContainer: {
    flexDirection: "row",
  },
});
