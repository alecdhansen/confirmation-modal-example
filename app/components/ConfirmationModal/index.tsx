import React from "react";
import { View, Text, Modal, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { ConfirmationModalProps } from "./types";

const ConfirmationModal = ({
  isModalVisible,
  setIsModalVisible,
  action,
  message,
}: ConfirmationModalProps) => {
  return (
    <Modal
      animated
      animationType="fade"
      visible={isModalVisible}
      transparent
      onRequestClose={() => setIsModalVisible(false)}
    >
      <View style={styles.modal}>
        <View style={styles.topModalContainer}>
          <Text style={styles.areYouSureText}>{message}</Text>
          <View style={styles.divider} />
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
              action();
              setIsModalVisible(false);
            }}
          >
            <Text style={styles.deleteText}>Confirm</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => setIsModalVisible(false)}
          activeOpacity={1}
          style={styles.cancelContainer}
        >
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};
export default ConfirmationModal;
