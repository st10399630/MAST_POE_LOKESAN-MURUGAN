import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const BookListScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Book List</Text>
      <Button
        onPress={() => navigation.navigate('BookDetails')}
        title="Add a New Book"
      />
       //this button will add a booka and save previous books entered 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default BookListScreen;
