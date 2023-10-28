import React from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import styles from '../styles/AppStyles';

const BookItem = ({ item, onSelect }) => (
  <View style={styles.listItem}>
    <View>
      <Text style={styles.bookTitle}>{item.title}</Text>
      <Text style={styles.bookAuthor}>{item.author}</Text>
    </View>
    <View>
      <Text style={styles.bookPrice}>${item.price.toFixed(2)}</Text>
      <Text style={item.category === 'frictional' ? styles.frictional : styles.nonFrictional}>
        {item.category === 'frictional' ? 'Frictional' : 'Non-Frictional'}
      </Text>
      <Button title="View Details" onPress={() => onSelect(item)} />
    </View>
  </View>
);

export default BookItem;
