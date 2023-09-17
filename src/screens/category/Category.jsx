import { View } from "react-native";
import React from "react";

import { styles } from "./Category.styles";
import { ProductItems } from "./components";

const Category = ({ route, navigation }) => {
  const { item } = route.params;
  const title = item.title;

  return (
    <View style={styles.container}>
      <ProductItems category={item} navigation={navigation} />
    </View>
  );
};

export default Category;
