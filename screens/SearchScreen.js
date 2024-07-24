import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const SearchScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.searchBar} placeholder="Search for events..." />
      {/* Add your filter components here */}
      <Button title="Search" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  searchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default SearchScreen;
