import React from "react";
import { View, Text, Pressable } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign'
import styles from './styles.js';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";


const HomeSearch = (props) => {

const navigation=useNavigation();
const goToSearch=()=>{
  navigation.navigate('DestinationSearch')
}

  return (
    <View>
      <Pressable onPress={goToSearch} style={styles.inputBox}>
        <Text style={styles.inputText}>Where Do You Want To Go?</Text>

        <View style={styles.timeContainer}>
          <AntDesign name={'clockcircle'} size={16} color={'#535353'} />
          <Text>Now</Text>
          <MaterialIcons name={'keyboard-arrow-down'} size={16} />
        </View>

      </Pressable>

      <View style={styles.row}>
        <View style={[styles.iconContainer, { backgroundColor: "#218cff" }]}>
          <AntDesign name={'clockcircle'} size={20} color={'#ffffff'} />
        </View>
        <Text style={styles.destinationText}>Mirpur-1</Text>
      </View>


      <View style={styles.row}>
        <View style={[styles.iconContainer, { backgroundColor: '#218cff' }]}>
          <Entypo name={'home'} size={20} color={'#ffffff'} />
        </View>
        <Text style={styles.destinationText}>Mirpur-10</Text>
      </View>
    </View>



  );
};


export default HomeSearch;