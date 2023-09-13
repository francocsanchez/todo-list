import { FlatList } from "react-native";
import React from "react";

import { CardItem } from "./components";

export default function ProductItems({ products }) {
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <CardItem item={item} />}
    />
  );
}
