import Icon from 'react-native-vector-icons';
import React from 'react';
import { StatusBar, View, Image, Dimensions, Text } from 'react-native';
import HomeMap from '../../components/HomeMap';
import Ionicons from 'react-native-vector-icons/Ionicons'
import styles from './styles';


const PdTypeRow = (props) => {
const {type}=props;  

const getImageName=()=>{
    if(type.type==='Bike'){
        return require('../../assets/images/Car.jpg')
    } if(type.type==='Car'){
        return require('../../assets/images/RIDE.jpg')
    } if(type.type==='Large'){
        return require('../../assets/images/SUV.png')
    }
}

 return (
        <View style={styles.container}>


            <Image style={styles.image}
                source={getImageName()} />


            <View style={styles.middleContainer}>
                <Text style={styles.type}>
                {type.type}{''}
                    <Ionicons name={'person'} size={12} />
                    1
                </Text>
                <Text style={styles.time}>
                    5:00 PM Drop Off
                </Text>
            </View>



            <View style={styles.rightContainer}>
                <Ionicons name={'pricetag'} size={10} color={'#42d742'} />
                <Text style={styles.price}>
                    est. ৳. {type.price}
                </Text>
            </View>
        </View>
    );
};

export default PdTypeRow;