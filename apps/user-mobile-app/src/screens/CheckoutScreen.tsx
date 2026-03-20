import { View, Button } from 'react-native';
import { useCart } from '../context/CartContext';

export default function CheckoutScreen() {
  const { cart, total, clearCart } = useCart();

  const createOrder = async () => {
    const res = await fetch('http://TU_IP:4000/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        items: cart,
        total,
        paymentMethod: 'cash'
      })
    });

    const order = await res.json();

    await fetch('http://TU_IP:4000/api/payments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        orderId: order.id,
        method: 'cash'
      })
    });

    clearCart();
    alert('Pedido realizado 🚀');
  };

  return (
    <View>
      <Button title="Confirmar Pedido" onPress={createOrder} />
    </View>
  );
}
