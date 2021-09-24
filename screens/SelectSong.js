import React from "react";
import {View,Text} from 'react-native'

const SelectSong = ()=>{
    return(
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text>Select All</Text>
                <Text>Songs</Text>
                <Text>Cancel</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container:{
        flex:1
    },
    headerContainer:{
        flexDirection:'row',
        
    }
})