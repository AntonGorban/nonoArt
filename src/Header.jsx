import React from "react";
import { StyleSheet, View, Text, StatusBar, Button } from "react-native";
import * as sett from "./settings.json";

export const Header = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>nonoArt</Text>
      <StatusBar
        barStyle="light-content"
        backgroundColor={sett.colors.darkBlack}
        translucent={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: sett.colors.darkBlack,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    borderColor: sett.colors.white,
    borderStyle: "solid",
    borderBottomWidth: 1,
  },
  text: {
    fontSize: 30,
    color: "#fefefe",
    fontFamily: "Fredericka-the-Great",
    textAlign: "center",
  },
});
