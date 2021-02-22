import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

const variables = {
  color: {
    black: "#2d2d2d",
    lightBlack: "#3d3d3d",
    white: "#fefefe",
  },
};

export default function App() {
  const [fontsLoaded] = Font.useFonts({
    "Montserrat-Alternates-light": require("./assets/fonts/MontserratAlternates-Light.otf"),
    "Montserrat-Alternates-regular": require("./assets/fonts/MontserratAlternates-Regular.otf"),
    "Montserrat-Alternates-bold": require("./assets/fonts/MontserratAlternates-Bold.otf"),
    "Fredericka-the-Great": require("./assets/fonts/FrederickatheGreat-Regular.otf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Platform Default</Text>
      <Text
        style={{ ...styles.text, fontFamily: "Montserrat-Alternates-light" }}
      >
        Montserrat Alternates light
      </Text>
      <Text
        style={{ ...styles.text, fontFamily: "Montserrat-Alternates-regular" }}
      >
        Montserrat Alternates regular
      </Text>
      <Text
        style={{ ...styles.text, fontFamily: "Montserrat-Alternates-bold" }}
      >
        Montserrat Alternates bold
      </Text>
      <Text
        style={{
          ...styles.text,
          fontFamily: "Fredericka-the-Great",
        }}
      >
        Fredericka the Great
      </Text>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="rgba(50, 25, 200, 0.7)"
        // hidden={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: variables.color.lightBlack,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  text: {
    fontSize: 35,
    textAlign: "center",
    paddingVertical: 15,
    color: variables.color.white,
  },
});
