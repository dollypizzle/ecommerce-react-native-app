import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import { useSelector } from 'react-redux';

import { RootState } from '../../App';
import OrderItem from '../../components/shop/OrderItem';

const OrdersScreen = () => {
  const orders = useSelector((state: RootState) => state.orders.orders);

  console.log('orders', orders);

  if (orders.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginHorizontal: 15 }}>
        <Text>No order found, maybe start ordering some products?</Text>
      </View>
    );
  }
  
  return (
    <FlatList
      data={orders}
      keyExtractor={(item) => item._id}
      renderItem={(itemData) => (
        <OrderItem
          amount={itemData.item.totalAmount}
          items={itemData.item.cartItems}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default OrdersScreen;
