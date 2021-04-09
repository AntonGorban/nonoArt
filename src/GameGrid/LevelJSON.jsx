import React, { useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Linking,
} from "react-native";
import Context from "../context";
import * as sett from "../settings.json";

export const LevelJSON = ({ navigation }) => {
  const { levelJSONText } = useContext(Context);
  return (
    <View style={styles.container}>
      <View style={styles.offer}>
        <Text style={styles.text}>
          Код, который вы видите ниже, это созданный выми уровень записанный в
          специальном формате JSON. Если вы хотите, чтобы ваш уровень добавили в
          игру, отправьте этот код разработчикам на почту:
        </Text>
        <TouchableOpacity
          style={styles.link}
          onPress={() => Linking.openURL("mailto:antogor.home@gmail.com")}
          activeOpacity={0.7}
        >
          <Text style={styles.linkText}>Антон Горбань</Text>
          <Text style={styles.linkMail}>{`< antogor.home@gmail.com >`}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.link}
          onPress={() => Linking.openURL("mailto:0669600185d@gmail.com")}
          activeOpacity={0.7}
        >
          <Text style={styles.linkText}>Дмитрий Прачёв</Text>
          <Text style={styles.linkMail}>{`< 0669600185d@gmail.com >`}</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.output} selectable={true}>
        {levelJSONText}
      </Text>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Назад</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: sett.colors.black,
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  offer: {},
  text: {
    color: sett.colors.white,
    textAlign: "justify",
    fontFamily: "Montserrat-Alternates-regular",
    fontSize: 15,
    marginBottom: 5,
  },
  link: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingVertical: 5,
  },
  linkText: {
    color: sett.colors.white,
    textAlign: "justify",
    fontFamily: "Montserrat-Alternates-bold",
    fontSize: 16,
  },
  linkMail: {
    color: sett.colors.white,
    textAlign: "justify",
    fontFamily: "Montserrat-Alternates-regular",
    fontSize: 13,
  },
  output: {
    color: sett.colors.darkBlack,
    backgroundColor: sett.colors.white,
    padding: 6,
    borderRadius: 10,
    textAlign: "justify",
    fontFamily: "Montserrat-Alternates-regular",
    fontSize: 10,
    lineHeight: 11,
    letterSpacing: -0.1,
  },
  button: {
    backgroundColor: sett.colors.white,
    paddingVertical: 17,
    width: "75%",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: sett.colors.darkBlack,
    textAlign: "justify",
    fontFamily: "Montserrat-Alternates-bold",
    fontSize: 16,
  },
});
