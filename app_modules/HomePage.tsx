import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { StyleSheet,Button, SafeAreaView, Text, View, TextInput, FlatList } from 'react-native';
import ContactList from './ContactList';

const HomePage = () => {
 

  return (
    <View style={styles.container}>
      <ContactList/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingLeft:10,
    paddingRight:10,
    backgroundColor: 'whitesmoke',
    
  },
  header: {
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  dashboard: {
    flexDirection: 'row',
    flexWrap:'wrap',
    justifyContent: 'space-between', 
    marginBottom: 20,
    padding:5
    
  },
  card: {
    width: '48%', 
    padding: 15,
    marginVertical: 5,
    backgroundColor: '#e0f7fa',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2, 
  },
  cardText: {
    fontSize: 18,
    textAlign: 'center', 
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
  },
  taskItem: {
    padding: 15,
    marginVertical: 5,
    backgroundColor: '#f9c2ff',
    borderRadius: 5,
  },
  taskText: {
    fontSize: 18,
  },
});

export default HomePage