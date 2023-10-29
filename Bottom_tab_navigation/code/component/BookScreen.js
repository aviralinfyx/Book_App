import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const books = [
  {
    id: '1',
    title: "Book 1",
    author: "Author 1",
    price: 12.99
  },
  {
    id: '2',
    title: "Book 2",
    author: "Author 2",
    price: 3.50
  },
  {
    id: '3',
    title: "Book 3",
    author: "Author 3",
    price: 18.50
  },
  {
    id: '4',
    title: "Book 4",
    author: "Author 4",
    price: 2.99
  },
  {
    id: '5',
    title: "Book 5",
    author: "Author 5",
    price: 15.99
  }
];

const BookScreen = () => {
  const navigation = useNavigation();

  const navigateToOtherScreen = () => {
    navigation.navigate('OtherScreen', { books });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>BookApp</Text>
      </View>
      <FlatList
        style={styles.listContainer}
        data={books}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <View style={styles.bookInfo}>
              <Text style={styles.bookTitle}>{item.title}</Text>
              <Text>{item.author}</Text>
              <Text>${item.price.toFixed(2)}</Text>
            </View>
          </View>
        )}
        keyExtractor={item => item.id}
      />
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#ff4500',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
  listItem: {
    flexDirection: 'row',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 16
  },
  bookInfo: {
    flex: 1
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default BookScreen;
