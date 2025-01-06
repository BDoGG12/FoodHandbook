import { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
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
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          labelField={}
          />
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
  dropdown: {
    margin: 16,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.2,
  },
  placeholderStyle: {
    fontSize: 16
  },
  selectedTextStyle: {
    fontSize: 16
  },
  iconStyle: {
    width: 20,
    height: 20
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16
  }
});

export default SearchBar;
