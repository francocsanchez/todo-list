import { StyleSheet } from "react-native";
import { colors } from "../../../../global/Styles";

const styles = StyleSheet.create({
  containerInput: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    marginRight: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#bd1550",
    borderRadius: 5,
  },
  addButton: {
    backgroundColor: "#bd1550",
    width: 45,
    height: 45,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  addButtonText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
});

export { styles };
