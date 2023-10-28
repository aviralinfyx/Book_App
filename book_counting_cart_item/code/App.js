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
