import {
  Dimensions,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import ConfirmationModal from "../components/ConfirmationModal";
import { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";

const screenWidth = Dimensions.get("window").width;

const TabOneScreen = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");
  const [text, setText] = useState<string>("");
  const clearText = () => {
    setText("");
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="position">
      <View style={{ height: "100%" }}>
        {text && (
          <TouchableOpacity
            onPress={() => setIsVisible(true)}
            style={{ width: "100%", alignItems: "flex-end", marginRight: 20 }}
          >
            <MaterialIcons name="clear" size={30} color="#000" />
          </TouchableOpacity>
        )}

        {text && (
          <View style={styles.bubbleContainer}>
            <View style={styles.bubble}>
              <Text style={styles.text}>{text}</Text>
            </View>
          </View>
        )}
        <View style={styles.inputContainer}>
          <TextInput
            onChangeText={(text) => setInput(text)}
            onSubmitEditing={() => setText(input)}
            value={input}
            returnKeyType="send"
            returnKeyLabel="send"
            style={styles.input}
            placeholder="Message"
            placeholderTextColor={"#575656"}
          />
          {input && (
            <TouchableOpacity onPress={() => setInput("")}>
              <MaterialIcons name="clear" size={24} color="#fff" />
            </TouchableOpacity>
          )}
        </View>
        <ConfirmationModal
          isVisible={isVisible}
          setIsVisible={setIsVisible}
          onConfirm={clearText}
          message="Are you sure you want to clear the text?"
        />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  bubbleContainer: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    position: "absolute",
    top: "50%",
    minHeight: 50,
  },
  bubble: {
    backgroundColor: "#459bab",
    paddingHorizontal: 50,
    borderRadius: 999,
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    flex: 1,
    display: "flex",
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 20,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    marginBottom: 10,
    backgroundColor: "#9d9797",
    width: screenWidth - 20,
    maxHeight: 50,
  },
  input: {
    backgroundColor: "#9d9797",
    height: 50,
    borderRadius: 20,
    paddingLeft: 10,
    fontWeight: "bold",
    width: "90%",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
});

export default TabOneScreen;
