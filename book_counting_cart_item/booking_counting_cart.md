# 1. Create src folder anywhere and 2 js files

## src/BookDetails.js

```
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



```
## src/BookItem.js

```
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


```


# 2. Create header file .js file anywhere

## Header.js

```
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles/AppStyles';

const Header = ({ cartCount, onCartPress }) => (
  <View style={styles.header}>
    <Text style={styles.headerText}>BookApp</Text>
    <TouchableOpacity onPress={onCartPress}>
      <Text style={styles.cartIcon}>📚 {cartCount}</Text>
    </TouchableOpacity>
  </View>
);

export default Header;


```

# 3. Create styles folder anywhere and AppStyles.js file

## AppStyles.js

```
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#007bff', // You can choose your desired header background color
    height: 80, // Increase the header height
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginTop: 10, // Adjust the marginTop to move the header down
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  cartIcon: {
    color: '#fff',
    fontSize: 24, // Increase the font size
    marginTop: 8, // Adjust the marginTop to move the icon down
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
    fontSize: 16,
  },
  listItem: {
    flexDirection: 'row',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 16,
    paddingTop: 10,
  },
  bookImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 16,
  },
  bookInfo: {
    flex: 1,
  },
  bookHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  bookPrice: {
    fontSize: 18,
    color: '#32CD32',
  },
  bookAuthor: {
    marginTop: 4,
    fontSize: 16,
    color: '#666',
  },
  frictional: {
    color: '#FF0000', // Your desired color for frictional
    fontWeight: 'bold',
    marginTop: 4,
  },
  nonfrictional: {
    color: '#008000', // Your desired color for non-frictional
    fontWeight: 'bold',
    marginTop: 4,
  },
  categoryFilter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    paddingHorizontal: 16,
  },
  button: {
    padding: 10,
    borderRadius: 4,
    backgroundColor: '#e0e0e0',
  },
  selectedButton: {
    padding: 10,
    borderRadius: 4,
    backgroundColor: '#ff4500',
  },
});

export default styles;



```


# 4. Create data folder anywhere and create BooksData.js file 

## BooksData.js

```
export const books = [
    {
      id: '1',
      title: 'C Programming',
      author: 'indian',
      price: 12.99,
      function: 'programming',
      description: 'This is the c progarmming book.',
    },
    {
      id: '2',
      title: 'java',
      author: 'foreign',
      price: 9.99,
      function: 'programming',
      description: 'This is java programming book .',
    },
    // ... more book objects
  ];
  


```


# 5. Update App.js file 

```
import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  TextInput,
} from 'react-native';
import styles from './styles/AppStyles';
import BookItem from './src/BookItem';
import BookDetails from './src/BookDetails';
import { books } from './data/BooksData';
import Header from './Header';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBook, setSelectedBook] = useState(null);
  const [cart, setCart] = useState([]);
  const [viewingCart, setViewingCart] = useState(false);

  const handleCartPress = () => {
    setViewingCart(!viewingCart);
  };

  if (viewingCart) {
    return (
      <SafeAreaView style={styles.container}>
        <Header cartCount={cart.length} onCartPress={handleCartPress} />
        <FlatList
          data={cart}
          renderItem={({ item }) => <BookItem item={item} onSelect={() => {}} />}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    );
  }

  const addToCart = (book) => {
    setCart(prevCart => [...prevCart, book]);
  };

  const filteredBooks = books.filter(book => 
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (selectedBook) {
    return (
      <SafeAreaView style={styles.container}>
        <BookDetails 
          book={selectedBook} 
          onGoBack={() => setSelectedBook(null)} 
          onAddToCart={addToCart}
        />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header cartCount={cart.length} onCartPress={handleCartPress} />
      <TextInput
        style={styles.searchBar}
        placeholder="Search for a book..."
        value={searchQuery}
        onChangeText={text => setSearchQuery(text)}
      />
      <FlatList
        style={styles.listContainer}
        data={filteredBooks}
        renderItem={({ item }) => <BookItem item={item} onSelect={setSelectedBook} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default App;


```