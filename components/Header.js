import React from 'react';
import { View, StyleSheet, Text, Touchable, TouchableOpacity,Image } from "react-native"
import BackIcon from '../assets/images/library/Back.png'

const Header = (props)=>{

    return(
        <View style={styles.headerContainer}>
        <View style={styles.iconContainer}>
            <TouchableOpacity onPress={props.onPress}>
                <Image source={BackIcon} style={{width:9,height:15}}/>
            </TouchableOpacity>
        </View>
        <View style={styles.headerTextContainer}>
            <Text style={styles.headerText} numberOfLines={1}>{props.title}</Text>
        </View>
    </View>
    )
}

const styles = StyleSheet.create(
    {
        headerContainer:{
           
            flexDirection:'row',
            marginTop:54,
            alignItems:'center'

        },
        headerText:{
            
            color:'white',
            fontSize:13,
            fontFamily:'gotham-bold'

        },
        headerTextContainer:{
            
            width:140,
            height:14,
            marginLeft:35,
            
        },
        iconContainer:{
           
            marginLeft:12,  
        }
    }
)

export default Header;