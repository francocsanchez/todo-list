import { Text, FlatList, Pressable } from "react-native";
import { styles } from "./ListItems.styles";
import { FontAwesome } from "@expo/vector-icons";

const ListItems = ({ list, handleSelectCategory }) => {
  return (
    <FlatList
      data={list}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <Pressable
          style={styles.listItem}
          onPress={() => handleSelectCategory(item)}
        >
          <Text style={styles.listText}>
            <Text style={styles.numberList}>{item.id}</Text>
            <Text style={{ textTransform: "capitalize" }}> - {item.title}</Text>
          </Text>
          <Text>
            <FontAwesome name="arrow-right" size={24} color="white" />
          </Text>
        </Pressable>
      )}
    />
  );
};

export default ListItems;
