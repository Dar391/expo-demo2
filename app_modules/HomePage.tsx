import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button, SafeAreaView, Text, View } from 'react-native';

const HomePage = () => {

    const navigation = useNavigation();
  return (
    <View> 
    <Text style={{padding:'5%'}}>
    Welcome to your home page
    </Text>
    
    <Button onPress={() => navigation.navigate('Tasks')} 
    title='Go to Tasks'/>

    
    </View>
  )
}

export default HomePage