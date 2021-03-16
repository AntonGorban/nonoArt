import AsyncStorage from "@react-native-async-storage/async-storage";

export const getLevelsFromRepo = async () => {
  const response = await fetch(
    "https://raw.githubusercontent.com/AntonGorban/nono-art/levels/levels.json"
  );
  return await response.json();
};

export default storage = {
  getStr: async (key) => {
    try {
      return await AsyncStorage.getItem(key);
    } catch (error) {
      console.error("storage error", error);
    }
  },

  getObj: async (key) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (error) {
      console.error("storage error", error);
    }
  },

  multiGet: async (keys = []) => {
    try {
      return await AsyncStorage.multiGet(keys);
    } catch (error) {
      console.error("storage error", error);
    }
  },

  setStr: async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.error("storage error", error);
    }
  },

  setObj: async (key, value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (error) {
      console.error("storage error", error);
    }
  },

  remove: async (key) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.error("storage error", error);
    }
  },

  getKeys: async () => {
    try {
      return await AsyncStorage.getAllKeys();
    } catch (error) {
      console.error("storage error", error);
    }
  },

  clear: async () => {
    try {
      return await AsyncStorage.clear();
    } catch (error) {
      console.error("storage error", error);
    }
  },
};
