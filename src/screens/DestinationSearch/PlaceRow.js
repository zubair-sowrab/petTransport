import Icon from 'react-native-vector-icons';
import React from 'react';
import { StatusBar,View,Dimensions, Text } from 'react-native';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo'

const PlaceRow = ({data}) => {
  return (
  <View style={styles.row}>
    <View style={styles.iconContainer}>
    {data.description === 'Home'
          ? <Entypo name='home' size={25} color={'red'} />
          : <Entypo name='location-pin' size={25} color={'red'} />
        }
       </View>
<Text style={styles.locationText}>{data.description || data.vicinity}</Text>

  </View>
  );
};

export default PlaceRow;
