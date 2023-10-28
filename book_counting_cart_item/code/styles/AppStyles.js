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
