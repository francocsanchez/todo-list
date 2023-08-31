import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

export const InputAddItem = ({ handleAddItem, setValue, value }) => {
  return (
    <View style={styles.containerInput}>
      <TextInput
        style={styles.input}
        placeholder="Ingrese un elemento"
        value={value}
        onChangeText={(text) => setValue(text)}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddItem}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  containerInput: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    marginRight: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#bd1550",
    borderRadius: 5,
  },
  addButton: {
    backgroundColor: "#bd1550",
    width: 45,
    height: 45,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  addButtonText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
});
