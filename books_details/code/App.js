import React, { useState } from 'react';
import { SafeAreaView, Text, View, FlatList, TextInput } from 'react-native';
import styles from './style/AppStyles';
import BookItem from './index/BOOKITEM';
import BookDetails from './index/BOOKDETAILS';
import { books } from './data/BooksData';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBook, setSelectedBook] = useState(null);

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (selectedBook) {
    return (
      <SafeAreaView style={styles.container}>
        <BookDetails book={selectedBook} onGoBack={() => setSelectedBook(null)} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>BookApp</Text>
      </View>
      <TextInput
        style={styles.searchBar}
        placeholder="Search for a book..."
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />
      <FlatList
        style={styles.listContainer}
        data={filteredBooks}
        renderItem={({ item }) => <BookItem item={item} onSelect={setSelectedBook} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default App;
