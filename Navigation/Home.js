import Icon from 'react-native-vector-icons';
import React,{useEffect} from 'react';
import { StatusBar,Platform,View,Dimensions,PermissionsAndroid } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import DestinationSearch from '../screens/DestinationSearch';
import SearchResults from '../screens/SearchResults';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import VehicleDetails from '../screens/VehicleDetails';

const Stack=createStackNavigator();


const HomeNavigator = (props) => {
 

  return (

<Stack.Navigator
screenOptions={{
  headerShown:false,
}}
initialRouteName={"HomeScreen"}>
<Stack.Screen name={"Home"} component={HomeScreen}/>
<Stack.Screen name={"DestinationSearch"} component={DestinationSearch}/>
<Stack.Screen name={"SearchResults"} component={SearchResults}/>
<Stack.Screen name="VehicleDetails" component={VehicleDetails} />

</Stack.Navigator>

  );
};

export default HomeNavigator;
