import React from 'react';
import { View, StyleSheet,ScrollView } from "react-native";
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';
import Song from '../components/Song';
import NayW from '../assets/images/nayw.png'
import Footer from '../components/Footer';



const Purchase = (props) => {

    const navgation = useNavigation();
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

   

    return (
        <View style={styles.container}>
            <Header title='Purchased Tracks' onPress={() => navgation.navigate('Library')}></Header>
            <ScrollView style={styles.albumContainer}>
                {
                    
                    songs.map((item,i)=>{
                        
                        return(
                            <Song key={i} title={item.title} singer={item.singer} source={item.source} />
                        )
                    })
                }
            </ScrollView>

            <Footer/>

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
            marginTop:37,
        }
    }

)

export default Purchase;