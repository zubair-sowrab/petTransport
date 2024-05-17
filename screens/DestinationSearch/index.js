import React, { useState, useEffect } from 'react';
import { View, TextInput, SafeAreaView } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import styles from './styles.js';
import PlaceRow from './PlaceRow.js';
import { useNavigation } from '@react-navigation/native';

const homePlace = {
  description: 'Home',
  geometry: { location: { lat: 23.795605, lng: 90.353653 } },
};
const workPlace = {
  description: 'Bookmark',
  geometry: { location: { lat: 22.3381747, lng: 91.7800626 } },
};


const DestinationSearch = (props) => {

  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);

const navigation=useNavigation();

  useEffect(() => {
    if (originPlace && destinationPlace)
navigation.navigate('SearchResults',{
  originPlace,destinationPlace
})  },
     [originPlace, destinationPlace]);


  return (
    <SafeAreaView>
      <View style={styles.container}>



        <GooglePlacesAutocomplete
          placeholder='Where From?'
          onPress={(data, details = null) => {
            setOriginPlace({ data, details });
            // 'details' is provided when fetchDetails = true
          }}
          enablePoweredByContainer={false}
suppressDefaultStyles
currentLocation={true}
currentLocationLabel='Current Location'
          styles={{
            textInput: styles.textInput,
container:styles.autocompleteContainer,
listView:{
  position:'absolute',
  top:110,
  left:20

},
separator:styles.separator,

          }}
          fetchDetails
          query={{
            key: 'AIzaSyAnFF9qVFqynP_sXGhFSoCNXF7lovqJLsA',
            language: 'en',
          }}
          renderRow={(data:GooglePlaceData)=><PlaceRow data={data}/>}
        renderDescription={(data:DescriptionRow)=>data.description || data.vicinity}
        predefinedPlaces={[homePlace, workPlace]}

        />



        <GooglePlacesAutocomplete
          placeholder='Where To?'
          onPress={(data, details = null) => {
            setDestinationPlace({ data, details });
            // 'details' is provided when fetchDetails = true
          }}
          enablePoweredByContainer={false}

suppressDefaultStyles
          styles={{
            textInput: styles.textInput,
            container:{
              position:'absolute',
              top:65,left:10,right:22
            },
            listView:{
              position:'absolute',
              top:58,
              left:20
            },
            separator:styles.separator,

          }}
          fetchDetails
          query={{
            key: 'AIzaSyAnFF9qVFqynP_sXGhFSoCNXF7lovqJLsA',
            language: 'en',
          }}
          renderRow={(data:GooglePlaceData)=><PlaceRow data={data}/>}

          predefinedPlaces={[homePlace, workPlace]}

        />


{/*origin */}
<View style={styles.circle}>



</View>

{/*line */}
<View style={styles.line}>



</View>

{/*destination */}
<View style={styles.square}>



</View>


      </View>
    </SafeAreaView>
  );
};

export default DestinationSearch;