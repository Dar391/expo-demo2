import React from 'react'
import HomePage from './HomePage';
import Tasks from './Tasks';
import Settings from './Settings';
import CallHistory from './CallHistory';
import { View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Navigator = () => {

  const Tab = createBottomTabNavigator();
  const topTab = createMaterialTopTabNavigator()

  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color }) => {
        let iconName: string = '';

        if (route.name === 'Contacts') {
          iconName = focused ? 'address-book' : 'address-book';
        } else if (route.name === 'History') {
          iconName = focused ? 'clock-o' : 'clock-o';
        } else if (route.name === 'Settings') {
          iconName = focused ? 'cog' : 'cog';
        }

        // Return the FontAwesome icon component
        return <FontAwesome name={iconName} 
        size={20} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',  // Active tab icon color
      tabBarInactiveTintColor: 'gray',  // Inactive tab icon color
      headerShown:false
    })} >
      <Tab.Screen name='Contacts' component={HomePage}/>
      <Tab.Screen  name='History' component={CallHistory}/>
      <Tab.Screen  name='Settings' component={Settings}/>
    </Tab.Navigator>
  )
}

export default Navigator

