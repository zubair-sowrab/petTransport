import Icon from 'react-native-vector-icons';
import React from 'react';
import { StatusBar,FlatList, Image,View, Text } from 'react-native';
//import DestinationSearch from './src/screens/DestinationSearch';
//import SearchResults from './src/screens/SearchResults';
import MapView,{Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const GOOGLE_MAPS_APIKEY = 'AIzaSyAnFF9qVFqynP_sXGhFSoCNXF7lovqJLsA';

const RouteMap = ( {origin,destination} ) => {

  const originLoc ={

  latitude:origin.details.geometry.location.lat,
  longitude:origin.details.geometry.location.lng,
  };
    const destinationLoc ={

      latitude:destination.details.geometry.location.lat,
      longitude:destination.details.geometry.location.lng,
      };
 
  return (
    
      <MapView
      style={{height:'100%',width:'100%'}}
       provider={PROVIDER_GOOGLE}
       initialRegion={{
         latitude: 23.795605,
         longitude: 90.353653,
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
    
    <Marker
        coordinate={originLoc}
        title={'Origin'}
      />
      <Marker
        coordinate={destinationLoc}
        title={"Destination"}
      />
     </MapView>
    
  );
};

export default RouteMap;
