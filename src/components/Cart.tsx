import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect,useState} from 'react';
import {View,Text,ScrollView,Image,StyleSheet, TouchableOpacity, Alert,} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons  from 'react-native-vector-icons/Ionicons';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import Video from 'react-native-video';
const Cart=()=>{
    const navigation=useNavigation();
    const [showdata,setshowdata]=useState([]);
    const [length,setlength]=useState(0);
    const [mrp,setmrp]=useState(0);
    const [amount,setamount]=useState(0);
    const [data,setdata]=useState([])
    useEffect(()=>{
        const load=async()=>{
            const found=await AsyncStorage.getItem('cartitem');
            if(found){
                const a=JSON.parse(found);
                setshowdata(a);
            }

        };load();
    },[]);
    useEffect(()=>{
        const load=async()=>{
            const mrpprice=showdata.reduce((sum,p)=>sum+(p.quantity*p.price),0);
            const total=showdata.reduce((sum,p)=>sum+p.quantity*(p.price-(p.price*p.discount)/100),0);
            setmrp(mrpprice);
            setamount(Math.ceil(total));
        };load();
    },[showdata])
    useEffect(() => {
        setlength(showdata.length);
        AsyncStorage.setItem('cartitem', JSON.stringify(showdata));
    }, [showdata]);

    const deleter=async(imgdata)=>{
        const up=showdata.filter(a=>a.img!==imgdata);
        setshowdata(up);
        AsyncStorage.setItem('cartitem', JSON.stringify(up));
    };
    const increase=async(imgdata)=>{
        const up=showdata.map(a=>a.img===imgdata?{...a,quantity:a.quantity+1}:a);
        setshowdata(up);
        AsyncStorage.setItem('cartitem', JSON.stringify(up));
    }
    const decrease=async(imgdata)=>{
        const up=showdata.map(a=>{
            if(a.img===imgdata){
                const l=a.quantity-1;
                return {...a,quantity:l};
            }
            return a;
        }).filter(a => a.quantity > 0);
        setshowdata(up);
        AsyncStorage.setItem('cartitem', JSON.stringify(up));
    };
    const handleQuantity=(text,i)=>{
        const up=[...showdata];
        up[i].quantity=parseInt(text);
        setshowdata(up);
        AsyncStorage.setItem('cartitem', JSON.stringify(up));
    }
    const buyed=async()=>{
        await AsyncStorage.setItem('cartitem',JSON.stringify(showdata));
        //await AsyncStorage.setItem('Buyed',JSON.stringify(showdata));
        Alert.alert('Thanks for Purchasing');
        //setshowdata([]);
        //await AsyncStorage.removeItem('cartitems');
        navigation.navigate('Payment',{amount:amount});
    }
    //console.log(showdata);
    return(
        <View style={styles.container}>
            <View style={styles.txt}>
                <Text style={{fontSize:20,fontWeight:'bold'}}>My Cart</Text>
                <View style={{alignItems:'center',flexDirection:'row',gap:10,}}>
                    <Feather name={'shopping-cart'} style={{fontSize:25}}/>
                     <Text style={{backgroundColor:'red',padding:5,borderRadius:10,color:'#fff',fontSize:20,fontWeight:'bold'}}>{length}</Text>
                  </View>
           </View>
           {showdata.length>0?
           <ScrollView>
            {
                showdata.map((item,i)=>(
                    <View key={i} style={styles.cartcontainer}>
                        <View style={styles.top}>
                            <View style={styles.left}>
                                <View>
                                    <Image source={item.img} style={styles.image}/>
                                </View>
                                <View style={styles.quantcont}>
                                    <TouchableOpacity
                                        onPress={()=>decrease(item.img)}>
                                        <Feather name={'minus-square'} style={[styles.quant,{color:'#db0000ff'}]}/>
                                    </TouchableOpacity>
                                    <TextInput
                                        value={String(item.quantity)}
                                        onChangeText={(text)=>handleQuantity(text,i)}
                                        keyboardType='numeric'
                                        style={styles.selectquant}
                                        />
                                    <TouchableOpacity
                                        onPress={()=>increase(item.img)}>
                                        <Feather name={'plus-square'} style={[styles.quant,{color:'#38c700ff'}]}/>
                                    </TouchableOpacity>
                                </View>
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
                        <View style={styles.bottom}>
                            <TouchableOpacity
                                onPress={()=>deleter(item.img)}
                                style={[styles.innertouch,{borderRightWidth:1,borderRightColor:'#b6b6b6ff',}]}>
                                <Ionicons name={'trash-outline'} style={styles.icons}/>
                                <Text style={styles.icontext}>Remove</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.innertouch,{borderRightWidth:1,borderRightColor:'#b6b6b6ff',}]}>
                                <Ionicons name={'download-outline'} style={styles.icons}/>
                                <Text style={styles.icontext}>Save it</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.innertouch}>
                                <Ionicons name={'flash-outline'} style={styles.icons}/>
                                <Text style={styles.icontext}>Buy it Now</Text>
                            </TouchableOpacity>
                    
                        </View>
                    </View>
                ))
            }
            { showdata.length>0 &&
                <View>
                    <View style={styles.amountcontainer}>
                        <View style={[styles.amountinner,{borderBottomWidth:1,borderBottomColor:'#b6b6b6ff'}]}>
                            <Text style={{borderBottomWidth:1,borderStyle:'dotted'}}>MRP(incl.of all taxes)</Text>
                            <Text>₹{mrp}</Text>
                        </View>
                        <View style={[styles.amountinner,{borderBottomWidth:1,borderBottomColor:'#b6b6b6ff'}]}>
                            <Text>Discount</Text>
                            <Text style={{color:'#0aa323ff'}}> - ₹{Math.round(mrp - amount)}</Text>
                        </View>
                        <View>
                            <View style={styles.amountinner}>
                                <Text style={{fontWeight:'bold'}}>Total Amount</Text>
                                <Text style={{fontWeight:'bold'}}>₹{amount}</Text>
                            </View>
                            <View style={styles.discount}>
                                <Material name={'brightness-percent'} style={{fontSize:25,color:'#0aa323ff'}}/>
                                <Text style={{fontSize:17,color:'#0aa323ff',fontWeight:'bold'}}> You'll save ₹{Math.round(mrp - amount)} on this order</Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity
                            onPress={()=>buyed()}>
                            <LinearGradient
                            colors={['#eff300ff','#ffcc41ff']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y:0 }}
                            style={styles.button}>
                            <Text style={{fontSize:20,fontWeight:'bold'}}>Buy</Text>
                        
                    </LinearGradient>
                    </TouchableOpacity>
                </View>
            }
            
           </ScrollView>
           :
           <View style={{justifyContent:'center',alignItems:'center',padding:10,backgroundColor:'#fff'}}>
             <Video source={require('../assets/watermarked_preview.mp4')}
              style={{width:'100%',height:200}}
              repeat
              controls={false}
              resizeMode="contain"
              paused={false}/>
              <Text style={{fontSize:20,}}>Your Cart is Empty!</Text>
              <TouchableOpacity
                onPress={()=>navigation.navigate('Search')}>
                <Text style={styles.but}>Shop now</Text>
              </TouchableOpacity>
           </View> 
           }
        </View>

    );
}
const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    cartcontainer:{
        //gap:10,
        width:'100%',
        marginVertical:10,
        backgroundColor:'#fff',
        borderWidth:1,
        borderColor:'#b6b6b6ff',
        elevation:5,
        shadowColor:'#080808ff',
    },
    top:{
        flexDirection:'row',
        gap:20,
        width:'100%',
        padding:10,
    
    },
    right:{
        width:'60%',
       
    },
    left:{
        width:'30%',
        
    },
    image:{
        width:'100%',
        height:80,
        resizeMode:'contain',
        borderWidth:1,
        borderColor:'#b6b6b6ff',
        borderRadius:10,
    },
    txt:{
        paddingTop:50,
        paddingHorizontal:10,
        paddingBottom:10,
        backgroundColor:'#fff',
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',
    },
    
    icons:{
        color:'#777777ff',
        fontSize:25,
    },
    icontext:{
        fontSize:17,
        color:'#777777ff',
    },
    bottom:{
        flexDirection:'row',
        width:'100%',
        borderTopWidth:1,
        borderColor:'#b6b6b6ff',
        //justifyContent:'space-between',
        alignItems:'center',

    },
    innertouch:{
        width:'32%',
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:5,
        justifyContent:'center',
    },
    quantity:{
        paddingVertical:'10%',

    },
    quanticons:{
        fontSize:30,
    },
    quantsigns:{
        paddingVertical:'10%',
        flexDirection:'row',
        justifyContent:'space-between',

    },
    outerquanticons:{
        width:'42%',
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        borderColor:'#b6b6b6ff',
        padding:2,
        borderRadius:5,
    },
    amountcontainer:{
        margin:20,
        backgroundColor:'#fff',
        borderRadius:10,
        elevation:5,
    },
    amountinner:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10,
    },
    rater:{
        flexDirection:'row',
        alignItems:'center',
    },
    button:{
        margin:10,
        padding:10,
        alignItems:'center',
        borderRadius:10,

    },
    quantcont:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:10,
        gap:10,
        flex:1,
    },
    quant:{
        fontSize:25,
        fontWeight:'bold',
    },
    selectquant:{
        width:'35%',
        borderWidth:1,
        borderColor:'#b6b6b6ff',
        fontWeight:'bold',
        textAlign:'center',
        fontSize:17,
    },
    discount:{
        flexDirection:'row',
        padding:5,
        justifyContent:'center',
        gap:10,
        backgroundColor:'#deffe4ff',
        margin:10,
        borderRadius:10,
        elevation:4,
        borderWidth:0.3,
        borderColor:'#047c18ff',

    },
    but:{
        backgroundColor:'#5fb7ffff',
        color:'white',
        fontWeight:'bold',
        fontSize:20,
        borderRadius:10,
        padding:10,
        margin:10,
    },
    
})
export default Cart;