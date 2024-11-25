import React, { useState } from 'react'
import { FlatList, Image, Modal, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

type CallEntry = {
    name: string;
    number: string;
    callType: 'Incoming' | 'Outgoing' | 'Missed';
    timestamp: string;
    image: string;
    color:string;
};

const CallHistory = () => {

    const callData: CallEntry[] = [
        {
            name: "Anna Cruz",
            number: "+639152489578",
            callType: 'Incoming',
            timestamp: '2024-10-25 14:30',
            image: 'https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=',
            color:'red'
        
        },
        {
            name: "Elsa Doe",
            number: "+639184965257",
            callType: 'Outgoing',
            timestamp: '2024-10-25 13:00',
            image: 'https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?b=1&s=612x612&w=0&k=20&c=MsKXmwf7TDRdKRn_lHohhmD5rvVvnGs9ry0xl6CrMT4=',
            color:'blue'
        },
        {
            name: "Alice Blue",
            number: "+639856674123",
            callType: 'Missed',
            timestamp: '2024-10-24 11:15',
            image: 'https://t3.ftcdn.net/jpg/08/05/39/50/240_F_805395048_g1AHkBq7Bcs27aWU4rMHgdtGFDQ5IqeG.jpg',
            color:'yellow'
        },
        {
            name: "Alex Moore",
            number: "+639884412596",
            callType: 'Outgoing',
            timestamp: '2024-10-23 09:45',
            image: 'https://atd-blog.s3.us-east-2.amazonaws.com/wp-content/uploads/2022/04/16142821/cool-profile-pictures-for-girls-9.webp',
            color:'green'
        },
        {
            name: "Trish Lane",
            number: "+639256557894",
            callType: 'Incoming',
            timestamp: '2024-10-22 08:30',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNKjdNYeUExfmYku_I9lMFsCkydHHqOsx8qqqWVeV1wJD_rZM-aUBuBnD8iFpm72KFP54&usqp=CAU',
            color:'orange'

       
        },
        {
            name: "Deone Ralf",
            number: "+639123652139",
            callType: 'Missed',
            timestamp: '2024-10-21 17:50',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRRaROhQ1C3f_3XDU290fRAGfd66-CZnjdTMgiApuLcMRuTr5E3txwRy4FfmwLe7hkqpw&usqp=CAU',
            color:'violet'
        },
        {
            name: "Jean Chu",
            number: "+639884412396",
            callType: 'Outgoing',
            timestamp: '2024-10-20 15:00',
            image: 'https://media.istockphoto.com/id/1487465664/photo/portrait-employee-and-asian-woman-with-happiness-selfie-and-confident-entrepreneur-with.jpg?s=612x612&w=0&k=20&c=o-G4E27GNFTbxFSG7PbaamDPAPLPRsh2WWgtsiGdXDA=',
            color:'maroon'
        },
        {
            name: "Cris Dennings",
            number: "+639887963254",
            callType: 'Incoming',
            timestamp: '2024-10-19 14:10',
            image: 'https://plus.unsplash.com/premium_photo-1690579805307-7ec030c75543?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZSUyMGljb258ZW58MHx8MHx8fDA%3D',
            color:'#ab34i0'
        },
        {
            name: "Cris Dennings",
            number: "+639887963254",
            callType: 'Incoming',
            timestamp: '2024-10-19 14:10',
            image: 'https://plus.unsplash.com/premium_photo-1690579805307-7ec030c75543?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZSUyMGljb258ZW58MHx8MHx8fDA%3D',
            color:'#ab34i0'
        },
    ];

    //modal events
    const [modalVisible, setModalVisible] = useState(false)
    const [selectedCall, setSelectedCall] = useState<CallEntry | null>(null);
   
    const openModal = (item: CallEntry) => {
        setSelectedCall(item); // Set the selected item
        setModalVisible(true); // Show the modal
    };
    
    const closeModal = () => {
        setModalVisible(false); // Hide the modal
        setSelectedCall(null); // Clear the selected item
    };


    const renderItem = ({ item }: { item: CallEntry }) => (
        <TouchableOpacity style={styles.itemContainer} 
        onPress={() =>openModal(item)} //modal event when clicked
        >   
           <View style={styles.textContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <Text>{item.number}</Text>
                <Text style={[styles.number, item.callType === 'Missed' && styles.missedCallText]}>{item.callType}</Text>
            </View>
            
            <Text style={styles.timeStamp}>{item.timestamp}</Text>

            <FontAwesome name={'info'} 
            size={15}
            color={item.color}
            
            />
        </TouchableOpacity>
    );

  return (
    <View style={styles.container}>
        <Text style={styles.headingHistory}>
            Call history
        </Text>
        <FlatList 
        data={callData}
        renderItem={renderItem}
        /> 
     
    {selectedCall && (
        <Modal animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Image source={{ uri: selectedCall.image }} style={styles.profileImage} />
                    <Text style={styles.name}>{selectedCall.name}</Text>
                    <Text>{selectedCall.number}</Text>
                    <Text style={[styles.number, selectedCall.callType === 'Missed' && styles.missedCallText]}>{selectedCall.callType}</Text>
                    <Pressable  style={[styles.button, styles.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}>
                        <Text>
                            Close
                        </Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    )}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: 'whitesmoke',
        padding: 12,
    },
    textContainer: {
        flex: 1,
    },
    
    name: {
        fontWeight: 'bold',
    },
    callType: {
        fontStyle: 'italic',
        color: 'gray',
    },
    items:{
        padding:10,
       
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10,
        marginVertical: 5,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    timeStamp:{
        paddingRight:15,
        fontSize:10
    },
    headingHistory:{
       paddingTop:25,
        fontSize:20,
        fontWeight:'bold'

    },
    number: {
        color: 'gray',
        marginTop: 2,
    },
    missedCallText: {
        color: 'red',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'red'
      },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      buttonOpen: {
        backgroundColor: '#F194FF',
      },
      buttonClose: {
        backgroundColor: '#2196F3',
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },
      profileImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 15,
    },
   
});
export default CallHistory
