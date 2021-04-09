import React, { useContext } from "react";
import { StyleSheet, Text, ScrollView, TouchableOpacity } from "react-native";
import * as sett from "../settings.json";
import { Header } from "../Header";

export const Levels = ({ navigation }) => {
  const { levels, updateSelectedLevel, setProgress } = useContext(Context);
  return (
    <ScrollView style={styles.container}>
      {levels.map((level, id) => (
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            ...styles.buttonContainer,
            marginTop: id === 0 ? 45 : 25,
            marginBottom: id === levels.length - 1 ? 45 : 0,
          }}
          key={`level${id}`}
          onPress={() => {
            updateSelectedLevel(id);
            setProgress(level.progress);
            navigation.navigate("Game");
          }}
        >
          <Text style={styles.buttonText}>{`${id + 1}. ${level.name}`}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: sett.colors.black,
    paddingHorizontal: "10%",
  },
  buttonContainer: {
    textAlign: "center",
    paddingVertical: 15,
    width: "100%",
    borderColor: sett.colors.white,
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 25,
    marginTop: 25,
  },
  buttonText: {
    color: sett.colors.white,
    fontSize: 22,
    fontFamily: "Montserrat-Alternates-regular",
    textAlign: "center",
  },
});
