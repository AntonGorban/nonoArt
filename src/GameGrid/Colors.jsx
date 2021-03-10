import React, { useContext } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Context from "../context";
import * as sett from "../settings.json";

export const Colors = () => {
  const { level, selectedColor, setSelectedColor } = useContext(Context);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setSelectedColor(0)}
        style={{
          ...styles.colorContainer,
          borderWidth: selectedColor === 0 ? 5 : 0,
        }}
      >
        <View
          style={{
            ...styles.color,
            backgroundColor: level.colors[0],
            borderWidth: selectedColor === 0 ? 3 : 0,
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setSelectedColor(1)}
        style={{
          ...styles.colorContainer,
          borderWidth: selectedColor === 1 ? 5 : 0,
        }}
      >
        <View
          style={{
            ...styles.color,
            backgroundColor: level.colors[1],
            borderWidth: selectedColor === 1 ? 3 : 0,
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setSelectedColor(2)}
        style={{
          ...styles.colorContainer,
          borderWidth: selectedColor === 2 ? 5 : 0,
        }}
      >
        <View
          style={{
            ...styles.color,
            backgroundColor: level.colors[2],
            borderWidth: selectedColor === 2 ? 3 : 0,
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
  colorContainer: {
    height: 90,
    width: 90,
    borderRadius: 45,
    borderStyle: "solid",
    alignItems: "center",
    justifyContent: "center",
    borderColor: sett.colors.darkBlack,
  },
  color: {
    height: 80,
    width: 80,
    borderRadius: 40,
    borderStyle: "solid",
    borderColor: sett.colors.white,
  },
});
