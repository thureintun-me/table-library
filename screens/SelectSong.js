import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import NayW from "../assets/images/nayw.png";
import Song from "../components/Song";

const songs = [
  {
    title: "Swe Myo Par Mae",
    singer: "Nay Win",
    source: NayW,
    check: true,
  },
  {
    title: "Pauk Pauk Phout",
    singer: "Nay Win",
    source: NayW,
    check: true,
  },
  {
    title: "A Char Pin",
    singer: "Nay Win",
    source: NayW,
    check: true,
  },
  {
    title: "Nay Kaung Nayt Myat",
    singer: "Nay Win",
    source: NayW,
    check: true,
  },
  {
    title: "A Yan Mite Tal Thamee Yay",
    singer: "Nay Win",
    source: NayW,
    check: true,
  },
  

];

const MySelectSong = () => {
  const [on, SetOn] = useState(true);
  const [song, setSong] = useState(songs);
  const navgation = useNavigation();

  const checkAll = () => {
    let newValue = song.filter((item) => item.check).length === song.length;
    let temp = song.map((item) => {
      return { ...item, check: !newValue };
    });
    setSong(temp);
    SetOn(!on);
  };
  const checkOne = (newValue, index) => {
    let temp = song.map((item, i) => {
      return index === i ? { ...item, check: newValue } : item;
    });
    setSong(temp);
  };

  return (
    <View style={styles.container}>
     

     
      <View style={styles.headerContainer}>
        {on ? (
          <TouchableOpacity onPress={checkAll}>
            <Text style={styles.headerText}>Select All</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={checkAll}>
            <Text style={styles.headerText}>Deselect All</Text>
          </TouchableOpacity>
        )}

        <Text style={(styles.headerText, { color: "white" })}>Songs</Text>
        <TouchableOpacity>
          <Text style={styles.headerText} onPress={()=>navgation.navigate('Playlist')}>Cancel</Text>
        </TouchableOpacity>
     
      </View>
      <ScrollView style={styles.albumContainer}>
        {song.map((item, i) => {
          return (
            <View
              style={{
                
                flex:1,
                flexDirection: "row",
                alignItems: "center",
                marginHorizontal: 11,
              }}
              key={i}
            >
              {item.check ? (
                <TouchableOpacity
                  style={{ alignSelf: "center" }}
                  onPress={() => checkOne(!item.check, i)}
                >
                  <View style={styles.whitecircle} />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={{ alignSelf: "center" }}
                  onPress={() => checkOne(!item.check, i)}
                >
                  <View style={styles.redCircle} />
                </TouchableOpacity>
              )}

              <Song
                
                title={item.title}
                singer={item.singer}
                source={item.source}
              />
            </View>
          );
        })}
      </ScrollView>

      {song.filter((item) => item.check === false).length > 0 ? (
        <View
          style={{
           
            width:390,
            maxHeight: 24,
            borderWidth: 0.8,
            marginTop: 45,
            borderColor: "#707070",
            marginBottom: 53,
            alignSelf:"center"
            
          }}
        >
          <TouchableOpacity
            onPress={() =>
              navgation.navigate("MyScreen", {
                selectSong: song.filter((item) => item.check === false),
              })
            }
          >
            <Text style={{ color: "white", textAlign: "center" ,paddingVertical:1}}>
              Add {"("} {song.filter((item) => item.check === false).length}{" "}
              {")"}
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View
          style={{
            width: 353,
            height: 24,
            borderWidth: 1,
            marginBottom: 53,
          }}
        ></View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 54,
    backgroundColor: "black",
    flex: 1,
  },
  headerContainer: {
    flex:1,
    maxHeight:20,
    marginHorizontal:11,
    flexDirection: "row",
    justifyContent: "space-between",
    
  },
  headerText: {
    fontSize: 13,
    color: "red",
    fontFamily:'gotham-book'
  },
  songContainer: {
    flex: 1,
    marginTop: 53,
    flexDirection: "row",
    backgroundColor: "black",
  },
  albumContainer: {
    marginTop:20,
  },
  whitecircle: {
    width: 14,
    height: 14,
    backgroundColor: "white",
    borderRadius: 14 / 2,
  },
  redCircle: {
    width: 14,
    height: 14,
    backgroundColor: "red",
    borderRadius: 14 / 2,
  },
});

export default MySelectSong;
