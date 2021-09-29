import { View, StyleSheet, ScrollView,Text,Image } from "react-native";
import React from "react";
import Header from "../components/Header";
import { useNavigation } from '@react-navigation/native';
import Footer from "../components/Footer";
import NayW from '../assets/images/nayw.png'
import Song from "../components/Song";



const MyPlaylist1 = () => {

    const songs =[
        {
            
            title:'Swe Myo Par Mae',
            singer:'Nay Win',
            source:NayW

        },
        {

            title:'Pauk Pauk Phout',
            singer:'Nay Win',
            source:NayW
        },
        {
            title:'A Char Pin',
            singer:'Nay Win',
            source:NayW
        },
        
       
     

        
    ]

   
    
    const navgation = useNavigation();
    return (
        <View style={styles.container}>
            <Header title='My Playlist 1' onPress={() => navgation.navigate('Library')} />
            <ScrollView style={styles.albumContainer}>
                
            
                    {
                    
                        songs.map((item,i)=>{
                        
                            return(
                                <Song key={i} title={item.title} singer={item.singer} source={item.source} />
                            )
                        })
                    }
               
                
            </ScrollView>
            <Footer />
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: 'black'

        },
        albumContainer: {
            marginTop: 37,
        }
    }

)



export default MyPlaylist1;
