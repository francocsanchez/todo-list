import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Home, Category, Product } from "../screens";

import { colors } from "../global/Styles";

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          component={Home}
          name="Home"
          options={() => ({
            title: "Tienda de productos",
            headerStyle: {
              backgroundColor: colors.fondoRosa,
            },
            headerTintColor: colors.txtBlanco,
            headerTitleStyle: {
              fontWeight: "bold",
            },
          })}
        />
        <Stack.Screen
          component={Category}
          name="Category"
          options={({ route }) => ({
            title: route.params.item.title,
            headerStyle: {
              backgroundColor: colors.fondoRosa,
            },
            headerTintColor: colors.txtBlanco,
            headerTitleStyle: {
              fontWeight: "bold",
              textTransform: "uppercase",
            },
          })}
        />
        <Stack.Screen
          component={Product}
          name="Product"
          options={({ route }) => ({
            title: route.params.item.title,
            headerStyle: {
              backgroundColor: colors.fondoRosa,
            },
            headerTintColor: colors.txtBlanco,
            headerTitleStyle: {
              fontWeight: "bold",
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
