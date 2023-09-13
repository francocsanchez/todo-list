// Librerias
import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";

// Data
import { Category, Products } from "./src/data";

// Screens
import { Home, Details } from "./src/screens";

export default function App() {
  const [list, setList] = useState([]);
  const [value, setValue] = useState("");
  const [searching, setSearching] = useState(false);
  const [categorySelect, setCategorySelect] = useState(false);
  const [products, setProducts] = useState([]);

  const handleSearchCategory = () => {
    if (value === "" && searching === false) {
      return;
    }

    if (searching) {
      setValue("");
      setSearching(false);
      return setList(Category);
    }

    setSearching(!searching);

    const filterCategory = list.filter((item) => item.title.includes(value));
    setList(filterCategory);
  };

  const handleSelectCategory = (category) => {
    const filterProducts = Products.filter(
      (item) => item.category === category.title
    );
    setProducts(filterProducts);
    setCategorySelect(true);
  };

  const handleHome = () => {
    setCategorySelect(false);
    setValue("");
    setSearching(false);
    setList(Category);
  };

  useEffect(() => {
    setList(Category);
  }, []);

  return (
    <SafeAreaView style={styles.main}>
      {categorySelect ? (
        <Details products={products} handleHome={handleHome} />
      ) : (
        <Home
          value={value}
          list={list}
          setSearching={setSearching}
          searching={searching}
          setValue={setValue}
          handleSearchCategory={handleSearchCategory}
          handleSelectCategory={handleSelectCategory}
        />
      )}

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});
