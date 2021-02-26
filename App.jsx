import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import * as sett from "./src/settings.json";
import * as level from "./src/assets/level.json";
import { Header } from "./src/Header";
import { GameGrid } from "./src/GameGrid/GameGrid";

const arr = (height, width) =>
  Array(height)
    .fill(null)
    .map(() => Array(width).fill(null));

export default function App() {
  const [data, setData] = useState(arr(level.height, level.width));
  const updateData = (rowId, colId, color) =>
    setData((prev) => {
      prev[rowId][colId] = prev[rowId][colId] != color ? color : null;
      return [...prev];
    });

  // setData((prev) =>
  //   prev.map((row, rowIndex) =>
  //     rowIndex == rowId
  //       ? row.map((cell, cellIndex) =>
  //           cellIndex == colId ? (cell != color ? color : null) : cell
  //         )
  //       : row
  //   )
  // );

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
    <View style={styles.container}>
      <Header />
      <View>
        <Text>Levels</Text>
      </View>
      <GameGrid
        art={level.art}
        data={data}
        colors={level.colors}
        onClick={updateData}
      />
      <View>
        <Text>Colors</Text>
      </View>
    </View>
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
