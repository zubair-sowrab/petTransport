import React, { useState } from 'react';
import { View,TouchableOpacity, Pressable, Text } from 'react-native';
import PdTypeRow from '../PdTypeRow';
import typesData from '../../assets/data/types';
import { useNavigation } from '@react-navigation/native';
import VehicleDetails from '../../screens/VehicleDetails';

const PdTypes = () => {
    const navigation=useNavigation();

  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const onSelectVehicle = (vehicle) => {
    setSelectedVehicle(vehicle);
  };

  const confirm = () => {
    if (selectedVehicle) {
      navigation.navigate('VehicleDetails', { vehicle: selectedVehicle });
    } else {
      console.warn('Please select a vehicle');
    }
  };



  return (
           <View >
    


      {typesData.map((type) => (
        <PdTypeRow type={type} key={type.id} onSelect={onSelectVehicle} />
      ))}
      <Pressable
        onPress={confirm}
        style={{
          width: '80%',
          backgroundColor: '#7F00FF',
          padding: 10,
          alignItems: 'center',
          margin: 10,
          marginLeft: 40,
        }}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>Confirm Vehicle</Text>
      </Pressable>
      </View>
  );
};

export default PdTypes;
