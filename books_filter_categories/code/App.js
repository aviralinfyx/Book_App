import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
  Button
} from 'react-native';

const books = [
  {
    id: '1',
    title: "c programming",
    author: "indian",
    price: 12.99,
    imageURL: require('./assets/img/book-1.jpg'),
    rating: 4.5,
    reviews: ["Informative!", "Great book."],
    category: 'fiction',
  },
  {
    id: '2',
    title: "java programming",
    author: "indian",
    price: 9.99,
    imageURL: require('./assets/img/book-2.jpg'),
    rating: 4.2,
    reviews: ["Helpful.", "Must-read."],
    category: 'non-fiction',
  },
  // ... other books
];

const Star = ({ filled }) => (
  <Text style={{ color: filled ? '#FFD700' : '#d4d4d4', fontSize: 20 }}>&#9733;</Text>
);

const Rating = ({ rating, reviews }) => (
  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    {[1, 2, 3, 4, 5].map(i => (
      <Star key={i} filled={i <= rating} />
    ))}
    <Text>({reviews.length} reviews)</Text>
  </View>
);

const CategoryLabel = ({ category }) => (
  <Text style={category === 'fiction' ? styles.fiction : styles.nonFiction}>
    {category === 'fiction' ? 'Fiction' : 'Non-Fiction'}
  </Text>
);

const CategoryFilter = ({ selectedCategory, onSelectCategory }) => (
  <View style={styles.categoryFilter}>
    <TouchableOpacity
      style={selectedCategory === 'all' ? styles.selectedButton : styles.button}
      onPress={() => onSelectCategory('all')}
    >
      <Text>All</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={selectedCategory === 'fiction' ? styles.selectedButton : styles.button}
      onPress={() => onSelectCategory('fiction')}
    >
      <Text>Fiction</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={selectedCategory === 'non-fiction' ? styles.selectedButton : styles.button}
      onPress={() => onSelectCategory('non-fiction')}
    >
      <Text>Non-Fiction</Text>
    </TouchableOpacity>
  </View>
);

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredBooks = books.filter(book => 
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (selectedCategory === 'all' || book.category === selectedCategory)
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
      <CategoryFilter
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
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
              <Rating rating={item.rating} reviews={item.reviews} />
              <CategoryLabel category={item.category} />
              <Text style={styles.bookAuthor}>{item.author}</Text>
              <Button title="Add to Cart" onPress={() => alert('Added to cart!')} />
            </View>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // ... [Your existing styles] ...

  categoryFilter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    paddingHorizontal: 16
  },
  button: {
    padding: 10,
    borderRadius: 4,
    backgroundColor: '#e0e0e0'
  },
  selectedButton: {
    padding: 10,
    borderRadius: 4,
    backgroundColor: '#ff4500'
  }
});

export default App;
