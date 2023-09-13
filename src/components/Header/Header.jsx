import { View, Text } from "react-native";
import React from "react";

import { styles } from "./Header.styles";

const Header = ({ title }) => {
  return (
    <View style={styles.headerBackGroud}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;
