import React, { useContext } from "react";
import { View, TouchableOpacity, StyleSheet, Image } from "react-native";
import Context from "../context";
import * as sett from "../settings.json";

export const ClearButton = ({ size }) => {
  const { clearAllData } = useContext(Context);
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={clearAllData.bind(null)}>
      <View
        style={{
          ...styles.container,
          width: size * 2,
          height: size * 2,
          borderTopLeftRadius: size,
        }}
      >
        <Image
          style={styles.image}
          blurRadius={1}
          source={require("../assets/img/redo.png")}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: sett.colors.white,
    margin: 1,
    borderRadius: 3,
    // borderTopLeftRadius: 50,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  image: {
    height: "73%",
    width: "73%",
  },
});
