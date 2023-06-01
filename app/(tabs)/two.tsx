import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import ConfirmationModal from "../components/ConfirmationModal";

const TabTwoScreen = () => {
  const [color, setColor] = useState("");
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");

  const handleColorChange = (text: string) => {
    setColor(text);
  };

  const handleConfirm = () => {
    setColor("white");
    setInput("");
  };

  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <TextInput
        style={styles.input}
        placeholder="Enter a color"
        returnKeyType="send"
        onChangeText={(text) => setInput(text)}
        onSubmitEditing={() => handleColorChange(input.toLowerCase().trim())}
        value={input}
      />
      <Button
        title="Reset Background Color"
        onPress={() => setIsVisible(true)}
      />
      <ConfirmationModal
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        message="Reset Background?"
        onConfirm={handleConfirm}
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
  input: {
    width: "80%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default TabTwoScreen;
