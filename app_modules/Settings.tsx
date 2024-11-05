import {  ListRenderItem, SectionList, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'


type SettingItem = {
  key: string;
  icon: string;
};

type SettingSection = {
  title: string;
  data: SettingItem[];
};


const Settings = () => {

  const settingsData: SettingSection[] = [
    {
        title: 'Account Settings',
        data: [
            { key: 'Profile', icon: 'user' },
            { key: 'Privacy', icon: 'lock' },
            { key: 'Security', icon: 'shield' },
            { key: 'Change Password', icon: 'key' },
        ],
    },
    {
        title: 'App Settings',
        data: [
            { key: 'Notifications', icon: 'bell' },
            { key: 'Language', icon: 'language' },
            { key: 'Appearance', icon: 'paint-brush' },
            { key: 'About', icon: 'info-circle' },
        ],
    },
];

const renderItem: ListRenderItem<SettingItem> = ({ item }) => (
  <TouchableOpacity style={styles.itemContainer}>
      <FontAwesome name={item.icon} size={20} color="#555" style={styles.icon} />
      <Text style={styles.itemText}>{item.key}</Text>
  </TouchableOpacity>
);

const renderSectionHeader = ({ section: { title } }: { section: SettingSection }) => (
  <Text style={styles.sectionHeader}>{title}</Text>
);

  return (
    <View style={styles.container}>
      <SectionList
                sections={settingsData}
                renderItem={renderItem}
                renderSectionHeader={renderSectionHeader}
            />
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft:10,
    paddingRight:10,
    backgroundColor: '#fff',
    paddingTop:25
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
    paddingVertical: 10,
    paddingHorizontal: 15,
   
},
itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderBottomWidth: 0.5,
    borderBottomColor: '#ddd',
},
icon: {
    marginRight: 15,
},
itemText: {
    fontSize: 16,
    color: '#333',
},
});