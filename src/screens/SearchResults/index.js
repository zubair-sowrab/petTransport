import Icon from 'react-native-vector-icons';
import React from 'react';
import { StatusBar, View, Dimensions, Text } from 'react-native';
import HomeMap from '../../components/RouteMap';
import PdTypes from '../../components/PdTypes';
import RouteMap from '../../components/RouteMap';
import { useRoute } from '@react-navigation/native';
const SearchResults = () => {
  const route=useRoute();

  console.log(route.params);
  const{originPlace,destinationPlace}=route.params
  return (
    <View style={{display:'flex'}}>
      <View style={{height:Dimensions.get('window').height-400}}>
      <RouteMap origin={originPlace} destination={destinationPlace}/>
      </View>
      <View style={{height:500}}>
      <PdTypes/>

      </View>
    </View>
  );
};

export default SearchResults;
