import React from 'react';
import {View,Image,StyleSheet,} from 'react-native';
const Scanner=()=>{
    return(
        <View style={styles.container}>
            <Image source={require('../assets/scanner.jpg')} style={styles.image}/>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        
    },
    image:{
        width:'100%',
        height:'100%',

    }
})
export default Scanner;