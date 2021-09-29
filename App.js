
import React,{useState}  from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RouteScreen from './screens/RouteScreen';
import AppLoading from "expo-app-loading";
import * as Font from 'expo-font';
import Song from './components/Song';
import SelectSong from './screens/SelectSong';
import LibraryScreen from './screens/LibraryScreen';
import MySelectSong from './screens/SelectSong';
import TestScreen from './screens/TestScreen';
import MyScrenn from './screens/MyScrenn';
import Item from './screens/Item';


const fetchFonts = () => {
  return Font.loadAsync({
    "gotham-bold": require("./assets/fonts/Gotham-Bold.otf"),
    "gotham-book": require("./assets/fonts/GothamBook.ttf"),
    "gotham-medium" : require('./assets/fonts/GothamMedium.ttf')
  });
};


export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={console.warn}
      />
    );
  }
  return (
    <View style={styles.container}>
      <RouteScreen />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    
  },
});
