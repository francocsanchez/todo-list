import { StyleSheet } from "react-native";
import { colors } from "../../global/Styles";

const styles = StyleSheet.create({
  title: {
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 30,
    marginTop: 50,
    marginBottom:10,
    textAlign: "center",
    color:colors.txtBlanco
  },
  headerBackGroud:{
    backgroundColor: colors.fondoRosa
  }
});

export { styles };
