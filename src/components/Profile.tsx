import React, { useEffect, useState } from 'react';
import {View,Text,StyleSheet,Image, TouchableOpacity,TextInput, Alert} from 'react-native';
//@ts-ignore
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from  '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Profile=()=>{
    const navigation=useNavigation();
    const [gender,setgender]=useState(0);
    const [firstname,setfirstname]=useState('');
    const [lastname,setlastname]=useState('');
    const [email,setemail]=useState('');
    const [mobile,setmobile]=useState('');
    const [act,setact]=useState(null);
    const emailregex=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const phoneregex=/^[0-9]{10}$/;
    useEffect(()=>{
        const load=async()=>{
            const found=await AsyncStorage.getItem('userdata');
            if(found){
                const a=JSON.parse(found);
                setgender(a.gender);
                setemail(a.email);
                setfirstname(a.firstname);
                setlastname(a.lastname);
                setmobile(a.mobile);
            };
        };load();

    },[]);
    const submit=async()=>{
        if(!emailregex.test(email)){
            Alert.alert('Invalid email', 'Please enter a valid email address');
            return;
        }
        if(!phoneregex.test(mobile)){
            Alert.alert('Invalid phone number', 'Please enter a valid phone number');
            return;
        }
        if(gender!==null && firstname!=='' && lastname!=='' && email!==''){
            const a={
            gender:gender,
            firstname:firstname,
            lastname:lastname,
            email:email,
            mobile:mobile,
            }
            await AsyncStorage.setItem('userdata',JSON.stringify(a));
            navigation.navigate('Flipkart',{pager:'Account'});
        }
        
    };
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.iconer}
                onPress={()=>navigation.goBack()}>
                <Feather name={'arrow-left'} size={30} style={styles.icon}/>
            </TouchableOpacity>
            <View style={styles.header}>
                <TouchableOpacity 
                    onPress={()=>setgender(0)}
                    style={[gender===0 && styles.border]}>
                    <Image source={require('../assets/Male.png')} style={[styles.image,gender===0 && styles.actimg]}/>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={()=>setgender(1)}
                    style={[gender===1 && styles.border]}>
                    <Image source={require('../assets/Female.png')} style={[styles.image,gender===1 && styles.actimg]}/>
                </TouchableOpacity>
            </View>
            <View style={styles.middle}>
                <View>
                    <Text style={[styles.head,{color:act===0?'#097fadff':'#6e6e6eff'},]}>First Name</Text>
                    <TextInput 
                      value={firstname}
                      onChangeText={setfirstname}
                      placeholder='Enter Firstname'
                      onFocus={()=>setact(0)}
                      style={[styles.text,{borderBottomColor:act==0?'#097fadff':'#dfdfdfff'}]}
                      />
                </View>
                <View>
                    <Text style={[styles.head,{color:act===1?'#097fadff':'#6e6e6eff'},]}>Last Name</Text>
                    <TextInput 
                      value={lastname}
                      onChangeText={setlastname}
                      placeholder='Enter Lastname'
                      onFocus={()=>setact(1)}
                      style={[styles.text,{borderBottomColor:act==1?'#097fadff':'#dfdfdfff'}]}
                      />
                </View>
                <View>
                    <Text style={[styles.head,{color:act===2?'#097fadff':'#6e6e6eff'},]}>Mail</Text>
                    <TextInput 
                      value={email}
                      onChangeText={setemail}
                      placeholder='Enter mail'
                      onFocus={()=>setact(2)}
                      style={[styles.text,{borderBottomColor:act==2?'#097fadff':'#dfdfdfff'}]}/>
                </View>
                <View>
                    <Text style={[styles.head,{color:act===3?'#097fadff':'#6e6e6eff'},]}>Mobile Number</Text>
                    <TextInput 
                      value={String(mobile)}
                      onChangeText={setmobile}
                      placeholder='Mobile number'
                      onFocus={()=>setact(3)}
                      maxLength={10}
                      keyboardType='numeric'
                      style={[styles.text,{borderBottomColor:act==3?'#097fadff':'#dfdfdfff'}]}/>
                </View>

            </View>
            <View style={styles.bottom}>
                <TouchableOpacity
                    onPress={()=>submit()}
                    style={styles.button}>
                    <Text style={styles.subtext}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

};
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    icon:{color:'#fff',fontWeight:'bold',},
    iconer:{
        paddingTop:50,
        paddingHorizontal:10,
        paddingBottom:10,
        backgroundColor:'#72cff3ff',
    },
    header:{
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        gap:15,
        padding:20,
        justifyContent:'center',
    },
    image:{
        height:100,
        width:100,
    },
    border:{
        borderWidth:2,
        borderColor:'#ff0000ff',
        padding:5,
        borderRadius:100,
    },
    actimg:{
        width:90,
        height:90,
    },
    middle:{
        padding:20,
    },
    bottom:{
        alignItems:'center',
        padding:20,
    },
    button:{
        borderWidth:1,
        borderColor:'#ccc',
        backgroundColor:'#d8f4ffff',
        padding:10,
        borderRadius:10,
        elevation:5,
    },
    subtext:{color:'#097fadff',fontWeight:'bold',fontSize:20,textAlign:'center',},
    head:{
        fontSize:16,
        paddingTop:5,
    },
    text:{
        borderBottomWidth:1,
        fontSize:20,
    }

});
export default Profile;