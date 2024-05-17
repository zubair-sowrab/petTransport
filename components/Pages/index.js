import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Assuming you have Ionicons installed
import Entypo from 'react-native-vector-icons/Entypo'
import{Auth} from'aws-amplify'
const TabBar = () => {

 
    return (
      <View style={styles.tabContainer}>
        <TouchableOpacity style={styles.tabButton}>
          <Icon name="home" size={24} color="black" />
          <Text style={styles.tabText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton}>
          <Icon name="cube" size={24} color="black" />
          <Text style={styles.tabText}>Help</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.tabButton}>
          <Icon name="person" size={24} color="black" />
          <Text style={styles.tabText}>Account</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={()=>{Auth.signOut()}} style={styles.tabButton}>
          <Entypo name="log-out" size={24} color="black" />
          <Text style={styles.tabText}>Logout</Text>
        </TouchableOpacity>
      </View>
    
    );

  };



const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 50,
    backgroundColor: 'lavender',
  },
  tabButton: {
    alignItems: 'center',
  },
  tabText: {
    fontSize: 12,
  },
});

export default TabBar;
