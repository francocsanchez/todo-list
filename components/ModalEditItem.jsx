import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export const ModalEditItem = ({
  itemSelected,
  onHableModal,
  onHableDelete,
}) => {
  return (
    <View>
      <View style={styles.btnAccion}>
        <TouchableOpacity
          style={styles.btnCloseModal}
          onPress={() => onHableModal(itemSelected)}
        >
          <Text style={styles.txtCloseModal}>Cerrar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnDelete}
          onPress={() => onHableDelete(itemSelected)}
        >
          <Text style={styles.txtCloseModal}>Eliminar</Text>
        </TouchableOpacity>
      </View>
      <View>
        <View style={styles.modalTextList}>
          <Text style={styles.txtTitleModal}>Desea eliminar el elemento ?</Text>
          <Text style={styles.txtElementeModal}>{itemSelected.title}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modalTextList: {
    marginTop: 30,
    alignItems: "center",
  },
  btnAccion: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  btnCloseModal: {
    marginTop: 60,
    marginHorizontal: 10,
    backgroundColor: "#490a3d",
    padding: 10,
    borderRadius: 5,
    flex: 1,
  },
  txtCloseModal: {
    textTransform: "uppercase",
    textAlign: "center",
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 20,
  },
  btnDelete: {
    marginTop: 60,
    marginHorizontal: 10,
    backgroundColor: "#bd1550",
    padding: 10,
    borderRadius: 5,
    flex: 1,
  },
  txtTitleModal: {
    fontSize: 25,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  txtElementeModal: {
    marginTop: 10,
    fontSize: 20,
  },
});
