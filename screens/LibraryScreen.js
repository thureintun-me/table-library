import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MenuItem from '../components/MenuItem';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { setStatusBarBackgroundColor } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import Tracks from '../assets/images/library/Track.png'
import Albums from '../assets/images/library/Albums.png'
import Favourite from '../assets/images/library/Favourite.png'
import Playlist from '../assets/images/library/Playlist.png'

const LibraryScreen = () => {

    const navgation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Your Library</Text>
            </View>
            <View style={styles.menuItemContainer}>
                <MenuItem title="Purchased Tracks" onPress={() => navgation.navigate('Purchase')}
                    source={Tracks} />
                <MenuItem title="Purchased Albums" onPress={() => navgation.navigate('Albums')}
                source={Albums} />
                <MenuItem title="Favourite" onPress={() => navgation.navigate('Favourite')}
                    source={Favourite} />
                <MenuItem title="Playlists" onPress={() => navgation.navigate('Playlist')}
                    source={Playlist} />
                
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
        titleContainer: {
            width: 157,
            height: 27,
            marginTop: 53,
            marginLeft: 13,
        },
        title: {
            color: 'rgba(255,255,255,255)',
            fontSize: 25,
            fontFamily: 'gotham-medium',

        },
        menuItemContainer: {
            marginTop: 44,
        }
    }
)

export default LibraryScreen;