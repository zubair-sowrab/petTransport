import Icon from 'react-native-vector-icons';
import React,{useEffect} from 'react';
import { StatusBar,Platform,View,Dimensions,PermissionsAndroid } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeNavigator from './Home';



const RootNavigator = (props) => {
 

  return (
  <NavigationContainer>
  
<HomeNavigator/>
  </NavigationContainer>
  );
};

export default RootNavigator;
