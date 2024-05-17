import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import PdTypeRow from '../PdTypeRow';
const GOOGLE_MAPS_APIKEY = 'AIzaSyAnFF9qVFqynP_sXGhFSoCNXF7lovqJLsA';

const RouteMap = ({ origin, destination }) => {
  const [distance, setDistance] = useState(null);
  const [duration, setDuration] = useState(null);

  const originLoc = {
    latitude: origin.details.geometry.location.lat,
    longitude: origin.details.geometry.location.lng,
  };
  
  const destinationLoc = {
    latitude: destination.details.geometry.location.lat,
    longitude: destination.details.geometry.location.lng,
  };

  const getDistance = async () => {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=${originLoc.latitude},${originLoc.longitude}&destinations=${destinationLoc.latitude},${destinationLoc.longitude}&key=${GOOGLE_MAPS_APIKEY}`
    );
    const data = await response.json();
    if (data.rows[0].elements[0].status === 'OK') {
      const distanceData = data.rows[0].elements[0].distance.value / 1000; // Convert to kilometers
      const durationData = data.rows[0].elements[0].duration.text;
      setDistance(distanceData);
      setDuration(durationData);
    } else {
      console.error("Error fetching distance data:", data.rows[0].elements[0].status);
    }
  };

  useEffect(() => {
    getDistance();
  }, [origin, destination]);

  

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ height: '100%', width: '100%' }}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: originLoc.latitude,
          longitude: originLoc.longitude,
          latitudeDelta: 0.0225,
          longitudeDelta: 0.0121,
        }}
      >
        <MapViewDirections
          origin={originLoc}
          destination={destinationLoc}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={5}
          strokeColor="black"
        />
        <Marker coordinate={originLoc} title={'Origin'} />
        <Marker coordinate={destinationLoc} title={'Destination'} />
      </MapView>
      {distance && (
        <View style={{ position: 'absolute', top: 10, left: 10, padding: 10, backgroundColor: 'white', borderRadius: 5 }}>
          <Text>Distance: {distance} km</Text>
          <Text>Duration: {duration}</Text>
         
        </View>
      )}
    </View>
  );
};

export default RouteMap;
