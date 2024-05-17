import React, { useEffect, useState } from 'react';
import { View, Dimensions } from 'react-native';
import axios from 'axios';
import HomeMap from '../../components/RouteMap';
import PdTypes from '../../components/PdTypes';
import RouteMap from '../../components/RouteMap';
import { useRoute } from '@react-navigation/native';

const GOOGLE_MAPS_APIKEY = 'AIzaSyAnFF9qVFqynP_sXGhFSoCNXF7lovqJLsA';


const SearchResults = () => {
  const route = useRoute();
  const { originPlace, destinationPlace } = route.params;
  const [distance, setDistance] = useState(null);

  useEffect(() => {
    const getDistance = async () => {
      try {
        const response = await axios.get(
          `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${originPlace.details.geometry.location.lat},${originPlace.details.geometry.location.lng}&destinations=${destinationPlace.details.geometry.location.lat},${destinationPlace.details.geometry.location.lng}&key=${GOOGLE_MAPS_APIKEY}`
        );
        const distanceText = response.data.rows[0].elements[0].distance.text;
        setDistance(distanceText);
      } catch (error) {
        console.error('Error fetching distance:', error);
      }
    };

    getDistance();
  }, [originPlace, destinationPlace]);

  return (
    <View style={{ display: 'flex', flex: 1 }}>
      <View style={{ height: Dimensions.get('window').height - 400 }}>
        <RouteMap origin={originPlace} destination={destinationPlace} />
      </View>
      <View style={{ height: 500 }}>
        <PdTypes distance={distance} />
      </View>
    </View>
  );
};

export default SearchResults;
