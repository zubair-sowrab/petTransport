import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const PdTypeRow = ({ type, onSelect }) => {
  const getImageName = () => {
    if (type.type === 'Bike') {
      return require('../../assets/images/Car.jpg');
    } else if (type.type === 'Car') {
      return require('../../assets/images/RIDE.jpg');
    } else if (type.type === 'Large') {
      return require('../../assets/images/SUV.png');
    }
  };

  const handleSelect = () => {
    onSelect(type);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleSelect}>
      <Image style={styles.image} source={getImageName()} />
      <View style={styles.middleContainer}>
        <Text style={styles.type}>
          {type.type}
          <Ionicons name={'person'} size={12} />
          {type.people}
        </Text>
        <Text style={styles.time}>5:00 PM Drop Off</Text>
      </View>
      <View style={styles.rightContainer}>
        <Ionicons name={'pricetag'} size={10} color={'#42d742'} />
        <Text style={styles.price}>est. TK. {type.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PdTypeRow;
