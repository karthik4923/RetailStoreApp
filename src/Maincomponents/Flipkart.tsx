import React, { useEffect,useState } from 'react';
import {View,Text, TouchableOpacity,StyleSheet} from 'react-native';
//@ts-ignore
import Ionicons from 'react-native-vector-icons/Ionicons'
//@ts-ignore
import Octicons from 'react-native-vector-icons/Octicons'
//@ts-ignore
import Icon from 'react-native-vector-icons/FontAwesome';
//@ts-ignore
import Material from 'react-native-vector-icons/MaterialCommunityIcons'
import Home from '../components/Home';
import Cart from '../components/Cart';
import Categories from '../components/Categories';
import Account from '../components/Account';
const Flipkart=({route})=>{
    const {pager}=route.params || '';
    const [page,setpage]=useState(pager || 'Home');
    return(
        <View style={styles.container}>
            <View 
            //showsVerticalScrollIndicator={false}
            style={styles.middler}>
                <View style={{ flex: 1, display: page === 'Home' ? 'flex' : 'none' }}>
                    <Home/>
                </View>

                <View style={{ flex: 1, display: page === 'Cart' ? 'flex' : 'none' }}>
                    <Cart />
                </View>

                <View style={{ flex: 1, display: page === 'Categories' ? 'flex' : 'none' }}>
                    <Categories />
                </View>

                <View style={{ flex: 1, display: page === 'Account' ? 'flex' : 'none' }}>
                    <Account />
                </View>
            </View>

            <View style={styles.iconcontainer}>
                <TouchableOpacity
                    onPress={()=>setpage('Home')}
                    style={styles.iconer}>
                    <Ionicons name={page==='Home'?'home-sharp':'home-outline'} style={[styles.dashicon,page==='Home' && {color:'#1774caff'}]}/>
                    <Text style={[styles.text,page==='Home' && {color:'#1774caff'}]}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>setpage('Categories')}
                    style={styles.iconer}>
                    <Octicons name="apps" style={[styles.dashicon,page==='Categories' && {color:'#1774caff'}]}/>
                    <Text style={[styles.text,page==='Categories' && {color:'#1774caff'}]}>Categories</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>setpage('Cart')}
                    style={styles.iconer}>
                    <Material name={page==='Cart'?'cart':"cart-outline"} style={[styles.dashicon,page==='Cart' && {color:'#1774caff'}]}/>
                    <Text style={[styles.text,page==='Cart' && {color:'#1774caff'}]}>Cart</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>setpage('Account')}
                    style={styles.iconer}>
                    <Icon name={page==='Account'?'user':"user-o"} style={[styles.dashicon,page==='Account' && {color:'#1774caff'}]}/>
                    <Text style={[styles.text,page==='Account' && {color:'#1774caff'}]}>Account</Text>
                </TouchableOpacity>
            </View>
        </View>

    );
};
const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    middler:{
       flex:1,
    },
    iconcontainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        paddingHorizontal:10,
        paddingVertical:12,
        bottom:0,
        width:'100%',
        borderWidth:1,
        borderColor:'#ccc',
        backgroundColor:'#fff',
        elevation:5,
        shadowColor:'#ccc',
        zIndex:1000,
    },
    iconer:{
        alignItems:'center',
    },
    dashicon:{
        fontSize:30,
    },
    text:{
        fontSize:16,
        fontWeight:'bold',
    }

})
export default Flipkart;