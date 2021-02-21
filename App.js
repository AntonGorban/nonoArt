import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const variables = {
  color: {
    black: "#2d2d2d",
    lightBlack: "#3d3d3d",
    white: "#fefefe",
  },
};

export default function App() {
  return (
    <View style={styles.container}>
      <Text> Open up App.js to start working on your app! </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: variables.color.lightBlack,
    alignItems: "center",
    justifyContent: "center",
  },
});
