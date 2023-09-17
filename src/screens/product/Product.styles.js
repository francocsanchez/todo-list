import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  productContainer: {
    padding: 10,
    margin: 10,
    backgroundColor: '#f9f9f9',  // Un fondo ligero para resaltar el producto
    borderRadius: 8,
  },
  thumbnail: {
    width: '100%',
    height: 200,
    borderRadius: 4,
  },
  productInfo: {
    marginTop: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',  // Color oscuro para el texto del título
  },
  description: {
    fontSize: 18,
    marginBottom: 10,
    color: '#555',  // Color ligeramente más oscuro para la descripción
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#555',
  },
  rating: {
    fontSize: 20,
    marginBottom: 5,
    color: '#555',
  },
  stock: {
    fontSize: 20,
    marginBottom: 5,
    color: '#555',
  },
  brand: {
    fontSize: 20,
    marginBottom: 5,
    color: '#555',
  },
  category: {
    fontSize: 20,
    marginBottom: 5,
    color: '#555',
  },
});

export { styles };
