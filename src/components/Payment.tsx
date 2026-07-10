import React, { useEffect, useState } from 'react';
import {View,Text,StyleSheet, TouchableOpacity,Image,Alert} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Payment=({route})=>{
    const {amount}=route.params || 0;
    const navigation=useNavigation();
    const [method,setmethod]=useState(0);
    const success=async()=>{
        const found=await AsyncStorage.getItem('cartitem');
        if(found){
            const a=JSON.parse(found);
            await AsyncStorage.setItem('Buyed',JSON.stringify(a));
        }
        await AsyncStorage.removeItem('cartitem');
        Alert.alert('Successfully ordered!');
        navigation.navigate('Flipkart',{pager:'Home'});
    }
    return(
        <View style={styles.container}>
            <View style={styles.head}>
                <TouchableOpacity
                    onPress={()=>navigation.goBack()}>
                    <Feather name={'arrow-left'} style={{fontSize:30}}/>
                </TouchableOpacity>
                <Text style={{fontSize:20}}>Payment</Text>
            </View>
            <View style={{flexDirection:'row',backgroundColor:'#fff',marginVertical:10,elevation:10,justifyContent:'space-between',alignItems:'center',padding:10}}>
                <Text style={{fontSize:18,fontWeight:'bold',}}>Deliver to:</Text>
                <TouchableOpacity>
                    <Text style={styles.button}>Add address</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.middle}>
                <Text style={{fontSize:18,fontWeight:'bold',padding:10}}>Payment Methods:</Text>
                <View>
                    <TouchableOpacity
                        onPress={()=>setmethod(0)}
                        style={styles.inner}>
                            <View style={styles.inner1}>
                                <Icon name={method===0?'dot-circle-o':'circle-o'} style={[styles.iconer,{color:method===0?'#14ade9ff':'#050505ff'}]}/>
                                <Text style={styles.text}>UPI</Text>
                            </View>
                        <Image source={require('../assets/upiicon.png')} style={styles.image}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=>setmethod(1)}
                        style={styles.inner}>
                            <View style={styles.inner1}>
                                <Icon name={method===1?'dot-circle-o':'circle-o'} style={[styles.iconer,{color:method===1?'#14ade9ff':'#050505ff'}]}/>
                                <Text style={styles.text}>Net Banking</Text>
                            </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=>setmethod(2)}
                        style={styles.inner}>
                            <View style={styles.inner1}>
                                <Icon name={method===2?'dot-circle-o':'circle-o'} style={[styles.iconer,{color:method===2?'#14ade9ff':'#050505ff'}]}/>
                                <Text style={styles.text}>Credit / Debit / ATM cards</Text>
                            </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=>setmethod(3)}
                        style={styles.inner}>
                            <View style={styles.inner1}>
                                <Icon name={method===3?'dot-circle-o':'circle-o'} style={[styles.iconer,{color:method===3?'#14ade9ff':'#050505ff'}]}/>
                                <Text style={styles.text}>EMI</Text>
                            </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=>setmethod(4)}
                        style={styles.inner}>
                            <View style={styles.inner1}>
                                <Icon name={method===4?'dot-circle-o':'circle-o'} style={[styles.iconer,{color:method===4?'#14ade9ff':'#050505ff'}]}/>
                                <Text style={styles.text}>Cash On Delivery</Text>
                            </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.container1}>
            <View style={styles.amount}>
                <Text style={{fontSize:18,fontWeight:'bold',color:'#006d05ff',}}>Total Amount</Text>
                <Text style={{fontSize:18,fontWeight:'bold',color:'#006d05ff',}}>₹ {amount}</Text>
            </View>
            <TouchableOpacity
                onPress={()=>success()}
                style={styles.but}>
                <LinearGradient
                    colors={['#edff48ff','#ffd257ff']}
                    start={{x:0,y:0}}
                    end={{x:1,y:1}}
                    style={styles.but}>
                    <Text style={{textAlign:'center',fontSize:20,fontWeight:'bold',padding:10,}}>Proceed</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
        </View>
    );
};
const styles=StyleSheet.create({
    container:{flex:1,},
    head:{
        flexDirection:'row',
        paddingTop:40,
        paddingHorizontal:10,
        paddingBottom:10,
        gap:10,
        backgroundColor:'#fff',
        elevation:20,
        alignItems:'center',
    },
    middle:{
        backgroundColor:'#fff',
        elevation:10,
        marginBottom:10,
    },
    inner:{
        flexDirection:'row',
        width:'100%',
        padding:10,
        alignItems:'center',
        borderBottomWidth:1,
        borderBottomColor:'#ccc',
    },
    inner1:{
        flexDirection:'row',
        width:'80%',
        gap:10,
        alignItems:'center',
    },
    image:{
        width:'20%',
        height:30,
    },
    iconer:{
        fontSize:30,
    },
    text:{
        fontSize:18,
    },
    button:{
        backgroundColor:'#4accffff',
        padding:10,
        borderRadius:10,
        elevation:5,
        color:'#fff',
        fontSize:18,
        fontWeight:'bold',
    },
    but:{
        margin:15,
        borderRadius:10,
    },
    container1:{
        backgroundColor:'#fff',
    },
    amount:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10,
        borderWidth:1,
        borderRadius:10,
        borderColor:'#006d05ff',
        margin:10,
        backgroundColor:'#d7ffd1ff',
    },
});
export default Payment;
