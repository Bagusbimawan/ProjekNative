import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/tabs/Home/Home';
import Acount from '../screens/tabs/Acount/Acount';

const Tab = createBottomTabNavigator()
const Tabs = () => {
  return (
      <Tab.Navigator>
        <Tab.Screen name='Home' component={Home} options={{headerShown:false}}/>
        <Tab.Screen name='Acount' component={Acount} options={{headerShown:false}}/>
      </Tab.Navigator>
  ) 
}

export default Tabs