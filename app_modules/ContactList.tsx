import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'


const ContactList = () => {

    const contactData = [
        {name:"Anna Cruz", number: +639152489578, relation:'Work',
             image:'https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ='},
        {name:"Elsa Doe", number: +639184965257, relation:'Family',
             image:'https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?b=1&s=612x612&w=0&k=20&c=MsKXmwf7TDRdKRn_lHohhmD5rvVvnGs9ry0xl6CrMT4='},
        {name:"Alice Blue", number: +639856674123, relation:'Friend',
             image:'https://t3.ftcdn.net/jpg/08/05/39/50/240_F_805395048_g1AHkBq7Bcs27aWU4rMHgdtGFDQ5IqeG.jpg'},
        {name:"Alex Moore", number: +639884412596, relation:'Friend',
             image:'https://atd-blog.s3.us-east-2.amazonaws.com/wp-content/uploads/2022/04/16142821/cool-profile-pictures-for-girls-9.webp'},
        {name:"Trish Lane", number: +639256557894, relation:'Work',
             image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNKjdNYeUExfmYku_I9lMFsCkydHHqOsx8qqqWVeV1wJD_rZM-aUBuBnD8iFpm72KFP54&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNKjdNYeUExfmYku_I9lMFsCkydHHqOsx8qqqWVeV1wJD_rZM-aUBuBnD8iFpm72KFP54&usqp=CAU'},
        {name:"Deone Ralf", number: +639123652139, relation:'Work',
             image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRRaROhQ1C3f_3XDU290fRAGfd66-CZnjdTMgiApuLcMRuTr5E3txwRy4FfmwLe7hkqpw&usqp=CAU'},
        {name:"Jean Chu", number: +639884412396, relation:'Client',
             image:'https://media.istockphoto.com/id/1487465664/photo/portrait-employee-and-asian-woman-with-happiness-selfie-and-confident-entrepreneur-with.jpg?s=612x612&w=0&k=20&c=o-G4E27GNFTbxFSG7PbaamDPAPLPRsh2WWgtsiGdXDA='},
        {name:"Cris Dennings", number: +639887963254, relation:'Client',
             image:'https://plus.unsplash.com/premium_photo-1690579805307-7ec030c75543?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZSUyMGljb258ZW58MHx8MHx8fDA%3D'},
    ]

  return (
    <ScrollView style={styles.container}>
        <View style={styles.cardContainer}>
            {contactData.map((contact, index) => (
                <View key={index} style={styles.cardBody}>
                    <Image source={{uri:contact.image
                    }} style={styles.image}/>
                    <View style={styles.textContainer}>
                        <Text style={styles.name}>{contact.name}</Text>
                        <Text>{contact.number}</Text>
                        <Text>{contact.relation}</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button}>
                            <FontAwesome name='envelope-o' size={24} color="black"/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <FontAwesome name= "phone" size={24} color="black" />
                        </TouchableOpacity>
                    </View>

                </View>
            ))}
        </View>
    </ScrollView>
 
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'whitesmoke',
        
    },
    cardContainer:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 10,
        
        
    },
    cardBody:{
        borderRadius: 10,
        borderColor: 'grey',
        borderWidth: 1,
        padding: 10,
        marginBottom: 20,
        width: '48%',
        height: 'auto',
        
        
    },
    image:{
        width: '100%',
        height: 100,
        borderRadius: 10,
    },
    textContainer: {
        marginTop: 10,
    },
    name: {
        fontSize:24,
        fontWeight: 'bold',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    button: {
         
        borderRadius: 5,
        padding: 10,
        width: '48%',
        alignItems: 'center',
        
    },
    
})

export default ContactList
