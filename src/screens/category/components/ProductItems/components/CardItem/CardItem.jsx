import { View, Text, Image } from "react-native";
import React from "react";

import { styles } from "./CardItem.styles";

const CardItem = ({ item }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
      <View style={styles.cardContent}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>Precio: ${item.price}</Text>
        <Text style={styles.stock}>Stock: {item.stock}</Text>
        <Text style={styles.brand}>Marca: {item.brand}</Text>
      </View>
    </View>
  );
};

export default CardItem;
