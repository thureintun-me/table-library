
import React,{useState}  from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RouteScreen from './screens/RouteScreen';
import AppLoading from "expo-app-loading";
import * as Font from 'expo-font';
import Song from './components/Song';

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
    backgroundColor: 'black',
    
  },
});
