import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, Modal } from "react-native";

// Components
import { ModalEditItem } from "./components/ModalEditItem";
import { InputAddItem } from "./components/List/InputAddItem";
import { ListItems } from "./components/List/ListItems";

export default function App() {
  const [list, setList] = useState([]);
  const [value, setValue] = useState("");

  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const onHableDelete = () => {
    const updatedList = list.filter((item) => item !== itemSelected);
    setList(updatedList);
    setModalVisible(!modalVisible);
  };

  const onHableModal = (item) => {
    setItemSelected(item);
    setModalVisible(!modalVisible);
  };

  const handleAddItem = () => {
    if (value) {
      const item = {
        id: Math.floor(Math.random() * 999999),
        title: value,
      };

      setList([...list, item]);
      setValue("");
    }
  };

  return (
    <SafeAreaView style={styles.main}>

      <View style={styles.container}>

        <Text style={styles.title}>Lista de compras</Text>

        <InputAddItem
          handleAddItem={handleAddItem}
          value={value}
          setValue={setValue}
        />

        <ListItems list={list} onHableModal={onHableModal} />

      </View>

      <StatusBar style="auto" />

      <Modal visible={modalVisible} animationType="slide">
        <ModalEditItem
          itemSelected={itemSelected}
          onHableModal={onHableModal}
          onHableDelete={onHableDelete}
        />
      </Modal>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  container: {
    marginTop: 60,
    marginHorizontal: 25,
  },
  title: {
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 20,
  },
});
