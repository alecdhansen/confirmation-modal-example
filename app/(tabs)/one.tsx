import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import ConfirmationModal from "../components/ConfirmationModal";
import { useState } from "react";

const TabOneScreen = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");
  const [text, setText] = useState<string>("");
  const clearText = () => {
    setText("");
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TextInput
          onChangeText={(text) => setInput(text)}
          onSubmitEditing={() => setText(input)}
          value={input}
          returnKeyType="send"
          returnKeyLabel="send"
          style={{
            backgroundColor: "#9d9797",
            width: "50%",
            height: 50,
            borderRadius: 20,
            paddingLeft: 10,
            fontWeight: "bold",
          }}
          placeholder="Enter text here"
          placeholderTextColor={"#363535"}
        />
        <Button title="X" onPress={() => setInput("")} />
      </View>
      <View style={styles.separator} />
      <Text style={styles.title}>{text}</Text>
      <View style={styles.separator} />
      {text && <Button title="clear text" onPress={() => setIsVisible(true)} />}
      <ConfirmationModal
        isModalVisible={isVisible}
        setIsModalVisible={setIsVisible}
        action={clearText}
        message="Clear text?"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
    backgroundColor: "white",
  },
});

export default TabOneScreen;
