import { View, Text, Button } from 'react-native';
import { useCart } from '../context/CartContext';

export default function CartScreen({ navigation }) {
  const { cart, total, removeFromCart } = useCart();

  return (
    <View>
      {cart.map((item, index) => (
        <View key={index}>
          <Text>{item.name} - ${item.price}</Text>
          <Button title="Eliminar" onPress={() => removeFromCart(index)} />
        </View>
      ))}

      <Text>Total: ${total}</Text>

      <Button title="Ir a pagar" onPress={() => navigation.navigate('Checkout')} />
    </View>
  );
}
