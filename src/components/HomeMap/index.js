import Icon from 'react-native-vector-icons';
import React from 'react';
import { StatusBar,FlatList, Image,View, Text } from 'react-native';
//import DestinationSearch from './src/screens/DestinationSearch';
//import SearchResults from './src/screens/SearchResults';
import MapView,{Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import cars from '../../assets/data/cars';

const HomeMap = () => {
  const [imageLoaded, setImageLoaded] = React.useState(false);

  const getImageName = (type) => {
    if (type === 'Bike') {
        return require('../../assets/images/Car.jpg');
    } else if (type === 'Car') {
        return require('../../assets/images/RIDE.jpg');
    } else if (type === 'Large') {
        return require('../../assets/images/SUV.png');
    }
};


  const renderMarkers = () => {
      return cars.map((car) => (
          <Marker key={car.id} coordinate={{ latitude: car.latitude, longitude: car.longitude }}>
              <Image 
              style={{ width: 35, height: 35, 
                resizeMode: 'contain',
            
        }} 
              source={getImageName(car.type)}/>
          </Marker>
      ));
  };

  return (
      <View style={{ flex: 1, backgroundColor: "#a0abff" }}>
          <MapView
              style={{ flex: 1 }}
              provider={PROVIDER_GOOGLE}
              showsUserLocation={true}
              initialRegion={{
                  latitude: 23.795605,
                  longitude: 90.353653,
                  latitudeDelta: 0.0225,
                  longitudeDelta: 0.0121,
              }}>
              {renderMarkers()}
          </MapView>
      </View>
  );
};

export default HomeMap;
