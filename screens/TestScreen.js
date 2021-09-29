import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import {
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import Song from "../components/Song";
import NayW from "../assets/images/nayw.png";
import { color } from "react-native-reanimated";

const songs = [
  {
    title: "Swe Myo Par Mae",
    singer: "Nay Win",
    source: NayW,
    check: true,
  },
  {
    title: "Swe Myo Par Mae",
    singer: "Nay Win",
    source: NayW,
    check: true,
  },
  {
    title: "Swe Myo Par Mae",
    singer: "Nay Win",
    source: NayW,
    check: true,
  },
  {
    title: "Swe Myo Par Mae",
    singer: "Nay Win",
    source: NayW,
    check: true,
  },
  {
    title: "Swe Myo Par Mae",
    singer: "Nay Win",
    source: NayW,
    check: true,
  },
  {
    title: "Swe Myo Par Mae",
    singer: "Nay Win",
    source: NayW,
    check: true,
  },
  {
    title: "Swe Myo Par Mae",
    singer: "Nay Win",
    source: NayW,
    check: true,
  },
  {
    title: "Swe Myo Par Mae",
    singer: "Nay Win",
    source: NayW,
    check: true,
  },
  {
    title: "Swe Myo Par Mae",
    singer: "Nay Win",
    source: NayW,
    check: true,
  },
  {
    title: "Swe Myo Par Mae",
    singer: "Nay Win",
    source: NayW,
    check: true,
  },
  {
    title: "Swe Myo Par Mae",
    singer: "Nay Win",
    source: NayW,
    check: true,
  },
  {
    title: "Swe Myo Par Mae",
    singer: "Nay Win",
    source: NayW,
    check: true,
  },
];
const TestScreen = () => {
  const [on, SetOn] = useState(true);
  const [song, setSong] = useState(songs);

  const checkAll = () => {
    let newValue = song.filter((item) => item.check).length === song.length;
    let temp = song.map((item) => {
      return { ...item, check: !newValue };
    });
    setSong(temp);
  };
  const checkOne = (newValue, index) => {
    let temp = song.map((item, i) => {
      return index === i ? { ...item, check: newValue } : item;
    });
    setSong(temp);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={checkAll}>
        <Text style={{ color: "red" }}>SelectAll</Text>
      </TouchableOpacity>
      <ScrollView style={styles.albumContainer}>

        <FlatList data={song} renderItem={({item,index})=>{
          return(
            <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 15,
            }}
          >
            {item.check ? (
              <TouchableOpacity
                style={{ alignSelf: "center" }}
                onPress={() => checkOne(!item.check,index)}
              >
                <View style={styles.whitecircle} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={{ alignSelf: "center" }}
                onPress={() => checkOne(!item.check,index)}
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
          )
        }}>

        </FlatList>
        
      </ScrollView>
      {song.filter((item) => item.check === false).length > 0 ? (
        <View
          style={{
            width: 353,
            height: 24,
            borderWidth: 1,
            borderColor: "white",
            marginBottom: 53,
          }}
        >
          <Text style={{ color: "white", textAlign: "center" }}>
            Add Song {song.filter((item) => item.check === false).length}
          </Text>
        </View>
      ) : (
        <View></View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  whitecircle: {
    width: 20,
    height: 20,
    backgroundColor: "grey",
    borderRadius: 20 / 2,
  },
  redCircle: {
    width: 20,
    height: 20,
    backgroundColor: "red",
    borderRadius: 20 / 2,
  },
});

export default TestScreen;
