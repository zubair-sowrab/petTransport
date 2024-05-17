import React from 'react';
import { useState } from 'react';
import { View, Text, TouchableOpacity,Pressable,LinearGradient, Image,StyleSheet } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import PdTypeRow from '../../components/PdTypeRow';
const GOOGLE_MAPS_APIKEY = 'AIzaSyAnFF9qVFqynP_sXGhFSoCNXF7lovqJLsA';


const VehicleDetails = ({ route, navigation }) => {
  const { vehicle } = route.params;

  






  const proceedToPayment = () => {
    // Navigate to payment screen
  };

  const getImageName = () => {
    if (type.type === 'Bike') {
      return require('../../assets/images/Car.jpg');
    } else if (type.type === 'Car') {
      return require('../../assets/images/RIDE.jpg');
    } else if (type.type === 'Large') {
      return require('../../assets/images/SUV.png');
    }};

  return (

    <View style={[styles.container, { backgroundColor: 'white' }]}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Vehicle Details</Text>
      </View>
      <View style={styles.detailsContainer}>
     
        <Text style={styles.detail}>Distance: {vehicle.distance}</Text>
        <Text style={styles.detail}>Duration: {vehicle.duration}</Text>
        <Text style={styles.detail}>Vehicle Type: {vehicle.type}</Text>
        <Text style={styles.detail}>Price: {vehicle.price}</Text>
        <Text style={styles.detail}>Driver Name: {vehicle.driver}</Text>
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.header} >Payment</Text>

        <TouchableOpacity>
                <View style={[styles.button1, { backgroundColor: 'black' }]}>
                  <Text style={[styles.button1Text, { color: 'white' }]}>Pay with Bkash <Image style={styles.image2} source={require('../../assets/images/Bkash-logo.jpg')} />
 {vehicle.distance}</Text>
                </View>
              </TouchableOpacity> 
              
              
              <TouchableOpacity>
                <View style={[styles.button1, { backgroundColor: 'black' }]}>
                  <Text style={[styles.button1Text, { color: 'white' }]}>Pay with Nagad <Image style={styles.image1} source={require('../../assets/images/nagad.png')} /></Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View style={[styles.button1, { backgroundColor: 'black' }]}>
                  <Text style={[styles.button1Text, { color: 'white' }]}>Pay with Cash <Image style={styles.image1} source={require('../../assets/images/cash.jpg')} />
 {vehicle.distance}</Text></View>
              </TouchableOpacity>
              
        
 </View>
      <Pressable onPress={proceedToPayment} style={styles.button}>
        <Text style={styles.buttonText}>Proceed to Payment</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  image1: {
    
    height: 50,
    width: 70,
  }, 
  image2: {
    
    height: 40,
    width: 90,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 20,
  },
  headerContainer: {
    marginBottom: 20,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#7F00FF',
    alignContent:'center'
  },
  detailsContainer: {
    marginBottom: 20,
  },
  detail: {
    fontSize: 20,
    marginBottom: 10,
    color: '#333',
  },
  button1: {
    height: 70,
    width: 250,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor:'black',
  },
  button1Text: {
    fontSize: 17,
    marginTop: -2,
    color: 'white',
  },
  detail1: {
    fontSize: 30,
    marginBottom: 10,
    color: '#333',
  },
  button: {
    width: '100%',
    paddingVertical: 15,
    backgroundColor: '#7F00FF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default VehicleDetails;
