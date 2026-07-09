import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Flipkart from './src/Maincomponents/Flipkart';
import Grocery from './src/Maincomponents/Grocery';
import Minutes from './src/Maincomponents/Minutes';
import Travel from './src/Maincomponents/Travel';
import Search from './src/components/Search';
import Productpage from './src/components/Productpage';
import Profile from './src/components/Profile';
import Scanner from './src/components/Scanner';
import Yourorders from './src/components/Yourorders';
import Payment from './src/components/Payment';
const Stack=createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Flipkart'>
        <Stack.Screen name='Flipkart' component={Flipkart} options={{headerShown:false}}/>
        <Stack.Screen name='Minutes' component={Minutes} options={{headerShown:false}}/>
        <Stack.Screen name='Travel' component={Travel} options={{headerShown:false}}/>
        <Stack.Screen name='Grocery' component={Grocery} options={{headerShown:false}}/>
        <Stack.Screen name='Search' component={Search} options={{headerShown:false}}/>
        <Stack.Screen name='Productpage' component={Productpage} options={{headerShown:false}}/>
        <Stack.Screen name='Profile' component={Profile} options={{headerShown:false}}/>
        <Stack.Screen name='Scanner' component={Scanner} options={{headerShown:false}}/>
        <Stack.Screen name='Yourorders' component={Yourorders} options={{headerShown:false}}/>
        <Stack.Screen name='Payment' component={Payment} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
};

export default App;
