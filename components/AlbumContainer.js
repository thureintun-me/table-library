import React from "react";
import { View, Text, StyleSheet,Image, TouchableOpacity } from 'react-native'
import { useNavigation } from "@react-navigation/core";

const AlbumContainer = (props) => {
    const navigation = useNavigation();
    return (

        
        
        <View style={styles.albumsContainer}>
            <View style={styles.imageContainer}>
                <TouchableOpacity onPress={()=>navigation.navigate('FullAlbums')}>
                <Image source={require('../assets/images/Nay.jpg')} style={{ width: 115, height: 115 }}></Image>
                </TouchableOpacity>
                <Text style={styles.album}>{props.title}</Text>
                <Text style={styles.singer}>{props.singer}</Text>

            </View>
            <View style={styles.imageContainer}>
                <TouchableOpacity onPress={()=>navigation.navigate('FullAlbums')}>
                <Image source={require('../assets/images/Nay.jpg')} style={{ width: 115, height: 115 }}></Image>
                </TouchableOpacity>
                <Text style={styles.album}>{props.title}</Text>
                <Text style={styles.singer}>{props.singer}</Text>

            </View>
            <View style={styles.imageContainer}>
                <TouchableOpacity onPress={()=>navigation.navigate('FullAlbums')}>
                <Image source={require('../assets/images/Nay.jpg')} style={{ width: 115, height: 115 }}></Image>
                </TouchableOpacity>
                <Text style={styles.album}>{props.title}</Text>
                <Text style={styles.singer}>{props.singer}</Text>

            </View>
            
        </View>
       
    )
}

const styles = StyleSheet.create(

    {
       
        albumsContainer:{
           
            marginTop:22,
            flexDirection:'row',
            marginLeft:11,
           
           

        },
        imageContainer:{
            marginLeft:5,
        },
        album:{
            fontFamily:'gotham-medium',
            fontSize:12,
            color:'white'
        },
        singer:{
            fontFamily:'gotham-medium',
            fontSize:8,
            color:'rgba(255,255,255,0.8)'
        },

    }

)

export default AlbumContainer;