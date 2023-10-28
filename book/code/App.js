import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, FlatList } from 'react-native';

const books = [
  {
    id: '1',
    author: "Indian",
    book: "C Programming",
    price: 12.99,
  },
  {
    id: '2',
    author: "Foreign",
    book: "Java",
    price: 3.50,
  },
  {
    id: '3',
    author: "Foreign",
    book: "AI",
    price: 18.50,
  },
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
            <View style={styles.bookInfo}>
              <Text style={styles.bookName}>{item.book}</Text>
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
    paddingBottom: 16,
  },
  bookInfo: {
    flex: 1,
  },
  bookName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
