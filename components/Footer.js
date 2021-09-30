import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { exp } from 'react-native/Libraries/Animated/src/Easing';
import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const Footer = () => {
    return (
        <View style={styles.container}>

            <View style={{ flex:1,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'flex-end',
            backgroundColor:'black',
            paddingHorizontal:60,
           }}>

            <View style={styles.iconContainer}>
               <Image source={require('../assets/images/footer/Home.png')} style={{width:24,height:35}}/>
                
            </View>
            <View style={styles.iconContainer}>
            <Image source={require('../assets/images/footer/Search.png')} style={{width:27,height:31}}/>
                
            </View>

            <View style={styles.iconContainer}>
            <Image source={require('../assets/images/footer/Library.png')} style={{width:28,height:28}}/>
                
            </View>
            </View>
            
            
        </View>
    )
}
const styles = StyleSheet.create(
    {
        container: {
            flex:1,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'flex-end',
            backgroundColor:'black',
           
        },
        iconContainer:{
            flex:1,
            alignItems:'center',
            justifyContent:'center',
            height:62,
            backgroundColor:'black',
            
        }
    }
)

export default Footer;