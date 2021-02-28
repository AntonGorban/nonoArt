import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import * as sett from "../settings.json";

export const Colors = ({ colors, selectedColor, setSelectedColor }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setSelectedColor(0)}>
        <View
          style={{
            ...styles.color,
            backgroundColor: colors[0],
            borderWidth: selectedColor === 0 ? 4 : 0,
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setSelectedColor(1)}>
        <View
          style={{
            ...styles.color,
            backgroundColor: colors[1],
            borderWidth: selectedColor === 1 ? 4 : 0,
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setSelectedColor(2)}>
        <View
          style={{
            ...styles.color,
            backgroundColor: colors[2],
            borderWidth: selectedColor === 2 ? 4 : 0,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: sett.colors.white,
    height: 100,
    width: "100%",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  color: {
    height: 80,
    width: 80,
    borderRadius: 40,
    borderStyle: "solid",
    borderTopColor: sett.colors.white,
    borderBottomColor: sett.colors.white,
    borderLeftColor: sett.colors.black,
    borderRightColor: sett.colors.black,
  },
});
