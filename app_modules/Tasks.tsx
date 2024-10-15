import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button, Text, View } from 'react-native'

const Tasks = () => {

  const navigation = useNavigation();
  return (
    <View>
      <Text>
        This is tasks page
      </Text>
      <Button onPress={() => navigation.navigate('Settings')} title='Go to Settings'/>
    </View>
  )
}

export default Tasks