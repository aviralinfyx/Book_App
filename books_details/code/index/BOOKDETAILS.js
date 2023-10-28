import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from '../style/AppStyles';

const BookDetails = ({ book, onGoBack }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onGoBack}>
          <Text style={styles.backButton}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Book Details</Text>
      </View>
      <View style={styles.bookDetails}>
        <Text style={styles.bookTitle}>{book.title}</Text>
        <Text style={styles.bookAuthor}>{book.author}</Text>
        <Text style={styles.bookDescription}>{book.description}</Text>
      </View>
    </View>
  );
};

export default BookDetails;
