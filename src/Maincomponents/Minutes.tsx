import React from 'react';
import {View,StyleSheet,ScrollView,Image} from 'react-native';
import Dashboard from './Dashboard';
const Minutes=()=>{
    return(
        <View style={styles.container}>
            <Dashboard initialpage={'Minutes'}/>
            <ScrollView>
                <Image source={require('../assets/Minutes/discount.jpg')} style={{width:'100%',height:200}}/>
            </ScrollView>
        </View>
    )
};
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
    }
})
export default Minutes;