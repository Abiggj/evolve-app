import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyEventsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Upcoming Events</Text>
      {/* Add your upcoming events components here */}
      <Text style={styles.header}>Past Events</Text>
      {/* Add your past events components here */}
      <Text style={styles.header}>Bookmarked Events</Text>
      {/* Add your bookmarked events components here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default MyEventsScreen;
