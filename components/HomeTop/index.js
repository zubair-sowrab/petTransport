import React, { useState, useRef, useEffect } from 'react';
import { Icon } from 'react-native-elements';
import { StyleSheet, Image, View, Dimensions, TouchableOpacity, FlatList, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';



const SCREEN_WIDTH = Dimensions.get('window').width;

const HomeTop = () => {

    const navigation=useNavigation();
    const goToSearch=()=>{
      navigation.navigate('DestinationSearch')
    }


  return (
    <View style={[styles.container, { backgroundColor: '#9A6CF0' }]}>
      <ScrollView bounces={false}>
        <View style={styles.home}>
          <Text style={[styles.text1, { color: 'white' }]}>Welcome to PetDekho!</Text>
          <View style={styles.view1}>
            <View style={styles.view8}>
              <Text style={[styles.text2, { color: 'white' }]}>First Ever Pet Transport System in Bangladesh!</Text>
              <TouchableOpacity onPress={goToSearch}>
                <View style={[styles.button1, { backgroundColor: 'black' }]}>
                  <Text style={[styles.button1Text, { color: 'white' }]}>Book Ride</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <Image style={styles.image1} source={require('../../assets/images/catcar.png')} />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeTop;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 30,
  },
  home: {
    paddingLeft: 20,
  },
  text1: {
    fontSize: 21,
    paddingBottom: 20,
    paddingTop: 20,
    color: 'white',
  },
  text2: {
    fontSize: 16,
    color: 'white',
  },
  view1: {
    flexDirection: "row",
    flex: 1,
    paddingTop: 30,
  },
  button1: {
    height: 40,
    width: 150,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: 'black',
  },
  button1Text: {
    fontSize: 17,
    marginTop: -2,
    color: 'white',
  },
  image1: {
    marginBottom: 10,
    marginRight: 15,
    height: 90,
    width: 100,
  },
  view8: {
    flex: 4,
    marginTop: -25,
  },
});
