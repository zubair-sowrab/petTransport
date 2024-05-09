import Icon from 'react-native-vector-icons';
import React from 'react';
import { StatusBar, View,Pressable, FlatList,Dimensions, Text } from 'react-native';
import HomeMap from '../../components/HomeMap';
import PdTypeRow from '../PdTypeRow';
import typesData from '../../assets/data/types'


const PdTypes = () => {


    const confirm=()=>{
        console.warn("confirm");

    };

  return (
    <View>
        {typesData.map(type=><PdTypeRow type={type} key={type.id}/> 
)}


<Pressable onPress={confirm} style={{
    width:'80%',
backgroundColor:'#7F00FF',
padding:10,
alignItems:"center",
margin:10,
marginLeft:40
}}
>
    <Text style={{color:'white',fontWeight:'bold'}}>
        Confirm Vehicle
    </Text>
</Pressable>
 </View>
  );
};

export default PdTypes;
