import React from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

const BookDetailsScreen = ({ navigation }) => {
  const [bookTitle, setBookTitle] = React.useState('');
  const [bookAuthor, setBookAuthor] = React.useState('');
  const [bookPages, setBookPages] = React.useState('');

  const handleAddBook = () => {
    // logic to save book details
    // and navigate back to the list screen
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Book</Text>
      <TextInput
        style={styles.input}
        onChangeText={setBookTitle}
        value={bookTitle}
        placeholder="Book Title"
      />
      <TextInput
        style={styles.input}
        onChangeText={setBookAuthor}
        value={bookAuthor}
        placeholder="Book Author"
      />
      <TextInput
        style={styles.input}
        onChangeText={setBookPages}
        value={bookPages}
        placeholder="Total Pages"
        keyboardType="numeric"
      />
      <Button onPress={handleAddBook} title="Add Book" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    width: '100%',
  },
});

export default BookDetailsScreen;
