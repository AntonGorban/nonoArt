import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { TriangleColorPicker, toHsv, fromHsv } from "react-native-color-picker";
import Context from "../context";
import * as sett from "../settings.json";

export const ColorPicker = ({ navigation }) => {
  const { colorPickerProps } = useContext(Context);
  return (
    <TriangleColorPicker
      defaultColor={toHsv(colorPickerProps.defaultColor)}
      // oldColor={toHsv(colorPickerProps.defaultColor)}
      onColorSelected={(color) => {
        colorPickerProps.updateColor(colorPickerProps.id, fromHsv(color));
        navigation.goBack();
      }}
      style={styles.picker}
    />
  );
};

const styles = StyleSheet.create({
  picker: {
    flex: 1,
    backgroundColor: sett.colors.black,
  },
});
