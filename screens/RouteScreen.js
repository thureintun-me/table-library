import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Purchase from './Purchase'
import Favourite from './Favourite'
import Playlist from './Playlist'
import Albums from './Albums'
import LibraryScreen from "./LibraryScreen";
import FullAlbum from "./FullAlbum";
import SelectSong from './SelectSong'
import MyPlaylist1 from "./MyPlaylist1";
const RouteScreen =()=>{
    const Stack = createNativeStackNavigator();

    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Library' component={LibraryScreen} options={{ headerShown: false }} />
                <Stack.Screen name='Purchase'  component={Purchase} options={{ headerShown: false }} />
                <Stack.Screen name='Favourite' component={Favourite} options={{ headerShown: false }} />
                <Stack.Screen name='Playlist' component={Playlist} options={{ headerShown: false }} />
                <Stack.Screen name='Albums' component={Albums} options={{ headerShown: false }} />
                <Stack.Screen name='FullAlbums' component={FullAlbum} options={{ headerShown: false }} />
                <Stack.Screen name='SelectSong' component={SelectSong} options={{ headerShown: false }} />
                <Stack.Screen name='MyPlaylist1' component={MyPlaylist1} options={{ headerShown: false }} />
              
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RouteScreen;