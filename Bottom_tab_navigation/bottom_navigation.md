# 1. First, make sure you have React Navigation installed in your project. If it's not installed, you can install it using npm or yarn:


>- **npm install @react-navigation/native @react-navigation/stack**

# 2. Install React Navigation and any required dependencies in your project. You can do this by running the following commands

>- **npm install @react-navigation/native @react-navigation/bottom-tabs react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context**


# 3.Create component folder and 3 app.js file with name as below 

## A. component/BookScreen.js

```
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




```


## B.component/HomeScreen.js

```
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, FlatList, Image } from 'react-native';

const books = [
  {
    id: '1',
    title: "Book 1",
    author: "Author 1",
    price: 12.99,
    imageURL: require('../assets/img/book-1.jpg')
  },
  {
    id: '2',
    title: "Book 2",
    author: "Author 2",
    price: 3.50,
    imageURL: require('../assets/img/book-2.jpg')
  },
  // ... (Other books using local images)
];

const HomeScreen = () => {
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
                <Text style={styles.bookTitle}>{item.title}</Text>
                <Text style={styles.bookPrice}>${item.price.toFixed(2)}</Text>
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
    color: '#ff4500'
  },
  bookAuthor: {
    marginTop: 4,
    fontSize: 16,
    color: '#666'
  }
});

export default HomeScreen;

```


## C. component/OtherScreen.js


```
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
    imageURL: require('../assets/img/book-1.jpg'),
    rating: 4.5,
    reviews: ["Informative!", "Great book."],
    category: 'fiction',
  },
  {
    id: '2',
    title: "java programming",
    author: "indian",
    price: 9.99,
    imageURL: require('../assets/img/book-2.jpg'),
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


```

# 4.Update App.js 

## App.js


```
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeScreen from './component/HomeScreen';
import OtherScreen from './component/OtherScreen';
import BookScreen from './component/BookScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeStack" component={HomeScreen} />
      <Stack.Screen name="Other" component={OtherScreen} />
      <Stack.Screen name="Books" component={BookScreen} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Other" component={OtherScreen} />
        <Tab.Screen name="Books" component={BookScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;



```

