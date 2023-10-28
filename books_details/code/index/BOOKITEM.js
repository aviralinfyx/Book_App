import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from '../style/AppStyles';

const BookItem = ({ item, onSelect }) => {
  return (
    <TouchableOpacity onPress={() => onSelect(item)}>
      <View style={styles.bookItem}>
        <Text style={styles.bookTitle}>{item.title}</Text>
        <Text style={styles.bookAuthor}>{item.author}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default BookItem;
