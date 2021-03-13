import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Context from "../context";
import * as sett from "../settings.json";

export const LevelSettings = ({ index, name }) => {
  const { level, addLineData, removeLineData, data } = useContext(Context);
  return (
    <View style={styles.container}>
      <View style={styles.countersContainer}>
        <View style={styles.counterContainer}>
          <TouchableOpacity style={styles.button}>
            <Text
              style={styles.buttonText}
              onPress={removeLineData.bind(null, "col")}
            >
              -1
            </Text>
          </TouchableOpacity>
          <Text style={styles.counterText}>{`Ширина: ${level.width}`}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={addLineData.bind(null, "col")}
          >
            <Text style={styles.buttonText}>+1</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.counterContainer}>
          <TouchableOpacity style={styles.button}>
            <Text
              style={styles.buttonText}
              onPress={removeLineData.bind(null, "row")}
            >
              -1
            </Text>
          </TouchableOpacity>
          <Text style={styles.counterText}>{`Высота: ${level.height}`}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={addLineData.bind(null, "row")}
          >
            <Text style={styles.buttonText}>+1</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text>qweqweqeq</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 90,
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: sett.colors.darkBlack,
  },
  countersContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  counterContainer: {
    // backgroundColor: sett.colors.white,
    flexDirection: "row",
    alignItems: "center",
  },
  counterText: {
    color: sett.colors.white,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: sett.colors.white,
    justifyContent: "center",
    alignItems: "center",
    width: 25,
    height: 25,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 17,
    color: sett.colors.darkBlack,
    // height: 30,
    fontFamily: "Montserrat-Alternates-bold",
  },
});
