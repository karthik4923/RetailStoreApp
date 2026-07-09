import React, { useEffect, useRef, useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity,Text,Image,ScrollView,useWindowDimensions} from 'react-native';
//@ts-ignore
import Feather from 'react-native-vector-icons/Feather';
//@ts-ignore    
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import {Products} from '../components/Productdata.js';
import { searchable,mostpopular } from './data.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Search = ({route}) => {
    const {searched}=route.params || '';
    const navigation = useNavigation();
    const {width}=useWindowDimensions();
    const [search, setsearch] = useState(searched || '');
    const inputref = useRef<TextInput>(null); 
    const [Productdata,setProductsdata]=useState([]);
    const [recentdata,setrecentdata]=useState([]);
    useEffect(() => {
        setTimeout(() => {
            inputref.current?.focus();
        }, 100); 
    }, []); 
    useEffect(()=>{
         if (!search.trim()) {
            setProductsdata([]);
            return;
        }
        const fill=searchable.filter(p=>
            p.name.toLowerCase().includes(search.toLowerCase())
        );
        const keywordArray = search.toLowerCase().trim().split(' ');
        const genderFromSearch = (() => {
            if (keywordArray.includes('men')) return 'men';
            if (keywordArray.includes('women')) return 'women';
            if (keywordArray.includes('kids')) return 'kids';
            return null;
        })();

        const filteredProducts = Products.filter(prod => {
            if (genderFromSearch && prod.for?.toLowerCase() !== genderFromSearch) {
                return false;
            }
            const searchableText = `
                ${prod.name}
                ${prod.desc}
                ${prod.category}
                ${prod.for||''}
                ${prod.subCategory}
                ${prod.type}
            `.toLowerCase();
            return keywordArray.every(word => searchableText.includes(word));
        });
        const a=[
            ...fill,
            ...filteredProducts,
        ].slice(0,10);
        setProductsdata(a);
    },[search]);
    useEffect(()=>{
        const loader=async()=>{
            const found=await AsyncStorage.getItem('recent');
            if(found){
                setrecentdata(JSON.parse(found));
            }
        };loader();
    },[]);
    const setrecent=async(name)=>{
        const updated = [name, ...recentdata.filter(item => item !== name)].slice(0, 5);
        setrecentdata(updated);
        await AsyncStorage.setItem('recent', JSON.stringify(updated));
    };
    const navi=(item)=>{
        setsearch(item);
        navigation.navigate('Productpage',{searched:item});
    }
    const HighlightedText = ({ text, highlight }) => {
    if (!highlight) return <Text>{text}</Text>;
    const regex = new RegExp(`(${highlight.split(' ').join('|')})`, 'gi'); 
    const parts = text.split(regex);

    return (
        <Text>
            {parts.map((part, i) =>
                regex.test(part) ? (
                    <Text key={i} style={{ color: '#000000ff',fontWeight:'bold' }}>{part}</Text>
                ) : (
                    <Text key={i} style={{color:'#585858ff'}}>{part}</Text>
                )
            )}
        </Text>
    );
};

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Flipkart',{pager:'Home'})} style={{width:'5%'}}>
                    <Feather name={'arrow-left'} style={{color: '#505050ff',fontSize:28,}} />
                </TouchableOpacity>

                <View style={styles.searcher}>
                    <Feather name={'search'} style={styles.icons} />
                    <TextInput
                        ref={inputref}  
                        value={search}
                        onChangeText={setsearch}
                        placeholder="Search"
                        style={styles.inputer}
                    />
                    {
                        search!==''?
                        <TouchableOpacity
                            onPress={()=>setsearch('')}>
                            <Feather name={'x'} style={styles.icons} />
                        </TouchableOpacity>
                        :
                        <TouchableOpacity
                            onPress={()=>navigation.navigate('Scanner')}>
                            <Feather name={'camera'} style={styles.icons} />
                        </TouchableOpacity>
                       

                    }
                </View>
            </View>
            {
                search!==''?
                <View style={{backgroundColor:'#ffff'}}>
                    {Productdata.map((items,i)=>(
                        <TouchableOpacity key={i} style={styles.touchablecont} 
                        onPress={()=>{
                            setsearch(items.name);
                            setrecent(items.name);
                            navigation.navigate('Productpage',{searched:items.name});
                            }}>
                            <View style={{flexDirection:'row',alignItems:'center',gap:10,}}>
                                <Image style={{width:32,height:32,resizeMode:'contain'}} source={items.img}/>
                                {/*<Text style={{color:'#5f5f5fff'}}>{items.name}</Text>*/}
                                <HighlightedText text={items.name} highlight={search} />

                            </View>
                            <Feather name={'arrow-up-left'} size={30}/>

                        </TouchableOpacity>
                    ))}
                </View>

                :
                <ScrollView
                    showsVerticalScrollIndicator={false}>
                    {recentdata.length>0 && (
                    <View style={{backgroundColor:'#fff',marginTop:10,elevation:7,}}>
                        <Text style={{fontWeight:'bold',fontSize:17,padding:5,color:'#777777ff'}}>Recently Searches</Text>
                        <View>
                            {
                                recentdata.map((item,i)=>(
                                    <TouchableOpacity key={i}  onPress={() => navi(item)} 
                                    style={{flexDirection:'row',gap:10,paddingVertical:5,paddingHorizontal:10,borderBottomWidth:0.5,borderBottomColor:'#444444ff',}}>
                                        <Entypo name={'back-in-time'} size={25}/>
                                        <Text>{item}</Text>
                                    </TouchableOpacity>
                                ))
                            }
                        </View>
                    </View>
                    )}
                    <View style={{backgroundColor:'#fff',marginTop:10,elevation:7,paddingVertical:10,flex:1,}}>
                        <Text style={{fontWeight:'bold',fontSize:17,padding:5,color:'#777777ff'}}>Popular Products</Text>
                        <View style={styles.outer}>
                            {
                                mostpopular.map((item,i)=>(
                                    <View key={i} style={styles.inner}>
                                        <Image source={item.img} style={styles.img}/>
                                        <Text style={{fontWeight:'bold',fontSize:16}}>{item.name}</Text>
                                        <Text style={{color:'#747474ff'}}>{item.desc}</Text>
                                    </View>
                                ))
                            }
                        </View>
                    </View>
                </ScrollView>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0ff',
    },
    header: {
        paddingTop: 50,
        width:'100%',
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        backgroundColor: '#e7f3ffff',
        paddingBottom: 20,
        elevation: 10,
        paddingHorizontal:5,
    },
    searcher: {
        flexDirection: 'row',
        borderWidth: 2,
        alignItems: 'center',
        borderRadius: 20,
        borderColor: '#b7d0e9ff',
        backgroundColor: '#ffffffff',
        width:'90%',
        paddingHorizontal:10,
    },
    inputer: {
        flex:1,
    },
    icons: {
        fontSize: 28,
        color: '#505050ff',
    },
    touchablecont:{
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:7,
        paddingHorizontal:10,
        borderBottomColor:'#ccc',
        borderBottomWidth:1,
    },
    img:{
        width:'100%',
        height:120,
        resizeMode:'contain',
        borderRadius:5,
    },
    outer:{
        //flex:1,
        flexDirection:'row',
        flexWrap:'wrap',
        columnGap:'4%',
        rowGap:'2%',
        paddingVertical:'3%',
        paddingHorizontal:'4%',
        
        
    },
    inner:{
        alignItems:'center',
        width:'30%',
        borderWidth:1,
        borderColor:'#b3b3b3ff',
        borderRadius:5,
    }
});

export default Search;
