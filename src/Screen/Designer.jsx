import React, { useState } from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import * as sett from "../settings.json";
// import * as level from "../assets/level.json";
import Context from "../context";
import { GameGrid } from "../GameGrid/GameGrid";
import { Colors } from "../GameGrid/Colors";
import { LevelName } from "../GameGrid/LevelName";

const arr = (height, width) =>
  Array(height)
    .fill(null)
    .map(() => Array(width).fill(null));

export const Designer = () => {
  const [data, setData] = useState(arr(10, 10));
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
    name: "Название",
    width: data[0].length,
    height: data.length,
    colors: ["#ff0000", "#00ff00", "#0000ff"],
    art: data,
  });
  const [selectedColor, setSelectedColor] = useState(1);

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
        designer: true,
      }}
    >
      <View style={styles.container}>
        <LevelName index="0" name={level.name} />
        <GameGrid />
        <Colors />
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
