import React from "react";
import {View,Text, Image, StyleSheet} from 'react-native'
import Header from "../components/Header";
import { useNavigation } from "@react-navigation/core";

const FullAlbumHeader = (props)=>{
    const navgation = useNavigation();
    return(
        <View>
        <Header onPress={()=>navgation.navigate('Albums')} />
        <View style={styles.container}>
            <Image source={require('../assets/images/Nay.jpg')} style={{width:97,height:97}}/>
            <View style={styles.textContainer}>
                <Text style={styles.album}>Swe Myo Pr Mae</Text>
                <Text style={styles.singer}>Nay Win</Text>
            </View>
        </View>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        
        container:{
            
            flexDirection:"row",
            marginTop:26,
            marginLeft:11,

        },
        textContainer:{
            justifyContent:'center',
            marginLeft:4,
        },
        album:{
            fontSize:26,
            fontFamily:'gotham-medium',
            color:'white'
        },
        singer:{
            marginTop:13,
            fontSize:13,
            fontFamily:'gotham-book',
            color:'white'
        }

    }
)

export default FullAlbumHeader;