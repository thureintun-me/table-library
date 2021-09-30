import React from "react";
import { Image, StyleSheet, Text, View,TouchableOpacity } from "react-native";
import Tracks from "../assets/images/library/Track.png";
import Albums from "../assets/images/library/Albums.png";
import Favourite from "../assets/images/library/Favourite.png";
import Playlist from "../assets/images/library/Playlist.png";

const MyLibraryScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <View>
          <Image source={Tracks} style={{width:22,height:19,marginLeft:11,marginBottom:15}}/>
        </View>
       
        <View>
          <Image source={Favourite} style={{width:19,height:16,marginLeft:12,marginBottom:15}}/>
        </View>
        <View>
          <Image source={Playlist} style={{width:20,height:21,marginLeft:11,marginBottom:15}} />
        </View>
        <View>
          <Image source={Albums} style={{width:22,height:17,marginLeft:13,marginBottom:15}}/>
        </View>
       
      </View>
      <View style={styles.textContainer}>
        <Text style={{marginBottom:15}}>Purchased Tracks</Text>
        <Text style={{marginBottom:15}}>Purchased Album</Text>
        <Text style={{marginBottom:15}}>Favourite</Text>
        <Text>Playlist</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity>
          <Image
            source={require("../assets/images/library/GreaterThan.png")}
            style={{ width: 9, height: 15,backgroundColor:"black",marginBottom:18 }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../assets/images/library/GreaterThan.png")}
            style={{ width: 9, height: 15,backgroundColor:"black" ,marginBottom:18}}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../assets/images/library/GreaterThan.png")}
            style={{ width: 9, height: 15,backgroundColor:"black",marginBottom:22} }
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../assets/images/library/GreaterThan.png")}
            style={{ width: 9, height: 15,backgroundColor:"black",marginBottom:19} }
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:20,
    flexDirection:"row",
    
    
  },
 
});

export default MyLibraryScreen;
