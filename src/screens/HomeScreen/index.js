import Icon from 'react-native-vector-icons';
import React from 'react';
import { StatusBar, Dimensions, View } from 'react-native';
import HomeMap from '../../components/HomeMap';
import CovidMessage from '../../components/covidmessage';
import HomeSearch from '../../components/HomeSearch';
import TabBar from '../../components/Pages';

const HomeScreen = (props) => {
  return (
    <View>
      <TabBar/>
      <View style={{ height: Dimensions.get('window').height - 400 }}>
        <HomeMap />
      </View>
      <HomeSearch />
    </View>
  );
};

export default HomeScreen;
