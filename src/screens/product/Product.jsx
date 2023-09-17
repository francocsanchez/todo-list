import { View, Text, Image } from "react-native";
import React from "react";

import { styles } from "./Product.styles";

const Product = ({ route }) => {
  const { item } = route.params;
  const product = item;
  
  return (
    <View style={styles.productContainer}>
      <Image
        source={{ uri: product.thumbnail }}
        style={styles.thumbnail}
        resizeMode="contain"
      />
      <View style={styles.productInfo}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.price}>
          Price: ${product.price} ({product.discountPercentage}% off)
        </Text>
        <Text style={styles.rating}>Rating: {product.rating}</Text>
        <Text style={styles.stock}>Stock: {product.stock}</Text>
        <Text style={styles.brand}>Brand: {product.brand}</Text>
        <Text style={styles.category}>Category: {product.category}</Text>
      </View>
    </View>
  );
};

export default Product;
