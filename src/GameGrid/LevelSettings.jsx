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

export const LevelSettings = (setLevelJSONText) => {
  const {
    level,
    addLineData,
    removeLineData,
    updateName,
    navigation,
  } = useContext(Context);
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
      <View style={styles.nameContainer}>
        <TextInput
          value={level.name}
          placeholder="Название уровня"
          placeholderTextColor="#fefefe77"
          onChangeText={(text) => updateName(text)}
          style={styles.input}
        />
        <TouchableOpacity
          style={styles.copyButton}
          onPress={() => {
            setLevelJSONText.setLevelJSONText(JSON.stringify(level));
            navigation.navigation.navigate("LevelJSON");
          }}
        >
          <Text style={styles.copyButtonText}>Получить</Text>
        </TouchableOpacity>
      </View>
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
    fontFamily: "Montserrat-Alternates-regular",
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
    fontFamily: "Montserrat-Alternates-bold",
  },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
  },
  input: {
    color: sett.colors.white,
    borderColor: sett.colors.white,
    borderStyle: "solid",
    borderBottomWidth: 1,
    width: "60%",
    height: 30,
    fontSize: 17,
    fontFamily: "Montserrat-Alternates-regular",
  },
  copyButton: {
    backgroundColor: sett.colors.white,
    color: sett.colors.darkBlack,
    width: "30%",
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  copyButtonText: {
    fontSize: 17,
    fontFamily: "Montserrat-Alternates-regular",
  },
});
