import Icon from 'react-native-vector-icons';
import React,{useEffect} from 'react';
import { StatusBar,Platform,View,Dimensions,PermissionsAndroid } from 'react-native';

import Geolocation from '@react-native-community/geolocation';
import 'react-native-gesture-handler'
import RootNavigator from './src/Navigation/Root';


navigator.geolocation = require('@react-native-community/geolocation');


const App = () => {
  const androidPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "PetDekho App Camera Permission",
          message:
            "PetDekho App needs access to your location",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the location");
      } else {
        console.log("Location permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  }


  useEffect(() => {
    if (Platform.OS === 'android') {
      androidPermission();
    } else {
      // IOS
      Geolocation.requestAuthorization();
    }
  }, [])


  return (
    <>


<RootNavigator/>

    </>
  );
};

export default App;
