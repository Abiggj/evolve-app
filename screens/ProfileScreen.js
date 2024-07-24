import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';

const ProfileScreen = () => {
  const userDetails = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    profilePicture: require('../assets/profile.jpg'), // Add your profile picture here
  };

  const currentBookings = [
    {
      id: '1',
      name: 'Symphony Night',
      date: '2024-08-05',
      time: '19:00',
      location: 'Mumbai University Auditorium',
      image: require('../assets/bookings/current1.jpg'), // Add your current booking image here
    },
    {
      id: '2',
      name: 'Art Fiesta',
      date: '2024-08-10',
      time: '11:00',
      location: 'Pune College of Arts',
      image: require('../assets/bookings/current2.jpg'), // Add your current booking image here
    },
  ];

  const pastBookings = [
    {
      id: '1',
      name: 'Tech Innovations Expo',
      date: '2024-07-15',
      time: '09:00',
      location: 'IIT Bombay',
      image: require('../assets/bookings/past1.jpg'), // Add your past booking image here
    },
    {
      id: '2',
      name: 'Cultural Carnival',
      date: '2024-07-20',
      time: '17:00',
      location: 'Nagpur University Grounds',
      image: require('../assets/bookings/past2.jpg'), // Add your past booking image here
    },
  ];

  const renderBooking = ({ item }) => (
    <View style={styles.bookingCard}>
      <Image source={item.image} style={styles.bookingImage} />
      <View style={styles.bookingDetails}>
        <Text style={styles.bookingName}>{item.name}</Text>
        <Text style={styles.bookingInfo}>{`${item.date} - ${item.time}`}</Text>
        <Text style={styles.bookingInfo}>{item.location}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={userDetails.profilePicture} style={styles.profilePicture} />
        <Text style={styles.profileName}>{userDetails.name}</Text>
        <Text style={styles.profileEmail}>{userDetails.email}</Text>
      </View>

      <Text style={styles.sectionHeader}>Current Bookings</Text>
      <FlatList
        data={currentBookings}
        renderItem={renderBooking}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />

      <Text style={styles.sectionHeader}>Past Bookings</Text>
      <FlatList
        data={pastBookings}
        renderItem={renderBooking}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#000000', // Light background color
    marginTop:30,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    color:"#FF0000"
  },
  profileEmail: {
    fontSize: 16,
    color: '#666',
  },
  sectionHeader: {
    color:"#fff",
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  bookingCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    marginRight: 10,
    width: 200, // Adjust the width as needed
  },
  bookingImage: {
    width: '100%',
    height: 120, // Adjust the height as needed
    resizeMode: 'cover',
  },
  bookingDetails: {
    color:"#fff",
    padding: 10,
  },
  bookingName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  bookingInfo: {
    fontSize: 14,
    color: '#666',
  },
});

export default ProfileScreen;
