import React, { useState, useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import * as sett from "../settings.json";
import { Header } from "../Header";

export const Main = ({ navigation }) => {
  // const { Stack } = useContext(Context);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.buttonContainer}
        onPress={() => navigation.navigate("Levels")}
      >
        <Text style={styles.buttonText}>Уровни</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.buttonContainer}
        onPress={() => navigation.navigate("Game")}
      >
        <Text style={styles.buttonText}>Продолжить</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.buttonContainer}
        onPress={() => navigation.navigate("Designer")}
      >
        <Text style={styles.buttonText}>Рисовать</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.buttonContainer}
        onPress={() => navigation.navigate("About")}
      >
        <Text style={styles.buttonText}>О приложении</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: sett.colors.black,
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingVertical: 20,
  },
  buttonContainer: {
    // backgroundColor: sett.colors.white,
    textAlign: "center",
    paddingVertical: 25,
    width: "75%",
    // height: "5%",
    color: sett.colors.white,
    borderColor: sett.colors.white,
    borderStyle: "solid",
    borderWidth: 3,
    borderRadius: 50,
  },
  buttonText: {
    color: sett.colors.white,
    fontSize: 25,
    fontFamily: "Montserrat-Alternates-bold",
    textAlign: "center",
    textTransform: "uppercase",
  },
});
