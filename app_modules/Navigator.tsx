import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import HomePage from './HomePage';
import Tasks from './Tasks';
import Settings from './Settings';

const Navigator = () => {

    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown:true}}>
        <Stack.Group>
        <Stack.Screen name='Home' component={HomePage}/>
        <Stack.Screen name='Tasks' component={Tasks}/>
        <Stack.Screen name='Settings' component={Settings}/>
        </Stack.Group>
   </Stack.Navigator>
  )
}

export default Navigator

