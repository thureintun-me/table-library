import React, { useState } from "react";
import { View, StyleSheet, Image, Text, Dimensions, TouchableOpacity, Modal, TextInput } from "react-native";
import Header from "../components/Header";
import { useNavigation } from '@react-navigation/native';


const { width } = Dimensions.get("window");
const Playlist = () => {

  const  width  = Dimensions.get("window").width;
  const navigation = useNavigation();

  // This is to manage Modal State
  const [isModalVisible, setModalVisible] = useState(false);

  // This is to manage TextInput State
  const [inputValue, setInputValue] = useState("");

  // Create toggleModalVisibility function that will
  // Open and close modal upon button clicks.
  const toggleModalVisibility = () => {
    setModalVisible(!isModalVisible);
  };

  const navigateToSong = ()=>navigation.navigate('SelectSong');
  return (

    <View style={styles.container}>
      <Modal animationType="slide"
        transparent visible={isModalVisible}
        presentationStyle="overFullScreen"
        onDismiss={toggleModalVisibility}>
        <View style={styles.viewWrapper}>
          <View style={styles.modalView}>
            <Text style={{color:'white',marginBottom:27,fontSize:13}}>Create Playlist</Text>
            <TextInput placeholder="My Plasylist 1" placeholderTextColor='white' 
              value={inputValue} style={styles.textInput}
              onChangeText={(value) => setInputValue(value)} />

            {/** This button is responsible to close the modal */}

            <View style={styles.myButtonContainer}>
              <View style={{ marginRight: 52 }}><TouchableOpacity onPress={toggleModalVisibility}>
                <Text style={{color:'white'}}>Cancel</Text>
              </TouchableOpacity></View>



              <View style={styles.verticleLine}></View>
              <View style={{ marginLeft: 52 }}>
                <TouchableOpacity onPress={navigateToSong}>
                  <Text style={{ color: 'red' }}>Save</Text>
                </TouchableOpacity>
              </View>


            </View>
          </View>
        </View>
      </Modal>

      <View>
        <Header title='Playlists' onPress={() => navigation.navigate("Library")} />
      </View>


      <View style={styles.createPlaylistContainer}>
        <View style={styles.imageContainer}>
          <TouchableOpacity onPress={toggleModalVisibility}>
            <Image source={require('../assets/images/library/Plus.png')} style={styles.image} />
          </TouchableOpacity>
        </View>
        <View style={styles.textContainer}>


          <Text style={styles.text}>Create Playlist</Text>


        </View>




      </View>

    </View>
  )
}
const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: 'black'

    },
    createPlaylistContainer: {
      flex: 1,
      flexDirection: 'row',
      width: 154,
      height: 46,
      marginLeft: 11,
      marginTop: 52,


    },
    imageContainer: {


    },
    image: {
      
      width: 46,
      height: 46,

    },
    textContainer: {
      paddingVertical: 16,
      marginLeft: 15,
      height: 14,
      width: 93,


    },
    text: {

      color: 'white'
    },
    screen: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#000",
    },
    viewWrapper: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(0, 0, 0, 0.2)",
    },
    modalView: {
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      top: "50%",
      left: "50%",
      elevation: 5,

      transform: [{ translateX: -(width * 0.4) },
      { translateY: -90 }],
      height: 180,
      width: width * 0.8,

      backgroundColor: "#262626",
      borderRadius: 7,
    },
    textInput: {
      width: "90%",
      borderRadius: 5,
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderColor: "white",
      borderWidth: 1,
      marginBottom: 8,
      color:"#fff",
      fontSize:13,
    },
    verticleLine: {
      height: '100%',
      width: 1,
      backgroundColor: '#909090',

    },
    myButtonContainer: {
      marginTop:32,
      flexDirection: 'row',
      justifyContent: 'space-around'

    }
  }



)

export default Playlist;
