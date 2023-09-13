import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    margin: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  thumbnail: {
    width: 80,
    height: 80,
    borderRadius: 4,
  },
  cardContent: {
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    color: "gray",
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
  },
  stock: {
    fontSize: 16,
  },
  brand: {
    fontSize: 16,
  },
});

export { styles };
