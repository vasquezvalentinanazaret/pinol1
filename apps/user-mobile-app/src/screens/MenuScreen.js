import { View, Text, Button } from 'react-native';
import { useCart } from '../context/CartContext';

const products = [
  { id: 1, name: 'Hamburguesa', price: 5 },
  { id: 2, name: 'Pizza', price: 8 },
];

export default function MenuScreen() {
  const { addToCart } = useCart();

  return (
    <View>
      {products.map(p => (
        <View key={p.id}>
          <Text>{p.name} - ${p.price}</Text>
          <Button title="Agregar" onPress={() => addToCart(p)} />
        </View>
      ))}
    </View>
  );
}
