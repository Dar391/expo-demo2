import React, { useEffect, useState } from "react";
import {
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";

const ContactList = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const [image, setImage] = useState<string | null>(null);
  const [contactID, setContactID] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [relation, setRelation] = useState("");

  //image picker
  const openImagePicker = async () => {
    let permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permission.granted) {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
      });

      if (!result.canceled) {
        setImage(result.assets[0].uri); // Set the selected image URI
      }
    } else {
      alert("Permission to access media library is required!");
    }
  };

  //modal
  const openModal = () => {
    setModalVisible(true); // Show the modal
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  //inserting to database using axios
  const insertContact = async () => {
    if (!firstName || !lastName || !phoneNumber || !relation) {
      alert("Please fill in all fields.");
      return; // Prevent submission if any field is empty
    }

    const url = "http://192.168.24.243/EXPO-DEMO2/database/insert.php";

    const contactData = {
      contactID: contactID,
      firstName: firstName,
      lastName: lastName,
      contactNumber: phoneNumber,
      relation: relation,
      image: image,
    };

    console.log("Data to be sent:", contactData);

    try {
      const response = await axios.post(url, contactData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Response from PHP:", response.data);
      closeModal();
      setRefreshData(true);
      setFirstName("");
      setLastName("");
      setPhoneNumber("");
      setRelation("");
      setImage(null);
    } catch (error) {
      console.error("Error saving contact:", error);
    }
  };

  const deleteContact = (id: any) => {
    console.log("ID is:", id);

    axios
      .post("http://192.168.24.243/EXPO-DEMO2/database/delete.php", {
        id: id,
      })
      .then((response) => {
        console.log(response.data);
      });
  };

  //declarations for displaying/getting data from db
  const [contactData, setContactData] = useState<any[]>([]);
  const [refreshData, setRefreshData] = useState(true);

  //when the file is loaded, this line of code will be triggered
  //getting data from database (array form) using axios with refresh function
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://192.168.24.243/EXPO-DEMO2/database/display.php"
        );
        console.log("List of data from PHP:", response.data);
        setContactData(response.data);
      } catch (error) {
        console.error("Error fetching contact data:", error);
      } finally {
        setRefreshData(false);
      }
    };

    if (refreshData) {
      fetchData();
    }
  }, [refreshData]);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContent}>
        <View style={styles.cardContainer}>
          {Array.isArray(contactData) && contactData.length > 0 ? (
            contactData.map((contact, index) => (
              <View key={index} style={styles.cardBody}>
                <Image
                  source={{
                    uri: contact.contactImage || "path/to/default-image.jpg",
                  }}
                  style={styles.image}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.name}>{contact.contactName}</Text>
                  <Text>{contact.contactNumber}</Text>
                  <Text>{contact.contactRelation}</Text>
                </View>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity style={styles.button}>
                    <FontAwesome name="phone" size={24} color="black" />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button}>
                    <FontAwesome
                      name="trash"
                      size={24}
                      color="black"
                      onPress={() => deleteContact(contact.contactID)}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            ))
          ) : (
            <Text>No contacts available</Text>
          )}
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.fab} onPress={() => openModal()}>
        <FontAwesome name="plus" size={24} color="white" />
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <View style={styles.headerAlignment}>
              <Text style={styles.header}>New Contact</Text>

              <TouchableOpacity onPress={closeModal}>
                <FontAwesome name="close" size={20} />
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              onPress={openImagePicker}
              style={styles.imageButton}
            >
              <Text style={styles.imageButtonText}>Choose Image</Text>
            </TouchableOpacity>

            {image && (
              <Image source={{ uri: image }} style={styles.imagePreview} />
            )}

            <TextInput
              style={styles.input}
              placeholder="First name"
              keyboardType="default"
              value={firstName}
              onChangeText={setFirstName}
            />
            <TextInput
              style={styles.input}
              placeholder="Last name"
              keyboardType="default"
              value={lastName}
              onChangeText={setLastName}
            />
            <TextInput
              style={styles.input}
              placeholder="Phone number"
              keyboardType="decimal-pad"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
            />
            <TextInput
              style={styles.input}
              placeholder="Relation"
              keyboardType="default"
              value={relation}
              onChangeText={setRelation}
            />

            <TouchableOpacity
              onPress={insertContact}
              style={styles.closeButton}
            >
              <Text style={styles.closeButtonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
  },
  cardBody: {
    borderRadius: 10,
    borderColor: "grey",
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    width: "48%",
    height: "auto",
  },
  image: {
    width: "100%",
    height: 100,
    borderRadius: 10,
  },
  textContainer: {
    marginTop: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "auto",
  },
  button: {
    borderRadius: 5,
    padding: 10,
    width: "48%",
    alignItems: "center",
  },
  fab: {
    position: "absolute",
    right: 20,
    bottom: 20,
    backgroundColor: "#2196F3",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4, // for Android shadow
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
  },
  scrollContent: {
    paddingBottom: 80,
  },
  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginVertical: 10,

    borderBottomWidth: 1,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    width: "80%",
    height: "auto",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 35,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: "10%",
  },
  headerAlignment: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  closeButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#2196F3",
    borderRadius: 5,
    alignContent: "center",
    alignItems: "center",
  },
  closeButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  imageButton: {
    backgroundColor: "#4CAF50",
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  imageButtonText: {
    color: "white",
    fontSize: 16,
  },
  imagePreview: {
    width: 100,
    height: 100,
    marginTop: 10,
    borderRadius: 5,
  },
});

export default ContactList;
