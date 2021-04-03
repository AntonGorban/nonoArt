import React, { useState, useContext } from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import * as sett from "../settings.json";
import Context from "../context";
import { GameGrid } from "../GameGrid/GameGrid";
import { Colors } from "../GameGrid/Colors";
import { LevelName } from "../GameGrid/LevelName";

const arr = (height, width) =>
  Array(height)
    .fill(null)
    .map(() => Array(width).fill(null));

export const Game = () => {
  const { levels, selectedLevel, progress, updateProgress } = useContext(
    Context
  );
  let level = levels[selectedLevel];

  const [data, setLocalData] = useState(
    progress !== undefined
      ? progress
      : arr(level.art.length, level.art[0].length)
  );
  const setData = (newData) => {
    setLocalData(newData);
    updateProgress(data);
  };
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
      (prev) => arr(prev.length, prev[0].length)
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

  const [selectedColor, setSelectedColor] = useState(null);

  return (
    <Context.Provider
      value={{
        level,
        data,
        selectedColor,
        setSelectedColor,
        updateData,
        designer: false,
        clearAllData,
        clearLineData,
      }}
    >
      <View style={styles.container}>
        <LevelName index={selectedLevel + 1} name={level.name} />
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
