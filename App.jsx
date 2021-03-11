import React, { useState } from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import * as sett from "./src/settings.json";
import * as level from "./src/assets/level.json";
import Context from "./src/context";
import { Header } from "./src/Header";
import { GameGrid } from "./src/GameGrid/GameGrid";
import { Colors } from "./src/GameGrid/Colors";
import { LevelName } from "./src/GameGrid/LevelName";

const arr = (height, width) =>
  Array(height)
    .fill(null)
    .map(() => Array(width).fill(null));

export default function App() {
  const [data, setData] = useState(arr(level.art.length, level.art[0].length));
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

  /* --- Fonts --- */
  const [fontsLoaded] = Font.useFonts({
    "Montserrat-Alternates-light": require("./src/assets/fonts/MontserratAlternates-Light.otf"),
    "Montserrat-Alternates-regular": require("./src/assets/fonts/MontserratAlternates-Regular.otf"),
    "Montserrat-Alternates-bold": require("./src/assets/fonts/MontserratAlternates-Bold.otf"),
    "Fredericka-the-Great": require("./src/assets/fonts/FrederickatheGreat-Regular.otf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  /* --- End Fonts --- */
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
      }}
    >
      <View style={styles.container}>
        <Header />
        <LevelName index="0" name={level.name} />
        <GameGrid />
        <Colors />
      </View>
    </Context.Provider>
  );
}

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
