import { View, TextInput, TouchableOpacity } from "react-native";
import React from "react";

// Icons
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import { styles } from "./InputAddItem.styles";

export default function InputAddItem({
  setValue,
  value,
  handleSearchCategory,
  searching
}) {
  return (
    <View style={styles.containerInput}>
      <TextInput
        style={styles.input}
        placeholder="Busque una categoria"
        value={value}
        onChangeText={(text) => setValue(text)}
      />
      <TouchableOpacity style={styles.addButton}>
        {searching ? (
          <Entypo
            style={styles.addButtonText}
            name="circle-with-cross"
            onPress={handleSearchCategory}
          />
        ) : (
          <AntDesign
            style={styles.addButtonText}
            name="search1"
            onPress={handleSearchCategory}
          />
        )}
      </TouchableOpacity>
    </View>
  );
}
