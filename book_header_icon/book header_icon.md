# 1. create folder style anywhere

## style/AppStyles.js


```
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#007bff',
    height: 80, // Increased header height
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginTop: 10, // Adjusted marginTop to move the header down
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  cartIcon: {
    color: '#fff',
    fontSize: 24, // Increased the font size
    marginTop: 4, // Adjusted marginTop to move the icon down
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
    justifyContent: 'space between',
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
  veg: {
    color: '#008000',
    fontWeight: 'bold',
    marginTop: 4,
  },
  nonVeg: {
    color: '#FF0000',
    fontWeight: 'bold',
    marginTop: 4,
  },
});

export default styles;


```

# 2. Update App.js code 

## App.js

```
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles/AppStyles'; // Import your styles from the correct location

const Header = ({ cartCount, onCartPress }) => (
  <View style={styles.header}>
    <Text style={styles.headerText}>BookApp</Text>
    <TouchableOpacity onPress={onCartPress}>
      <Text style={styles.cartIcon}>🛒 {cartCount}</Text>
    </TouchableOpacity>
  </View>
);

export default Header;


```