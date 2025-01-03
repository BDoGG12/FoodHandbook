import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  View,
  Text,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.input}
              onChangeText={setSearchText}
              value={searchText}
              textAlign="left"
            />
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Go</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    margin: 20,
  },
  input: {
    borderRadius: 10,
    borderWidth: 1,
    height: 30,
    width: 200,
    margin: 12,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 15,
  },
  buttonText: {
    color: "white",
    fontWeight: "semibold",
  },
});

export default SearchBar;
