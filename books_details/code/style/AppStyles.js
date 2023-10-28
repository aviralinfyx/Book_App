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
