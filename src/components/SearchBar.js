import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Ionicons name="ios-search" style={styles.iconSytle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
        style={styles.inputStyle}
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 10,
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 15,
    marginHorizontal: 15,
    flexDirection: "row"
  },
  inputStyle: {
    flex: 1,
    fontSize: 18
  },
  iconSytle: {
    fontSize: 40,
    alignSelf: "center",
    marginHorizontal: 15
  }
});

export default SearchBar;
