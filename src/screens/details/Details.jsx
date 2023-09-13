import { View, Text, Pressable, TouchableOpacity } from "react-native";
import React from "react";

import { Header } from "../../components";
import { styles } from "./Details.styles";
import { ProductItems } from "./components";

const Details = ({ products, handleHome }) => {
  const title = products[0].category;

  return (
    <View>
      <Header title={title} />

      <View style={styles.container}>
        <TouchableOpacity style={styles.btnVolver} onPress={handleHome}>
          <Text style={styles.txtVolver}>Home</Text>
        </TouchableOpacity>
        <ProductItems products={products} />
      </View>
    </View>
  );
};

export default Details;
