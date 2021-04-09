import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Linking,
} from "react-native";
import * as sett from "../settings.json";

export const About = () => {
  return (
    <View style={styles.container}>
      <View style={styles.offer}>
        <Text style={styles.text}>
          nonoArt - это мобильная игра, совмещающая собой японскую головоломку
          nonogram и увлекательное рисование pixel артов. Игра разработана для
          IT-олимпиады "IT-Планета 2020/21".
        </Text>
        <Text style={styles.text}>
          Игра была разработана в команде из двух человек:
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
        <Text style={styles.text}>Репозиторий игры:</Text>
        <TouchableOpacity
          style={styles.link}
          onPress={() =>
            Linking.openURL("https://github.com/AntonGorban/nono-art")
          }
          activeOpacity={0.7}
        >
          <Text
            style={styles.linkMail}
          >{`https://github.com/AntonGorban/nono-art`}</Text>
        </TouchableOpacity>
      </View>
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
    marginBottom: 10,
  },
  link: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingVertical: 10,
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
});
