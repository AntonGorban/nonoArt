import React, { useState, useContext } from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import * as sett from "../settings.json";
// import * as level from "../assets/level.json";
import Context from "../context";
import { GameGrid } from "../GameGrid/GameGrid";
import { Colors } from "../GameGrid/Colors";
import { LevelSettings } from "../GameGrid/LevelSettings";

const arr = (height, width) =>
  Array(height)
    .fill(null)
    .map(() => Array(width).fill(null));

export const Designer = (navigation) => {
  const [data, setData] = useState(arr(5, 5));
  const updateData = (rowId, colId, color) =>
    setData((prev) => {
      if (color !== null)
        prev[rowId][colId] = prev[rowId][colId] != color ? color : null;
      return [...prev];
    });
  const clearAllData = () =>
    clearDataAlert(
      "Очистка поля",
      "Вы точно хотите очистить все поле?",
      (prev) => {
        prev.forEach((line) => line.fill(null));
        return [...prev];
      }
    );
  const clearLineData = (mode, id) =>
    clearDataAlert(
      "Очистка поля",
      `Вы точно хотите очистить ${mode === "row" ? "строку" : "колонку"} № ${
        id + 1
      }?`,
      (prev) => {
        mode === "row"
          ? prev[id].fill(null)
          : prev.forEach((line) => (line[id] = null));
        return [...prev];
      }
    );

  const addLineData = (mode) => {
    setData((prev) => {
      mode === "row"
        ? prev.push(Array(prev[0].length).fill(null))
        : prev.forEach((line) => line.push(null));
      return [...prev];
    });
    setLevel((prev) => {
      return {
        name: prev.name,
        width: data[0].length,
        height: data.length,
        colors: prev.colors,
        art: data,
      };
    });
  };

  const removeLineData = (mode) => {
    setData((prev) => {
      mode === "row" ? prev.pop() : prev.forEach((line) => line.pop());
      return [...prev];
    });
    setLevel((prev) => {
      return {
        name: prev.name,
        width: data[0].length,
        height: data.length,
        colors: prev.colors,
        art: data,
      };
    });
  };

  const clearDataAlert = (title, massage, func) =>
    Alert.alert(
      title,
      massage,
      [
        {
          text: "Нет, оставить",
        },
        {
          text: "Да, очистить",
          onPress: setData.bind(null, (prev) => func(prev)),
        },
      ],
      { cancelable: true }
    );

  const [level, setLevel] = useState({
    name: "",
    width: data[0].length,
    height: data.length,
    colors: ["#ff0000", "#00ff00", "#0000ff"],
    art: data,
  });

  const updateName = (text) =>
    setLevel({
      name: text,
      width: level.width,
      height: level.height,
      colors: level.colors,
      art: level.art,
    });

  const updateColors = (colors) =>
    setLevel({
      name: level.name,
      width: level.width,
      height: level.height,
      colors: colors,
      art: level.art,
    });
  const [selectedColor, setSelectedColor] = useState(null);

  const { setColorPickerProps, setLevelJSONText } = useContext(Context);

  return (
    <Context.Provider
      value={{
        level,
        data,
        selectedColor,
        setSelectedColor,
        updateData,
        clearAllData,
        clearLineData,
        updateColors,
        designer: true,
        navigation,
        addLineData,
        removeLineData,
        updateName,
      }}
    >
      <View style={styles.container}>
        <LevelSettings setLevelJSONText={setLevelJSONText} />
        <GameGrid />
        <Colors setColorPickerProps={setColorPickerProps} />
      </View>
    </Context.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: sett.colors.black,
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 35,
    textAlign: "center",
    paddingVertical: 15,
    color: sett.colors.white,
  },
});
