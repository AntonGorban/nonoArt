import "react-native-gesture-handler";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, Alert, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import * as sett from "./src/settings.json";
import * as localLevelJSON from "./src/assets/level.json";
import Context from "./src/context";
import { Main } from "./src/Screen/Main";
import { Game } from "./src/Screen/Game";
import { Designer } from "./src/Screen/Designer";
import { ColorPicker } from "./src/GameGrid/ColorPicker";
import { LevelJSON } from "./src/GameGrid/LevelJSON";
import { Header } from "./src/Header";
import storage from "./src/storage";

const Stack = createStackNavigator();

export default function App() {
  const [levels, setLevels] = useState([]);

  storage.getObj("levels").then((data) => {
    if (data === null) {
      storage.setObj("levels", [localLevelJSON]);
      setLevels([localLevelJSON]);
      console.log("storage levels empty");
    } else {
      if (data === levels) setLevels(data);
      console.log("storage levels full");
    }
  });

  const [colorPickerProps, setColorPickerProps] = useState({});
  const [levelJSONText, setLevelJSONText] = useState("");
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
    <NavigationContainer>
      <Context.Provider
        value={{
          Stack,
          colorPickerProps,
          setColorPickerProps,
          levelJSONText,
          setLevelJSONText,
        }}
      >
        <Stack.Navigator initialRouteName="Main" headerMode="float">
          <Stack.Screen name="Main" component={Main} options={headerOptions} />
          <Stack.Screen name="Game" component={Game} options={headerOptions} />
          <Stack.Screen
            name="Designer"
            component={Designer}
            options={headerOptions}
          />
          <Stack.Screen
            name="ColorPicker"
            component={ColorPicker}
            options={headerOptions}
          />
          <Stack.Screen
            name="LevelJSON"
            component={LevelJSON}
            options={headerOptions}
          />
        </Stack.Navigator>
        <StatusBar
          barStyle="light-content"
          backgroundColor={sett.colors.darkBlack}
          translucent={false}
        />
      </Context.Provider>
    </NavigationContainer>
  );
}

const headerOptions = {
  title: "nonoArt",
  headerStyle: {
    backgroundColor: sett.colors.darkBlack,
    borderColor: sett.colors.white,
    borderStyle: "solid",
    borderBottomWidth: 1,
  },
  headerTitleAlign: "center",
  headerTintColor: sett.colors.white,
  headerTitleStyle: {
    fontSize: 30,
    color: "#fefefe",
    fontFamily: "Fredericka-the-Great",
    textAlign: "center",
  },
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
