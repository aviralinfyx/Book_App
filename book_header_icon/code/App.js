import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles/AppStyles'; // Import your styles from the correct location

const Header = ({ cartCount, onCartPress }) => (
  <View style={styles.header}>
    <Text style={styles.headerText}>BookApp</Text>
    <TouchableOpacity onPress={onCartPress}>
      <Text style={styles.cartIcon}>🛒 {cartCount}</Text>
    </TouchableOpacity>
  </View>
);

export default Header;
