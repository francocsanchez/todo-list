import React from "react";
import { styles } from "./Home.styles";

import { ListItems, InputAddItem } from "./components";
import { View } from "react-native";
import { Header } from "../../components";

const Home = ({
  list,
  value,
  setValue,
  handleSearchCategory,
  searching,
  setSearching,
  handleSelectCategory
}) => {
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
        <ListItems list={list} handleSelectCategory={handleSelectCategory}/>
      </View>
    </View>
  );
};

export default Home;
