import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Home, Category } from "../screens";

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen  component={Home} name="Home"/>
        <Stack.Screen  component={Category} name="Category"/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
