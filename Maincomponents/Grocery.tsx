import React, { useState } from 'react';
import {View,ScrollView,StyleSheet,Image} from 'react-native';
import Dashboard from './Dashboard';
//@ts-ignore
import Feather from 'react-native-vector-icons/Feather';
//@ts-ignore
import Icon6 from 'react-native-vector-icons/FontAwesome6';
import { TextInput } from 'react-native-gesture-handler';
const Grocery=()=>{
    const [search,setsearch]=useState('');
    return(
        <View style={styles.container}>
            <Dashboard initialpage={'Grocery'}/>
            <ScrollView
            showsVerticalScrollIndicator={false}>
                <View>
                    <View style={styles.inputer} >
                        <Feather name={'search'} style={styles.icon}/>
                        <TextInput
                            value={search}
                            onChangeText={setsearch}
                            placeholder='Search'
                            style={styles.input}
                        />
                        <Icon6 name={'list-check'} style={styles.icon}/>
                    </View>
                    <Image source={require('../assets/Grocery/discount.jpg')} style={{width:'100%',height:150}}/>
                </View>
            </ScrollView>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
    },
    input:{
        width:'80%',
    },
    icon:{
        fontSize:30,
        width:'10%',
        textAlign:'center',
        color:'#c55b04ff'
       
    },
    inputer:{
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',
        margin:10,
        borderWidth:1,
        borderRadius:10,
        borderColor:'#c55b04ff',
        paddingHorizontal:5,
        backgroundColor:'#fffbefff',
    },
})
export default Grocery;