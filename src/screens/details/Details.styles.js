import { StyleSheet } from "react-native";
import { colors } from "../../global/Styles";
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 220,
    marginHorizontal: 25,
  },
  btnVolver: {
    backgroundColor: colors.fondoVioleta,
    padding: 12,
    marginHorizontal: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  txtVolver: {
    color: colors.txtBlanco,
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export { styles };
