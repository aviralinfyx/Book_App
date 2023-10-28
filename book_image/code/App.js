import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, FlatList, Image } from 'react-native';

const books = [
  {
    id: '1',
    author: "Indian",
    bookname: "C Programming",
    price: 12.99,
    imageURL: require('../book/assets/img/book-1.jpg')
  },
  {
    id: '2',
    author: "Foreign",
    bookname: "Java",
    price: 3.50,
    imageURL: require('../book/assets/img/book-2.jpg')
  },
  {
    id: '3',
    author: "Foreign",
    bookname: "AI",
    price: 4.50,
    imageURL: require('../book/assets/img/book-3.jpg')
  }
];

const App = () => {
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
            <Image source={item.imageURL} style={styles.bookImage} />
            <View style={styles.bookInfo}>
              <View style={styles.bookHeader}>
                <Text style={styles.bookName}>{item.bookname}</Text>
                <Text style={styles.bookPrice}>Rs.{item.price.toFixed(2)}</Text>
              </View>
              <Text style={styles.bookAuthor}>{item.author}</Text>
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
  bookImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 16
  },
  bookInfo: {
    flex: 1
  },
  bookHeader: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  bookName: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  bookPrice: {
    fontSize: 18,
    color: '#ff4500'
  },
  bookAuthor: {
    marginTop: 4,
    fontSize: 16,
    color: '#666'
  }
});

export default App;
