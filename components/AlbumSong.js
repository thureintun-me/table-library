import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native';

const AlbumSong = (props)=>{
    return(
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.singer}>{props.singer}</Text>
                <View style={styles.myMargin}></View>
            </View>
        </View>
    )

}

const styles = StyleSheet.create(
    {
        container:{
          marginLeft:11,  
        },
        textContainer:{
            flexDirection:'column',
            width:331,
            height:41,
            marginBottom:15,
            
            
            
           
         },
         myMargin:{
             marginTop:13,
             width:331, 
             height:0.1, 
             backgroundColor:'rgba(255,255,255,0.1)'
         },
         
         title:{
             fontSize:15,
             color:'white',
             fontFamily:'gotham-book',
             marginBottom:3,
 
         },
         singer:{
             fontSize:10,
             color:'rgba(255,255,255,0.4)',
             fontFamily:'gotham-book'
         }
    }
)

export default AlbumSong;
