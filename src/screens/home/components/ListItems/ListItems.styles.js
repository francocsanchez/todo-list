import { StyleSheet } from "react-native";
import { colors } from "../../../../global/Styles";

const styles = StyleSheet.create({
  listItem: {
    padding: 12,
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: colors.fondoRosa,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  listText: {
    marginVertical: 5,
    color: colors.txtBlanco,
    fontSize: 18,
  },
  numberList: {
    fontWeight: "bold",
  },
});

export { styles };
