import { FlatList } from "react-native";
import React, { useEffect, useState } from "react";

import { CardItem } from "./components";
import { Products } from "../../../../data";

export default function ProductItems({ category, navigation }) {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const filterCategory = Products.filter(
      (item) => item.category == category.title
    );
    setProduct(filterCategory);
  }, []);

  return (
    <FlatList
      data={product}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <CardItem item={item} navigation={navigation}/>}
    />
  );
}
