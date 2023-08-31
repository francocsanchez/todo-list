import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

export const ListItems = ({ list, onHableModal }) => {
  return (
    <FlatList
      data={list}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item, index }) => (
        <View style={styles.listItem}>
          <Text style={styles.listText} onPress={() => onHableModal(item)}>
            <Text style={styles.numberList}>{index + 1}</Text>
            <Text> - {item.title}</Text>
          </Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 12,
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: "#bd1550",
  },
  listText: {
    marginVertical: 5,
    color: "#FFF",
    fontSize: 18,
  },
  numberList: {
    fontWeight: "bold",
  },
});
