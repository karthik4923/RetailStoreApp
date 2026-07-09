import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import {View,Text,ScrollView,Image,StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons  from 'react-native-vector-icons/Ionicons';
const Yourorders=()=>{
    const [data,setdata]=useState([]);
    const [mrp,setmrp]=useState(0);
    const [qua,setqua]=useState(0);
    const [amount,setamount]=useState(0);
    useEffect(()=>{
        const load=async()=>{
            const found=await AsyncStorage.getItem('Buyed');
            if(found){
                const a=JSON.parse(found);
                setdata(a);
            }
        };load();
    },[]);
     useEffect(()=>{
        const load=async()=>{
            const mrpprice=data.reduce((sum,p)=>sum+(p.quantity*p.price),0);
            const total=data.reduce((sum,p)=>sum+p.quantity*(p.price-(p.price*p.discount)/100),0);
            const qua=data.reduce((sum,p)=>sum+p.quantity,0)
            setmrp(mrpprice);
            setqua(qua);
            setamount(Math.ceil(total));
        };load();
    },[data])
    return(
        <View style={styles.container}>
            <View style={styles.head}>
                <Text style={{fontSize:20,fontWeight:'bold'}}>Your Orders</Text>
            </View>
            {
                data.length>0?
                <ScrollView>
                    {
                        data.map((item,i)=>(
                            <View key={i} style={styles.container1}>
                                <View style={styles.left}>
                                    <Image source={item.img} style={styles.image}/>
                                    <Text style={{textAlign:'center',borderWidth:1, borderRadius:10,paddingHorizontal:5,}}>Quanity : {item.quantity}</Text>
                                </View>
                                <View style={styles.right}>
                                    <Text style={{fontSize:18,fontWeight:'bold',}}>{item.name}</Text>
                                    <Text>{item.desc}</Text>
                                    <View style={{flexDirection:'row',alignItems:'center',}}>
                                       <Feather name={'arrow-down'} style={{color:'#39a805ff',fontSize:23,}}/>
                                        <Text style={{color:'#39a805ff',fontSize:18,paddingRight:10,}}>{item.discount}%</Text>
                                        <Text style={{fontSize:16,color:'#969696ff',fontWeight:'bold',textDecorationLine: 'line-through',paddingRight:6,}}>₹{item.price}</Text>
                                        <Text style={{fontSize:16,fontWeight:'bold'}}>₹{Math.round(item.price-(item.price*item.discount)/100)}</Text>
                                    </View>
                                    <View style={styles.rater}>
                                        <Text style={{fontWeight:'bold'}}>{item.rating}</Text>
                                        <Ionicons name={'star'} style={{fontSize:18,color:'#32bb16ff'}}/>
                                        <Image source={require('../assets/flipkartassured.png')} style={{width:100,height:30,marginLeft:10}}/>
                                    </View>
                                </View>
                            </View>
                    
                        ))
                    }
                </ScrollView>:
                <View>
                    <Text>No Orders to Show!</Text>
                </View>
            }
            {
                data.length>0  &&
            

                <View style={styles.bottom}>
                    <View style={styles.bottom1}>
                        <Text style={{fontSize:20,fontWeight:'bold'}}>Total Items</Text>
                        <Text style={{fontSize:20,fontWeight:'bold',borderWidth:1,borderRadius:10,paddingHorizontal:5}}>{qua}</Text>
                    </View>
                    <View style={styles.bottom1}>
                        <Text style={{fontSize:20,fontWeight:'bold'}}>Total Amount</Text>
                        <Text style={{fontSize:20,fontWeight:'bold'}}>₹{ amount}</Text>
                    </View>
                </View>
            }
        </View>
        
    );
};
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
    },
    container1:{
        flexDirection:'row',
        borderBottomWidth:1,
        padding:5,
        gap:'5%',
        borderBottomColor:'#acacacff',
        width:'100%',
        height:'50%',
    },
    head:{
        paddingTop:30,
        paddingHorizontal:10,
        borderBottomWidth:1,
        paddingBottom:10,
        borderBottomColor:'#acacacff',
    },
    left:{
        width:'30%',
    },
    right:{
        width:'60%',
    },
    rater:{
        flexDirection:'row',
        alignItems:'center',
    },
    image:{
        width:'100%',
        height:'80%',
        resizeMode:'contain',

    },
    bottom:{
        
    },
    bottom1:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        padding:15,
        borderTopWidth:1,
        borderTopColor:'#acacacff',
    },

});
export default Yourorders;