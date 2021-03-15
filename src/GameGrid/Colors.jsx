import React, { useState, useContext } from "react";
import { View, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import Context from "../context";
import * as sett from "../settings.json";

export const Colors = ({ setColorPickerProps }) => {
  const {
    level,
    selectedColor,
    setSelectedColor,
    updateColors,
    designer,
    navigation,
  } = useContext(Context);
  const [colors, setColors] = useState(level.colors);
  const updateColor = (id, hex) => {
    setColors((prev) => {
      prev[id] = `#${hex
        .replace(/#/gi, "")
        .replace(/[^0-9^a-f]/gi, "")
        .toLowerCase()}`;
      return [...prev];
    });
    if (colors[id].length === 7) updateColors(colors);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setSelectedColor(0)}
        onLongPress={() => {
          if (designer) {
            setColorPickerProps({
              defaultColor: colors[0],
              id: 0,
              updateColor,
            });
            navigation.navigation.navigate("ColorPicker");
          }
        }}
        activeOpacity={0.7}
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
        >
          {designer ? (
            <TextInput
              style={styles.input}
              value={colors[0]}
              onChangeText={(text) => updateColor(0, text)}
              autoCapitalize="none"
              autoCorrect={false}
              disableFullscreenUI={true}
              maxLength={7}
            />
          ) : null}
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setSelectedColor(1)}
        onLongPress={() => {
          if (designer) {
            setColorPickerProps({
              defaultColor: colors[1],
              id: 1,
              updateColor,
            });
            navigation.navigation.navigate("ColorPicker");
          }
        }}
        activeOpacity={0.7}
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
        >
          {designer ? (
            <TextInput
              style={styles.input}
              value={colors[1]}
              onChangeText={(text) => updateColor(1, text)}
              autoCapitalize="none"
              autoCorrect={false}
              disableFullscreenUI={true}
              maxLength={7}
            />
          ) : null}
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setSelectedColor(2)}
        onLongPress={() => {
          if (designer) {
            setColorPickerProps({
              defaultColor: colors[2],
              id: 2,
              updateColor,
            });
            navigation.navigation.navigate("ColorPicker");
          }
        }}
        activeOpacity={0.7}
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
        >
          {designer ? (
            <TextInput
              style={styles.input}
              value={colors[2]}
              onChangeText={(text) => updateColor(2, text)}
              autoCapitalize="none"
              autoCorrect={false}
              disableFullscreenUI={true}
              maxLength={7}
            />
          ) : null}
        </View>
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
    justifyContent: "flex-end",
    alignItems: "center",
  },
  input: {
    backgroundColor: sett.colors.white,
    width: "100%",
    textAlign: "center",
    borderRadius: 15,
    fontSize: 17,
    marginBottom: -10,
  },
});
