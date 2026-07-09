import React, { useCallback, useEffect, useState, } from "react";
import {Text,View,ScrollView,Image,TouchableOpacity,StyleSheet,Animated} from 'react-native';
import { Products } from "./Productdata";
import { useFocusEffect, useNavigation } from '@react-navigation/native';
//@ts-ignore
import Feather from 'react-native-vector-icons/Feather';
//@ts-ignore
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from "react-native-linear-gradient";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Productpage=({route})=>{
    const {searched}=route.params || '';
    const [data,setdata]=useState([]);
    const [data1,setdata1]=useState([]);
    const navigation=useNavigation();
    const [length,setlength]=useState();
    const [opacity]=useState(new Animated.Value(0));
    useEffect(()=>{
            const keyword=searched.toLowerCase().trim().split(' ');
            const fill=Products.filter(p=>
                keyword.includes(p.for.toLowerCase()) && (keyword.includes(p.subCategory?.toLowerCase()) || keyword.includes(p.type?.toLowerCase()))
            );
            setdata(fill);
    },[searched]);
   
    const addtocart=async(item)=>{
        const found=await AsyncStorage.getItem('cartitem');
        const array=found?JSON.parse(found): [];
        if(array){
            const index = array.findIndex(data => data.img === item.img);
            if(index!==-1){
                array[index].quantity+=1;
            }else{
                array.unshift({
                    ...item,
                    quantity:1,
                })
            }
        }
        Animated.sequence([
            Animated.timing(opacity,{
                toValue:1,
                duration:200,
                useNativeDriver:true,
            }),
            Animated.timing(opacity,{
                toValue:0,
                duration:500,
                delay:300,
                useNativeDriver:true,
            })
        ]).start();
        await AsyncStorage.setItem('cartitem',JSON.stringify(array));
        setdata1(array);
    };
    useFocusEffect(
        useCallback(()=>{
            const load=async()=>{
                const found=await AsyncStorage.getItem('cartitem');
                if(found){
                    const a=JSON.parse(found);
                    setdata1(a);
                    setlength(a.length);
                }
            };load();
        },[])
    );
    const deleter=async(imgdata)=>{
       setdata1(prev => {
        const updated = prev.filter(item => item.img !== imgdata);
        AsyncStorage.setItem('cartitem', JSON.stringify(updated));
        return updated;
       });
    };
    const renderCartButton = (item) => {
        const exists = data1.find((c) => c.img === item.img);
        if (exists) {
            return (
                <View style={{alignItems:'center',marginVertical:5,paddingVertical:5,paddingHorizontal:10,borderRadius:10,borderWidth:2,borderColor:'#b1a502ff',justifyContent:'space-between',flexDirection:'row'}}>
                    <Text style={{ fontWeight: "bold" }}>In Cart ({exists.quantity})</Text>
                    <TouchableOpacity
                        onPress={()=>deleter(item.img)}>
                        <Feather name={'trash-2'} style={{fontSize:25,color:'#f00000ff'}}/>
                    </TouchableOpacity>
                </View>
            );
        }
        return (
            <TouchableOpacity onPress={() => addtocart(item)}>
                <LinearGradient
                colors={["#fdf14bff", "#ffc933ff"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.button}
                >
                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>Add to cart</Text>
                </LinearGradient>
            </TouchableOpacity>
        );
    };
    useEffect(()=>{
        setlength(data1.length);
        AsyncStorage.setItem('cartitem',JSON.stringify(data1));
    },[data1]);
    console.log(data1);
    console.log(length);
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Search',{searched:searched})} style={styles.iconwidth}>
                    <Feather name={'arrow-left'} style={styles.icons} />
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('Search',{searched:searched})}
                    style={styles.searcher}>
                    <Feather name={'search'} style={styles.icons} />
                    <Text style={styles.inputer}>{searched}</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={()=>navigation.navigate('Flipkart',{pager:'Cart'})}
                    style={[styles.iconwidth,{flexDirection:'row'}]}>
                    <Ionicons name={'cart-outline'} style={styles.icons}/>
                    <Text style={styles.cartind}>{length}</Text>
                </TouchableOpacity>
            </View>
            <ScrollView
            showsVerticalScrollIndicator={false}
             style={styles.scrollcontainer}>
            <View
             style={styles.outercont}>
                {
                    data.map((item,i)=>(
                        <View key={i} style={styles.innercont}>
                            <Image source={item.img} style={styles.image}/>
                            <View style={styles.rater}>
                                <Text style={{fontWeight:'bold'}}>{item.rating}</Text>
                                <Ionicons name={'star'} style={{fontSize:18,color:'#32bb16ff'}}/>
                            </View>
                            <View style={styles.desc}>
                                <Text style={{fontWeight:'bold',fontSize:18,}}>{item.name}</Text>
                                <Text style={{height:50,color:'#969696ff'}}>{item.desc}</Text>
                                <View style={{flexDirection:'row',alignItems:'center',}}>
                                    <Feather name={'arrow-down'} style={{color:'#39a805ff',fontSize:23,}}/>
                                    <Text style={{color:'#39a805ff',fontSize:18,paddingRight:10,}}>{item.discount}%</Text>
                                    <Text style={{fontSize:16,color:'#969696ff',fontWeight:'bold',textDecorationLine: 'line-through',paddingRight:6,}}>₹{item.price}</Text>
                                    <Text style={{fontSize:16,fontWeight:'bold'}}>₹{Math.round(item.price-(item.price*item.discount)/100)}</Text>
                                </View>
                                {renderCartButton(item)}
                            </View>
                        </View>
                    ))
                }
            </View>
            </ScrollView>
             <Animated.View
                style={[styles.added,{opacity}]}>
                 <Text style={{color:'#ddffd0ff',fontSize:18,fontWeight:'bold'}}>Added to cart</Text>
            </Animated.View>
        </View>
    );
};
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
    },
    header: {
        paddingTop: 50,
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        backgroundColor: '#e7f3ffff',
        paddingBottom: 20,
        elevation: 10,
        width:'100%',
        paddingHorizontal:5,
        justifyContent:'space-between',
    },
    iconwidth:{
        //width:'7%',
        alignItems:'center',
        //paddingHorizontal:5,
    },
    cartind:{
        color:'white',
        backgroundColor:'#ff0000ff',
        fontSize:18,
        padding:3,
        borderRadius:50,
        fontWeight:'bold',
    },
    searcher: {
        flexDirection: 'row',
        borderWidth: 2,
        alignItems: 'center',
        borderRadius: 20,
        gap: 10,
        borderColor: '#b7d0e9ff',
        backgroundColor: '#fff',
        padding:5,
        width:'75%',
    },
    inputer: {
        flex:1,
    },
    rater:{
        flexDirection:'row',
        position:'absolute',
        top:160,
        left:15,
        backgroundColor:'#f1f1f1ff',
        padding:5,
        borderRadius:10,
        elevation:5,
        borderWidth:0.4,
        borderColor:'#5e5e5eff',
        shadowColor:'#000000ff',
        zIndex:100,
    },
    icons: {
        fontSize: 28,
        color: '#505050ff',
    },
    outercont:{
        flexDirection:'row',
        flexWrap:'wrap',
        gap:10,
        paddingTop:5,
        paddingBottom:20,
        justifyContent:'space-between',
    },
    innercont:{
        width:'48%',
        borderWidth:1,
        borderColor:'#9b9b9bff',
        borderRadius:10,
    },
    image:{
        width:'100%',
        height:200,
        resizeMode:'contain',
        borderRadius:10,
        borderWidth:1,
        borderColor:'#9b9b9bff',
    },
    desc:{
        padding:10,
    },
    scrollcontainer:{
        padding:10,
    },
    button:{
        alignItems:'center',
        marginVertical:5,
        padding:5,
        borderRadius:10,
        elevation:5,
        shadowColor:'#000000ff',
    },
    added:{
        position:'absolute',
        bottom:'10%',
        left:'30%',
        padding:10,
        borderRadius:20,
        backgroundColor:'#37be01ff',
        elevation:10,
        shadowColor:'#3d3d3dff',
        borderWidth:1,
        borderColor:'#858585ff',
        zIndex:500,
    }
});
export default Productpage;