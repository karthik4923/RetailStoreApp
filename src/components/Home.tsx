import React, { useEffect, useRef, useState } from 'react';
import {View,Text,Image,StyleSheet,TouchableOpacity,Animated,ScrollView, Dimensions} from 'react-native';
//@ts-ignore
import Feather from 'react-native-vector-icons/Feather';
//@ts-ignore
import Ionicons from 'react-native-vector-icons/Ionicons';
//@ts-ignore
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {scrolldata,maindata} from './data.js'
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import Dashboard from '../Maincomponents/Dashboard'
const { width,height } = Dimensions.get('window');
const items=['Shoes','Shirts','Books','TV','Laptop','Mobiles']
const ITEM_HEIGHT = 40; 
const DURATION = 700; 
const INTERVAL = 700;
const HEADER_MAX_HEIGHT = 120;
const HEADER_MIN_HEIGHT = 0;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
const Home=()=>{
    const navigation = useNavigation();
    const scrollViewRef=useRef<ScrollView>(null);
    const [selectedIndex,setSelectedIndex]=useState(0);
    const linepos=useRef(new Animated.Value(0)).current;
    const [curindex,setcurinex]=useState(1);
    const coursalref=useRef(null);
    const [imgdata,setimgdata]=useState(maindata[0]?.images||[]);
    const showImages = [imgdata[imgdata.length - 1], ...imgdata, imgdata[0]];
    const [category,setcategory]=useState(maindata[0]);
    const translateY=useRef(new Animated.Value(0)).current;
    const scrollY=useRef(new Animated.Value(0)).current;
    const headerHeight=scrollY.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE],
        outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
        extrapolate: "clamp",
    });
    useEffect(()=>{
        let index=0;
        const animate=()=>{
            index++;
            Animated.timing(translateY,{
                toValue:-index* ITEM_HEIGHT,
                duration:DURATION,
                useNativeDriver:true,
            }).start(()=>{
                if(index===items.length){
                    translateY.setValue(0);
                    index=0;
                }
                setTimeout(animate,INTERVAL);
            });
        };
        const timeout = setTimeout(animate, INTERVAL);
        return () => clearTimeout(timeout);
    },[]);
    useEffect(()=>{
        const interval=setInterval(()=>{
           if (coursalref.current && showImages.length > 1) {
                setcurinex(prev => {
                const next = prev + 1;
                coursalref.current?.scrollTo({
                x: width * next,
                animated: true,
                });
            return next;
            });
        }
    },3000);
        return()=>clearInterval(interval);
    },[curindex,showImages]);
    const getDotIndex = (index: number) => {
        if (index === 0) return imgdata.length - 1;
        if (index === imgdata.length + 1) return 0;
        return index - 1;
    };
    const handlescroll=(event:any)=>{
        const offset=event.nativeEvent.contentOffset.x;
        let index=Math.round(offset/width);
        if(index===0){
            index=imgdata.length;
            coursalref.current?.scrollTo({x:width*index,animated:false});
        }else if(index===imgdata.length+1){
            index=1;
            coursalref.current?.scrollTo({x:width*index,animated:false});
        }
        setcurinex(index);
    }
    const handleItemPress=(index:number)=>{
        if(selectedIndex===index) return '';
        setSelectedIndex(index);
        setcurinex(1);
        setTimeout(() => {
            coursalref.current?.scrollTo({x:1*width,animated:false});
        }, 0);
        setimgdata(maindata[index]?.images ||[]);
        setcategory(maindata[index] || {});
        scrollViewRef.current?.scrollTo({ x:index*85, animated: true });

        Animated.spring(linepos,{
            toValue:index*85,
            useNativeDriver:true,
        }).start();
    };
    return(
        <View style={styles.container}>
            <Dashboard initialpage={'Flipkart'} />
            <LinearGradient 
               colors={['#bb46a1ff','#df70ceff']}
               start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
               style={styles.head}>
                <View style={styles.head1}>
                    <TouchableOpacity
                    onPress={()=>navigation.navigate('Search')}
                     style={styles.head1sub1}>
                        <Feather name={'search'} style={styles.inputicon}/>
                        <View style={styles.container1}>
                        <Animated.View style={[{transform:[{translateY}]}]}>
                            {[...items,items[0]].map((item,i)=>(
                                <Text key={i} style={styles.text1}>{item}</Text>
                            ))}
                        </Animated.View>
                        </View>
                        <Feather name={'camera'} style={styles.inputicon}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{width:'10%',alignItems:'center'}}
                        onPress={()=>navigation.navigate('Scanner')}>
                        <MaterialIcons name={'qr-code-scanner'} style={[styles.iconer]}/>
                    </TouchableOpacity>
                </View>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    ref={scrollViewRef}
                    style={{paddingVertical:10,}}>
                        {
                            scrolldata.map((data,index)=>(
                           
                                <TouchableOpacity
                                onPress={() =>
                                handleItemPress(index)}
                                key={index}
                                style={styles.outerscroll}>
                                    <Ionicons name={data.icon} style={[styles.iconer,selectedIndex===index && {color:'#fffc48ff', fontWeight:'bold',transform:[{scale:1.4}]}]} />
                                    <Text style={[styles.namer,selectedIndex===index && {color:'#fffc48ff', fontWeight:'bold',}]}>{data.type}</Text>
                            </TouchableOpacity>
                         
                            ))
                        }
                        <Animated.View 
                            style={[
                                styles.line,
                                {
                                    transform:[{translateX:linepos}],
                                },
                            ]}
                        />
                        
                </ScrollView>
            </LinearGradient>
                <ScrollView 
                showsVerticalScrollIndicator={false}
                style={styles.cover}>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled
                        onMomentumScrollEnd={handlescroll}
                        ref={coursalref}
                        >
                            {
                               showImages.map((img,index)=>(
                                <View key={index} style={styles.imagecover}>
                                    <Image source={img} style={styles.images}/>
                                </View>
                               ))
                            }

                    </ScrollView>
                    <View style={styles.dotscontainer}>
                        
                        {imgdata.map((_,i)=>(
                            <View key={i}
                            style={[styles.dots,
                                { backgroundColor: getDotIndex(curindex)===i? '#000' : '#fff' },
                            ]}
                            />
                        ))}
                         
                    </View>
                    <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{paddingHorizontal:10}}>
                    <View style={styles.outercat}>
                        {
                            category.types.map((item,i)=>(
                                <TouchableOpacity key={i} style={styles.catcont} 
                                onPress={()=>navigation.navigate('Productpage',{searched:item.search})}>
                                    <Image source={item.img} style={styles.catimg}/>
                                    <Text style={{fontWeight:'bold'}}>{item.name}</Text>

                                </TouchableOpacity>
                            ))
                        }
                    </View>
                    </ScrollView>
                    <Text style={{fontWeight:'bold',fontSize:17,paddingHorizontal:15,paddingVertical:5,}}>Deals for Today</Text>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={{paddingHorizontal:10,marginVertical:10,}}>
                            {
                               
                                    category.deals.map((item,i)=>(
                                    <View key={i} style={{width:160,borderWidth:1,borderRadius:10,marginRight: 10, padding:5,borderColor:'#919191ff'}}>
                                        <Image source={item.img} style={{height:150,width:'100%',borderRadius:10,}} resizeMode="cover"/>
                                        <View style={{padding:5}}>
                                            <Text style={{fontWeight:'bold',fontSize:14,}}>{item.name}</Text>
                                            {item.offer && <Text style={{fontSize:13,}}>min {item.offer}% off</Text>}
                                            {item.under && <Text style={{fontSize:13,}}>under ₹{item.under}</Text>}
                                        </View>
                                    </View>
                                    ))
                                
                                
                            }
                     
                    </ScrollView>
                    {
                        category.Mostsale.length>0 &&
                        <View>
                            <Text style={{fontSize:27,fontWeight:'bold',textAlign:'center',}}>𝓜𝓸𝓼𝓽 𝓢𝓪𝓵𝓮 𝓟𝓻𝓸𝓭𝓾𝓬𝓽𝓼</Text>
                            {
                                category.Mostsale.map((item,i)=>(
                                    <View key={i} style={{paddingHorizontal:15,paddingVertical:5,elevation:6,shadowColor:'#303030ff'}}>
                                        <Image source={item.img} style={{width:'100%',borderRadius:10,height:150,}}/>
                                    </View>
                                ))
                            }

                        </View>
                    }
                    
                </ScrollView>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    container1: {
    height: ITEM_HEIGHT,
    overflow: "hidden",
    //width:'80%',
    flex:1,
  },
   text1: {
    height: ITEM_HEIGHT,
    fontSize: 20,
    color:'#8f8f8fff',
    padding:5,
  },
    head:{
        width:'100%',
        paddingTop:10,
    },
    head1:{
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:15,
        gap:10,
    },
    head1sub1:{
        flexDirection:'row',
        alignItems:'center',
        width:'90%',
        borderWidth:1,
        borderColor:'#ccc',
        borderRadius:10,
        gap:5,
        paddingHorizontal:10,
        backgroundColor:'#fff',
    },
    outerscroll:{
        width:85,
        alignItems:'center',
        paddingVertical:10,

    },
    inputicon:{
        fontSize:27,
        color:'#000000ff',
    },
    iconer:{
        fontSize:30,
        color:'#fff',
        marginBottom:3,
    },
    namer:{
        fontWeight:'bold',
        color:'#fff',
    },
    inputer:{
       flex:1,
       padding:10,
       color:'#727272ff',
       fontSize:15,
    },
    line:{
        width:85,
        height:4,
        backgroundColor:'#ffffffff',
        position: 'absolute',
        bottom: 0,
        left: 0,
        borderRadius:20,
    },
    cover:{
        flex:1,
        backgroundColor:'#fff',
    },
    imagecover:{
        paddingVertical:20,
        paddingHorizontal:21,
        flex:1,
    },
    images:{
        width:(width*0.9),
        height:height*0.2,
        resizeMode:'cover',
        borderRadius:20,
        borderColor:'#ccc',
        borderWidth:0.5,
        elevation:5,
    },
    dotscontainer:{
        flexDirection:'row',
        gap:5,
        justifyContent:'center',
    },
    dots:{
        width:15,
        height:10,
        borderRadius:30,
        borderWidth:1,
        borderColor:'#888888ff',
    },
    outercat:{
        paddingVertical:10,
        flexDirection:'row',
        flexWrap:'wrap',
        width:950,
        paddingRight:5,
        gap:11,
    },
    catcont:{
        width:83,
        height:80,
        alignItems:'center',
    },
    catimg:{
        width:60,
        height:60,
        resizeMode:'cover',
        borderRadius:10,
        borderWidth:1,
        borderColor:'#bebebeff',
        marginBottom:4,
        elevation:3,
    },
})
export default Home;