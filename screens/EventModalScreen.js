import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

const EventModalScreen = ({ route, navigation }) => {
  const { events } = route.params;

  const renderEventCard = ({ item }) => (
    <View style={styles.eventCard}>
      <Image source={item.image} style={styles.eventImage} />
      <View style={styles.eventDetails}>
        <Text style={styles.eventName}>{item.name}</Text>
        <Text style={styles.eventInfo}>{`${item.date} - ${item.time}`}</Text>
        <Text style={styles.eventInfo}>{item.location}</Text>
        <Text style={styles.eventPrice}>{item.price}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
        <Text style={styles.closeButtonText}>Close</Text>
      </TouchableOpacity>
      <FlatList
        data={events}
        renderItem={renderEventCard}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.eventList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',  // Dark background color
    color: '#FFFFFF',  // Text color
    paddingTop: 50,
  },
  closeButton: {
    alignSelf: 'flex-end',
    padding: 10,
    backgroundColor: '#FF0000',
    borderRadius: 10,
    margin: 10,
  },
  closeButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  eventList: {
    paddingHorizontal: 10,
  },
  eventCard: {
    backgroundColor: '#1a1a1a',  // Dark background for each card
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 10,
    width: '100%',
  },
  eventImage: {
    width: '100%',
    height: 120,  // Adjust the height as needed
    resizeMode: 'cover',
  },
  eventDetails: {
    padding: 10,
  },
  eventName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  eventInfo: {
    fontSize: 14,
    color: '#CCCCCC',
  },
  eventPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FF0000',
  },
});

export default EventModalScreen;
