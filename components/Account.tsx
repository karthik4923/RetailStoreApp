import React, { useEffect,useState } from 'react';
import {View,Text,Image,ScrollView,StyleSheet, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Icon6 from 'react-native-vector-icons/FontAwesome6';
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from  '@react-navigation/native';
const Account=()=>{
    const navigation=useNavigation();
    const [firstname,setfirstname]=useState('');
    const [lastname,setlastname]=useState('');
    const [email,setemail]=useState('');
    useEffect(()=>{
        const load=async()=>{
             const found=await AsyncStorage.getItem('userdata');
            if(found){
                const a=JSON.parse(found);
                setemail(a.email);
                setfirstname(a.firstname);
                setlastname(a.lastname);
            };

        };load();
    },[])
    return(
        <ScrollView
            style={styles.container}>   
            <View style={styles.mainheader}>
            <View style={styles.header}>
                <View style={styles.innerheader}>
                    <Text style={{fontWeight:'bold',fontSize:18,}}>{firstname.toUpperCase()} {lastname.toUpperCase()}</Text>
                    <View style={styles.exchangecoins}>
                        <Image source={require('../assets/coin.png')} style={{height:25,width:25,}}/>
                        <Text style={{fontWeight:'bold',fontSize:17,}}>0</Text>
                    </View>
                </View>
                <Text style={{fontWeight:'bold',fontSize:16,}}>{email}</Text>
            </View>
            <View style={styles.header2}>
                <TouchableOpacity
                    onPress={()=>navigation.navigate('Yourorders')}
                    style={styles.box}>
                    <Feather name={'package'} style={styles.icons}/>
                    <Text style={{fontWeight:'bold',fontSize:16,}}>Orders</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.box}>
                    <Feather name={'heart'} style={styles.icons}/>
                    <Text style={{fontWeight:'bold',fontSize:16,}}>Wishlist</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.box}>
                    <Feather name={'gift'} style={styles.icons}/>
                    <Text style={{fontWeight:'bold',fontSize:16,}}>Coupons</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.box}>
                    <Icon6 name={'headset'} style={styles.icons}/>
                    <Text style={{fontWeight:'bold',fontSize:16,}}>Help Center</Text>
                </TouchableOpacity>
            </View>
            </View>
            <View style={styles.mainheader}>
                <View style={{width:'100%'}}>
                    <Text style={styles.mainheading}>Finance Options</Text>
                    <TouchableOpacity
                            style={styles.outercontent}>
                            <MaterialIcons name={'mobile-friendly'} style={styles.iconer}/>
                            <View style={styles.iconcontent}>
                                <Text style={styles.head}>Flipkart Personal Loan</Text>
                                <Text style={styles.desc}>Instant Cash upto {'\u20B9'}10,00,000</Text>
                            </View>
                            <Feather name={'chevron-right'} style={styles.iconer1}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                            style={styles.outercontent}>
                            <Ionicons name={'wallet-outline'} style={styles.iconer}/>
                            <View style={styles.iconcontent}>
                                <Text style={styles.head}>EMI for Everyone</Text>
                                <Text style={styles.desc}>No Cost EMI | Intsant Approval</Text>
                            </View>
                            <Feather name={'chevron-right'} style={styles.iconer1}/>
                    </TouchableOpacity>
              
                    <TouchableOpacity
                            style={styles.outercontent}>
                            <Entypo name={'credit-card'} style={styles.iconer}/>
                            <View style={styles.iconcontent}>
                                <Text style={styles.head}>Apply Now for Flipkart Credit Card</Text>
                                <Text style={styles.desc}>5% Cashback | {'\u20B9'}2,250 Gift Vochers | {'\u20B9'}save 64,000 annually</Text>
                            </View>
                            <Feather name={'chevron-right'} style={styles.iconer1}/>
                    </TouchableOpacity>
                    
                </View>
            </View>
            <View style={styles.mainheader}>
                <TouchableOpacity
                    style={styles.outercontent}>
                    <Ionicons name={'documents-outline'} style={styles.iconer}/>
                    <View style={styles.iconcontent}>
                        <Text style={styles.head}>Axis Bank SuperMoney Rupay Card</Text>
                        <Text style={styles.desc}>3% Cashback on UPI | Lifetime Free</Text>
                    </View>
                    <Feather name={'chevron-right'} style={styles.iconer1}/>
                </TouchableOpacity>
            </View>
            <View style={styles.mainheader}>
                <View style={{width:'100%'}}>
                    <Text style={styles.mainheading}>Account Settings</Text>
                    <TouchableOpacity
                         style={styles.outercontent1}>
                        <Material name={'star-four-points-outline'} style={styles.iconer}/>
                        <Text style={styles.iconcontent}>Flipkart Plus</Text>
                        <Feather name={'chevron-right'} style={styles.iconer1}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=>navigation.navigate('Profile')}
                         style={styles.outercontent1}>
                        <Feather name={'user'} style={styles.iconer}/>
                        <Text style={styles.iconcontent}>Edit Profile</Text>
                        <Feather name={'chevron-right'} style={styles.iconer1}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                         style={styles.outercontent1}>
                        <Material name={'wallet-outline'} style={styles.iconer}/>
                        <Text style={styles.iconcontent}>Saved Credit / Debit & Gift Cards</Text>
                        <Feather name={'chevron-right'} style={styles.iconer1}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                         style={styles.outercontent1}>
                        <Ionicons name={'location-outline'} style={styles.iconer}/>
                        <Text style={styles.iconcontent}>Saved Addresses</Text>
                        <Feather name={'chevron-right'} style={styles.iconer1}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                         style={styles.outercontent1}>
                        <Ionicons name={'language-outline'} style={styles.iconer}/>
                        <Text style={styles.iconcontent}>Select Languages</Text>
                        <Feather name={'chevron-right'} style={styles.iconer1}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                         style={styles.outercontent1}>
                        <Feather name={'bell'} style={styles.iconer}/>
                        <Text style={styles.iconcontent}>Notification Settings</Text>
                        <Feather name={'chevron-right'} style={styles.iconer1}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                         style={styles.outercontent1}>
                        <Ionicons name={'lock-closed-outline'} style={styles.iconer}/>
                        <Text style={styles.iconcontent}>Privacy Center</Text>
                        <Feather name={'chevron-right'} style={styles.iconer1}/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.mainheader}>
                <View style={{width:'100%'}}>
                    <Text style={styles.mainheading}>My Activity</Text>
                    <TouchableOpacity
                         style={styles.outercontent1}>
                        <Icon6 name={'pen-to-square'} style={styles.iconer}/>
                        <Text style={styles.iconcontent}>Reviews</Text>
                        <Feather name={'chevron-right'} style={styles.iconer1}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                         style={styles.outercontent1}>
                        <Ionicons name={'chatbubbles-outline'} style={styles.iconer}/>
                        <Text style={styles.iconcontent}>Questions & Awnsers</Text>
                        <Feather name={'chevron-right'} style={styles.iconer1}/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.mainheader}>
                <View style={{width:'100%'}}>
                    <Text style={styles.mainheading}>Earn with Flipkart</Text>
                    <TouchableOpacity
                         style={styles.outercontent1}>
                        <Entypo name={'shop'} style={styles.iconer}/>
                        <Text style={styles.iconcontent}>Sell on Flipkart</Text>
                        <Feather name={'chevron-right'} style={styles.iconer1}/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.mainheader}>
                <View style={{width:'100%'}}>
                    <Text style={styles.mainheading}>Feedback & Information</Text>
                    <TouchableOpacity
                         style={styles.outercontent1}>
                        <Ionicons name={'documents-outline'} style={styles.iconer}/>
                        <Text style={styles.iconcontent}>Terms, Policies and Licenses</Text>
                        <Feather name={'chevron-right'} style={styles.iconer1}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                         style={styles.outercontent1}>
                        <Icon name={'question-circle-o'} style={styles.iconer}/>
                        <Text style={styles.iconcontent}>Browse FAQs</Text>
                        <Feather name={'chevron-right'} style={styles.iconer1}/>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity
                style={{padding:10,justifyContent:'center',alignItems:'center',borderWidth:1,
                        borderColor:'#ccc',backgroundColor:'#fff',margin:10,elevation:1,}}>
                <Text style={{fontSize:20,color:'#2676d1ff',}}>Logout</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f1f1f1ff',
    },
    mainheader:{
        elevation:5,
        marginBottom:10,
        backgroundColor:'#fff',
    },
    header:{
        backgroundColor:'#ecf7ffff',
        marginTop:20,
        marginHorizontal:10,
        padding:15,
        borderRadius:10,
    },
    innerheader:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    exchangecoins:{
        flexDirection:'row',
        gap:10,
        width:70,
        alignItems:'center',
        borderRadius:20,
        padding:5,
        borderWidth:2,
        backgroundColor:'#fff',
        borderColor:'#ffdc40ff',
    },
    header2:{
        padding:20,
        flexDirection:'row',
        flexWrap:'wrap',
        gap:15,
        justifyContent:"space-between",
    },
    box:{
        flexDirection:'row',
        borderWidth:1,
        borderRadius:10,
        width:'46%',
        padding:7,
        alignItems:'center',
        gap:10,
        borderColor:'#b3b3b3ff',
        paddingHorizontal:15,
    },
    icons:{
        fontSize:23,
        color:'#2676d1ff',
        fontWeight:'bold',
    },
    iconer:{
        width:'10%',
        fontSize:30,
        color:'#2676d1ff',
    },
    iconer1:{
        //width:'10%',
        fontSize:20,
        color:'#7c7c7cff',
    },
    outercontent:{
        width:'100%',
        paddingHorizontal:10,
        paddingVertical:10,
        flexDirection:'row',
        alignItems:'center',
        gap:10,
        justifyContent:'space-between',
    },
    outercontent1:{
        width:'100%',
        paddingHorizontal:10,
        paddingVertical:7,
        flexDirection:'row',
        alignItems:'center',
        gap:10,
        justifyContent:'space-between',
    },
    iconcontent:{
        //flex:1,
        width:'80%',
        fontSize:17,
        color:'black',
    },
    head:{
        fontSize:17,
    },
    desc:{
        fontSize:15,
        color:'#969696ff'
    },
    mainheading:{
        fontWeight:'bold',
        fontSize:20,
        padding:10,

    },
})
export default Account;