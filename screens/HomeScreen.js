import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, FlatList, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';

const HomeScreen = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef(null);

  const images = [
    require('../assets/images/1.jpg'),
    require('../assets/images/2.jpg'),
    require('../assets/images/3.jpg'),
    require('../assets/images/4.jpg'),
    require('../assets/images/5.jpg'),
  ];

  const events = [
    {
      id: '1',
      name: 'Symphony Night',
      date: '2024-08-05',
      time: '19:00',
      location: 'Mumbai University Auditorium',
      price: '₹500',
      image: require('../assets/events/1.jpg'),
    },
    {
      id: '2',
      name: 'Art Fiesta',
      date: '2024-08-10',
      time: '11:00',
      location: 'Pune College of Arts',
      price: '₹300',
      image: require('../assets/events/2.jpg'),
    },
    {
      id: '3',
      name: 'Tech Innovations Expo',
      date: '2024-08-15',
      time: '09:00',
      location: 'IIT Bombay',
      price: '₹200',
      image: require('../assets/events/3.jpg'),
    },
    {
      id: '4',
      name: 'Cultural Carnival',
      date: '2024-08-20',
      time: '17:00',
      location: 'Nagpur University Grounds',
      price: '₹400',
      image: require('../assets/events/4.jpg'),
    },
    {
      id: '5',
      name: 'Drama Extravaganza',
      date: '2024-08-25',
      time: '18:00',
      location: 'Aurangabad Drama Hall',
      price: '₹250',
      image: require('../assets/events/5.jpg'),
    },
    {
      id: '6',
      name: 'Food Fest',
      date: '2024-08-30',
      time: '12:00',
      location: 'Kolhapur Culinary Institute',
      price: '₹150',
      image: require('../assets/events/6.jpg'),
    },
    {
      id: '7',
      name: 'Science Fair',
      date: '2024-09-05',
      time: '10:00',
      location: 'Nashik Science College',
      price: '₹100',
      image: require('../assets/events/7.jpg'),
    },
    {
      id: '8',
      name: 'Dance Mania',
      date: '2024-09-10',
      time: '16:00',
      location: 'Solapur Dance Academy',
      price: '₹350',
      image: require('../assets/events/8.jpg'),
    },
    {
      id: '9',
      name: 'Literature Fest',
      date: '2024-09-15',
      time: '14:00',
      location: 'Thane Literature Club',
      price: '₹200',
      image: require('../assets/events/9.jpg'),
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (swiperRef.current && currentIndex < images.length - 1) {
        swiperRef.current.scrollBy(1);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else if (swiperRef.current) {
        swiperRef.current.scrollBy(-currentIndex);
        setCurrentIndex(0);
      }
    }, 3000); // Auto animation interval (3 seconds)

    return () => clearInterval(interval);
  }, [currentIndex]);

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
    <ScrollView style={styles.container}>
      {/* Centered icon */}
      <View style={styles.iconContainer}>
        <Image
          source={require('../assets/logo.jpg')}
          style={styles.icon}
          resizeMode="contain"
        />
      </View>

      <Swiper
        ref={swiperRef}
        style={styles.wrapper}
        showsButtons
        loop
      >
        {images.map((image, index) => (
          <View style={styles.slide} key={index}>
            <Image source={image} style={styles.image} />
          </View>
        ))}
      </Swiper>
      <Text style={styles.header}>Upcoming Events</Text>

      <FlatList
        horizontal
        data={events.slice(0, 5)}
        renderItem={renderEventCard}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.eventList}
      />
      <TouchableOpacity
        style={styles.seeAllButton}
        onPress={() => navigation.navigate('EventModal', { events })}
      >
        <Text style={styles.seeAllButtonText}>See All</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',  // Dark background color
    color: '#FFFFFF',  // Text color
    marginTop: 30,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    height: 50,  // Adjust the height as needed
  },
  wrapper: {
    height: 200,
    borderRadius: 10,  // Rounded corners for the swiper container
    overflow: 'hidden',  // Ensure content inside swiper is clipped to rounded corners
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',  // Dark background for each slide
    borderRadius: 10,  // Rounded corners for each slide
    overflow: 'hidden',  // Ensure content inside slide is clipped to rounded corners
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 10,  // Rounded corners for the image
  },
  header: {
    fontSize: 24,  // Larger font size for headers
    fontWeight: 'bold',  // Bold font weight for headers
    marginVertical: 10,
    marginLeft: 10,
    color: '#FFFFFF',  // Text color
  },
  eventList: {
    paddingHorizontal: 10,
  },
  eventCard: {
    backgroundColor: '#1a1a1a',  // Dark background for each card
    borderRadius: 10,
    overflow: 'hidden',
    marginRight: 10,
    width: 200,  // Adjust the width as needed
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
  seeAllButton: {
    alignSelf: 'center',
    padding: 10,
    backgroundColor: '#FF0000',
    borderRadius: 10,
    margin: 10,
  },
  seeAllButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
