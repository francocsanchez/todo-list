import { View } from "react-native";
import React from "react";

import { Header } from "../../components";
import { styles } from "./Category.styles";
import { ProductItems } from "./components";

const Category = ({ route }) => {
  const { item } = route.params;
  const title = item.title;

  return (
    <View style={styles.container}>
      <Header title={title} />

      <ProductItems category={item} />
    </View>
  );
};

export default Category;
