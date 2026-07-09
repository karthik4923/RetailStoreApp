import React, { useEffect, useState } from 'react';
import {View,Text,ScrollView, StyleSheet, TouchableOpacity,Image} from 'react-native';
import Dashboard from './Dashboard';
import AsyncStorage from '@react-native-async-storage/async-storage';
const data=[
    {offer:'14% Off',desc:'on credit card trxns',image:require('../assets/travel/hdfc.png')},
    {offer:'12% Off',desc:'on credit card EMI trxns',image:require('../assets/travel/hdfc.png')},
    {offer:'12% Off',desc:'with Flipkart Axis Bank Credit Card',img:require('../assets/travel/creditcard.png')},
    {offer:'$8,000 Off',desc:'on credit card EMI trxns',img:require('../assets/travel/sbi.png')},

]
const Travel=()=>{
    const [name,setname]=useState('');
    useEffect(()=>{
        const load=async()=>{
            const found=await AsyncStorage.getItem('userdata');
            if(found){
                const a=JSON.parse(found);
                setname(a.firstname);
            }
        };load();
    },[]);
    return(
        <View style={styles.container}>
            <Dashboard initialpage={'Travel'}/>
            <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.container1}>
                {
                    <View>
                        <Text style={{fontWeight:'bold',fontSize:18,padding:10}}>Welcome {name}!</Text>
                        <View style={styles.inner}>
                            <TouchableOpacity
                                style={styles.card}>
                                    <View style={{padding:10}}>
                                        <Text style={styles.cardhead}>Flights</Text>
                                        <Text style={styles.cardtext}>Up to 25% Off</Text>
                                    </View>
                                <Image source={require('../assets/travel/airplane.png')} style={styles.image}/>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.card}>
                                    <View style={{padding:10}}>
                                        <Text style={styles.cardhead}>Hotels</Text>
                                        <Text style={styles.cardtext}>Up to 25% Off</Text>
                                    </View>
                                <Image source={require('../assets/travel/hotels.png')} style={styles.image}/>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.card}>
                                    <View style={{padding:10}}>
                                        <Text style={styles.cardhead}>Buses</Text>
                                        <Text style={styles.cardtext}></Text>
                                    </View>
                                <Image source={require('../assets/travel/bus.png')} style={styles.image}/>
                            </TouchableOpacity>
                        </View>
                        <Image source={require('../assets/travel/flash.jpg')} style={{width:'95%',borderRadius:10,margin:10,}}/>
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}>
                        {
                            data.map((item,i)=>(
                            <View key={i} style={{}}>
                                <Image source={require('../assets/travel/ticket.png')} style={{width:200,height:230}}/>
                                <View style={styles.ticket}>
                                    <Image source={item.image} style={{height:40,width:40,}} resizeMode='contain'/>
                                    <Text style={{fontWeight:'bold',fontSize:16}}>{item.offer}</Text>
                                    <Text style={{textAlign:'center',}}>{item.desc}</Text>
                                </View>
                            </View> 
                            ))
                        }
                        </ScrollView>
                    </View>
                }
            </ScrollView>
        </View>
    )
};
const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    container1:{
        backgroundColor:'#fff',
    },
    inner:{
        flexDirection:'row',
        width:'100%',
        padding:10,
        justifyContent:'space-between',
    },
    card:{
        width:'30%',
        borderWidth:1,
        borderRadius:15,
        borderColor:'#a0a0a0ff',
        backgroundColor:'#fbfeffff',
        elevation:5,
        shadowColor:'#292929ff',
    },
    image:{
        width:'100%',
        height:100,
        //backgroundColor:'#e7f4ffff'
    },
    cardhead:{
        fontWeight:'bold',
        fontSize:18,
    },
    cardtext:{
        color:'#1fb800ff',
    },
    ticket:{
        position:'absolute',
        width:100,
        top:42,
        left:50,
        alignItems:'center',
    }
})
export default Travel;