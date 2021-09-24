import React from "react";
import {View,Text, Image, StyleSheet, ScrollView} from 'react-native'
import AlbumSong from "../components/AlbumSong";
import FullAlbumHeader from "../components/FullAlbumHeader";
import Header from "../components/Header";
import Song from "../components/Song";
import NayW from '../assets/images/nayw.png'
import Footer from "../components/Footer";


const FullAlbum = ()=>{
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
        {
            title:'Nay Kaung Nayt Myat',
            singer:'Nay Win',
            source:NayW
        },
        {
            title:'A Yan Mite Tal Thamee Yay',
            singer:'Nay Win',
            source:NayW
        },
        {
            title:'A Har Ya',
            singer:'Nay Win',
            source:NayW
        },
        {
            title:'Wa Ma Shi Pal Wi Lote Mal',
            singer:'Nay Win (Feat. Kyar Pauk)',
            source:NayW
        },
        {
            title:'Lit',
            singer:'Nay Win',
            source:NayW
        },
        {
            title:'Than Eain Mat',
            singer:'Nay Win',
            source:NayW
        },
        {
            title:'Radio',
            singer:'Nay Win',
            source:NayW
        },
        {
            title:'Yan Than',
            singer:'Nay Win',
            source:NayW
        },
        {
            title:'Than Eain Mat',
            singer:'Nay Win',
            source:NayW
        },
        {
            title:'Radio',
            singer:'Nay Win',
            source:NayW
        },
        {
            title:'Yan Than',
            singer:'Nay Win',
            source:NayW
        },
        ,
        {
            title:'Yan Than',
            singer:'Nay Win',
            source:NayW
        },
        {
            title:'Than Eain Mat',
            singer:'Nay Win',
            source:NayW
        },
        {
            title:'Radio',
            singer:'Nay Win',
            source:NayW
        },
        {
            title:'Yan Than',
            singer:'Nay Win',
            source:NayW
        },
        ,
        {
            title:'Yan Than',
            singer:'Nay Win',
            source:NayW
        },
        {
            title:'Than Eain Mat',
            singer:'Nay Win',
            source:NayW
        },
        {
            title:'Radio',
            singer:'Nay Win',
            source:NayW
        },
        {
            title:'Yan Than',
            singer:'Nay Win',
            source:NayW
        },
    ]
    return(
        <View style={styles.container}>
            <FullAlbumHeader />
            
                  <ScrollView style={styles.songContainer}>
                      {
                          songs.map((item,i)=>{
                              return(
                                <AlbumSong key={i} title={item.title} singer={item.singer} />
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
        container:{
            flex:1,
            backgroundColor: 'black'

        },
        songContainer:{
            marginTop:15,
        },
       
    }
)
export default FullAlbum;