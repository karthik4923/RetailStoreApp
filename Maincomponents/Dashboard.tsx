import React, { useState } from 'react';
import {View,Text,StyleSheet,Image,TouchableOpacity} from 'react-native';
import img1 from '../assets/FlipKart.png';
import img2 from '../assets/pay.png';
import img3 from '../assets/travel.png';
import img4 from '../assets/grocceries.png'
import img5 from '../assets/bike.png';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
const Dashboard=({initialpage})=>{
    const navigation = useNavigation();
    const [homepage,sethomepage]=useState(initialpage || 'Flipkart');
    const render1=()=>{
        switch(homepage){
            case 'Flipkart':
                return ['#963881ff','#bb46a1ff'];
            case 'Minutes':
                return ['#fcc1c1ff','#ffc5f7ff'];
            case 'Travel':
                return ['#7eccffff','#b2e0ffff'];
            case 'Grocery':
                return ['#fdde76ff','#fff3cbff'];
        }
    };
    return(
        <View>
            <LinearGradient
                 colors={render1()}
                 start={{ x: 0.5, y: 0 }}
                 end={{ x: 0.5, y: 1 }}
                 style={[styles.header]}>
                    <View style={styles.head1}>
                        <TouchableOpacity
                            onPress={()=>{sethomepage('Flipkart'),navigation.navigate('Flipkart')}}
                            style={[styles.imagecontainer,homepage==='Flipkart' && {backgroundColor:'#f3f02bff'}]}>
                            <Image source={img1} style={styles.headimage}/>
                            <Text style={[styles.text]}>Flipkart</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={()=>{sethomepage('Minutes'),navigation.navigate('Minutes')}}
                            style={[styles.imagecontainer,homepage==='Minutes' && {backgroundColor:'#e23098ff'}]}>
                            <Image source={homepage==='Minutes'?img5:img2} style={[styles.headimage]}/>
                            <Text style={[styles.text,homepage==='Minutes' && {color:'#fff'}]}>Minutes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={()=>{sethomepage('Travel'),navigation.navigate('Travel')}}
                            style={[styles.imagecontainer,homepage==='Travel' && {backgroundColor:'#50a9fcff'}]}>
                            <Image source={img3} style={styles.headimage}/>
                            <Text style={[styles.text,homepage==='Travel' && {color:'#fff'}]}>Travel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={()=>{sethomepage('Grocery'),navigation.navigate('Grocery')}}
                            style={[styles.imagecontainer,homepage==='Grocery' && {backgroundColor:'#c55b04ff'}]}>
                            <Image source={img4} style={styles.headimage}/>
                            <Text style={[styles.text,homepage==='Grocery' && {color:'#fff'}]}>Grocery</Text>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
        </View>
    )
}
const styles=StyleSheet.create({
    header:{
        width:'100%',
        paddingHorizontal:15,
        paddingTop:40,
        paddingVertical:10,
    },
    middle:{
        flex:1,
    },
    head1:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    imagecontainer:{
        //flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        width:'23%',
        borderRadius:15,
        padding:3,
        borderWidth:0.5,
        borderColor:'#5a5a5aff',
        backgroundColor:'#fff',
        elevation:10,
        shadowColor:'#4d4d4dff',
    },
    headimage:{
        height:40,
        width:40,
    },
    text:{
        fontStyle:'italic',
        fontSize:15,
        fontWeight:'bold'
    },
})
export default Dashboard;