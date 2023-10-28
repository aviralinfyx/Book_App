# Open your App.js and this code

```
import React, { useState } from 'react';
import { Button } from 'react-native';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TextInput
} from 'react-native';

const books = [
  {
    id: '1',
    title: "C Programming",
    author: "Indian",
    price: 12.99,
    imageURL: require('./assets/img/book-1.jpg')
  },
  {
    id: '2',
    title: "Java",
    author: "Foreign",
    price: 3.50,
    imageURL: require('./assets/img/book-2.jpg')
  },
  // ... (Other books using local images)
];

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBooks = books.filter(book => 
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>BookApp</Text>
      </View>

      <TextInput
        style={styles.searchBar}
        placeholder="Search for a book..."
        value={searchQuery}
        onChangeText={text => setSearchQuery(text)}
      />

      <FlatList
        style={styles.listContainer}
        data={filteredBooks}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Image source={item.imageURL} style={styles.bookImage} />
            <View style={styles.bookInfo}>
              <View style={styles.bookHeader}>
                <Text style={styles.bookTitle}>{item.title}</Text>
                <Text style={styles.bookPrice}>${item.price.toFixed(2)}</Text>
              </View>
              <Text style={styles.bookAuthor}>{item.author}</Text>
              <Button 
                title="Add to Cart" 
                onPress={() => console.log(`${item.title} added to cart!`)} 
                color="#32CD32"
              />
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
  searchBar: {
    marginBottom: 16,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    fontSize: 16
  },
  listItem: {
    flexDirection: 'row',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 16,
    paddingTop: 10
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  bookPrice: {
    fontSize: 18,
    color: '#32CD32'
  },
  bookAuthor: {
    marginTop: 4,
    fontSize: 16,
    color: '#666'
  }
});

export default App;



```