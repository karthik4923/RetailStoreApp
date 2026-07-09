import React, { useEffect, useRef, useState } from 'react';
import {View,Text,StyleSheet, TouchableOpacity,Image,ScrollView,Animated,} from 'react-native';
//@ts-ignore
import Feather from 'react-native-vector-icons/Feather';
import { scrolldata,categorydata} from './data';
import {useNavigation} from '@react-navigation/native';
const Categories=()=>{
    const navigation=useNavigation();
    const [cat,setcat]=useState(0);
    const axis=useRef(new Animated.Value(0)).current;
    const [maindata,setdata]=useState(categorydata[0]);
    useEffect(()=>{
        Animated.spring(axis,{
            toValue:cat*80,
            useNativeDriver:true
        }).start();
    },[cat]);
    const changer=(i)=>{
        const selectedCategory = categorydata[i] || [];
        if (selectedCategory) {
            setdata(selectedCategory);
        };
    };
    console.log(maindata);
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{fontSize:18,}}>All Categories</Text>
                <View style={{flexDirection:'row',gap:10,}}>
                    <TouchableOpacity
                        onPress={()=>navigation.navigate('Search')}>
                        <Feather name={'search'} style={{fontSize:25,}}/>
                    </TouchableOpacity>
                    <Feather name={'camera'} style={{fontSize:25,}}/>
                </View>
            </View>
            <View style={styles.scrollcontainer}>
                <ScrollView 
                showsVerticalScrollIndicator={false}
                style={styles.left}>
                    {
                        scrolldata.map((item,i)=>(
                            <TouchableOpacity
                                onPress={()=>{setcat(i),changer(i)}}
                                key={i} style={[styles.leftinner,cat===i && {backgroundColor:'#fff',borderRightWidth:0}]}>
                                <Image source={item.img} style={[cat===i?styles.actimg:styles.img]}/>
                                <Text style={[{fontSize:13,color:'#4d4d4dff'},cat===i &&{transform:[{scale:1.2}],color:'#0061bbff'}]}>{item.type}</Text>
                            </TouchableOpacity>
                        ))
                    }
                    <Animated.View
                    style={[styles.line,{transform:[{translateY:axis}]}]}/>
                </ScrollView>
                <ScrollView 
                showsVerticalScrollIndicator={false}
                style={styles.right}>
                    <Image source={maindata.image} style={{width:'100%',height:150,borderRadius:20,}}/>
                    {maindata.data &&
                        maindata.data.map((group,index)=>(
                            <View key={index} style={styles.outercat}>
                                <Text style={{fontSize:17,fontWeight:'bold'}}>{group.type}</Text>
                                <View
                                style={styles.outercat1}>
                                {group.items.map((item,itemidx)=>(
                                    <TouchableOpacity 
                                        onPress={()=>navigation.navigate('Productpage',{searched:item.search})}
                                        key={itemidx} style={styles.innercat}>
                                        <Image source={item.img} style={styles.img1}/>
                                        <Text style={{textAlign:'center',fontSize:12,fontWeight:'bold'}}>{item.name}</Text>
                                    </TouchableOpacity>
                                ))}
                                </View>
                            </View>
                        ))
                    }
                </ScrollView>
            </View>
        </View>
    )
};
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
    },
    header:{
        paddingTop:50,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:10,
        backgroundColor:'#fff',
        paddingBottom:10,
        elevation:10,
        shadowColor:'#2c2c2cff',
        zIndex:20,
    },
    scrollcontainer:{
        width:'100%',
        flexDirection:'row',
        height:'90%',
        gap:'1%',
    },
    left:{
        width:'25%',
        zIndex:200,
        //borderRightWidth:1,
        //borderColor:'#cececeff',
        //backgroundColor:'#f7f7f7ff',
    },
    right:{
        width:'70%',
        padding:5,
    },
    leftinner:{
        alignItems:'center',
        borderBottomWidth:1,
        //borderColor:'#ccc',
        borderRightWidth:1,
        borderColor:'#aaaaaaff',
        padding:3,
        backgroundColor:'#f3f3f3ff',
        justifyContent:'center',
        borderTopRightRadius:15,
        borderEndEndRadius:15,
        height:80,
    },
    img:{
        width:'100%',
        height:50,
        resizeMode:'contain',
        alignItems:'center',
    },
    actimg:{
        width:'50%',
        height:50,
        borderRadius:50,
        padding:10,
        borderColor:'#6c93ffff',
        backgroundColor:'#e2f6ffff',
        borderWidth:1,
    },
    line:{
        padding:4,
        height:80,
        position:'absolute',
        backgroundColor:'#6c93ffff',
        borderRadius:30,
    },
    outercat:{
        padding:15,
    },
    outercat1:{
        flexDirection:'row',
        flexWrap:'wrap',
        columnGap:'5%',
    },
    innercat:{
        width:'30%',
        alignItems:'center',
        paddingTop:10,
    },
    img1:{
        width:'100%',
        height:100,
        borderColor:'#007eb9ff',
        borderWidth:1,
        resizeMode:'contain',
        borderRadius:10,
        marginBottom:4,
    }
});
export default Categories;