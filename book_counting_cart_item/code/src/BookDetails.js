import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../styles/AppStyles';

const BookDetails = ({ book, onGoBack, onAddToCart }) => (
  <View style={styles.listContainer}>
    <Text style={styles.bookTitle}>{book.title}</Text>
    <Text style={styles.bookAuthor}>{book.author}</Text>
    <Text style={styles.bookPrice}>${book.price.toFixed(2)}</Text>
    <Text style={book.category === 'frictional' ? styles.frictional : styles.nonFrictional}>
      {book.category === 'frictional' ? 'Frictional' : 'Non-Frictional'}
    </Text>
    <Text style={styles.bookDescription}>{book.description}</Text>
    <Button title="Add to Cart" onPress={() => onAddToCart(book)} />
    <Button title="Go Back" onPress={onGoBack} />
  </View>
);

export default BookDetails;
