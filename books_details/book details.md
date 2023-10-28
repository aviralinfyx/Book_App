# 1.create BOOKDETAILS.js inside index folder 

## index/BookDETAILS.js
```
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


```

# 2.Update BOOKITEM.js inside index folder 

## index/BOOKITEM.js

```

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



```


# 3. Create data folder anywhere

## data/BooksData.js

```
export const books = [
    {
      id: '1',
      title: "Book 1",
      author: "Author 1",
      price: 12.99,
      // other properties
    },
    {
      id: '2',
      title: "Book 2",
      author: "Author 2",
      price: 9.99,
      // other properties
    },
    // Add more book objects as needed
  ];
  


```

# 4. Create Style folder anywhere

## Style/AppStyles.js

```
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#ff4500',
    height: 60,
    flexDirection: 'row',
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
  searchBar: {
    marginBottom: 16,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    fontSize: 16,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
  bookItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 16,
    paddingTop: 10,
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  bookAuthor: {
    marginTop: 4,
    fontSize: 16,
    color: '#666',
  },
  bookDetails: {
    padding: 16,
  },
  backButton: {
    color: '#ff4500',
    fontSize: 18,
    fontWeight: 'bold',
  },
  bookDescription: {
    fontSize: 16,
  },
});

export default styles;



```

# 5.Update App.js

## App.js


```

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



```


