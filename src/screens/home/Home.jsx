import React, { useState, useEffect } from "react";
import { styles } from "./Home.styles";

import { ListItems, InputAddItem } from "./components";
import { View } from "react-native";
import { Header } from "../../components";

import { Category } from "../../data";

const Home = ({ navigation }) => {
  const [list, setList] = useState([]);
  const [value, setValue] = useState("");
  const [searching, setSearching] = useState(false);

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

  useEffect(() => {
    setList(Category);
  }, []);

  return (
    <View>
      <Header title={"Categorias"} />

      <View style={styles.container}>
        <InputAddItem
          value={value}
          setValue={setValue}
          handleSearchCategory={handleSearchCategory}
          searching={searching}
          setSearching={setSearching}
        />
        <ListItems list={list} navigation={navigation} />
      </View>
    </View>
  );
};

export default Home;
