import React from "react";
import { View, Text, StyleSheet } from 'react-native'
import { color } from "react-native-reanimated";
import Song from "../components/Song";


const SelectSong = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Select All</Text>
                <Text style={styles.headerText, { color: 'white' }}>Songs</Text>
                <Text style={styles.headerText}>Cancel</Text>
            </View>
            <View style={styles.songContainer}>
                <Text style={{color:'white'}}>Hello</Text><Song title="Swe Myo Pr Mae" singer="Nay Win" source={require('../assets/images/Nay.jpg')} />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        paddingTop: 54,
        backgroundColor: '#000',
        flex: 1
    },
    headerContainer: {
        marginLeft: 11,
        width: 350,
        height: 14,
        flexDirection: 'row',
        justifyContent: "space-between"

    },
    headerText: {
        fontSize: 13,
        color: "red"

    },
    songContainer:{
        flexDirection:'row'
    }
})

export default SelectSong;