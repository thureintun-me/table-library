import { View,StyleSheet, Image } from "react-native";
import React from "react";
import Header from "../components/Header";
import { useNavigation } from '@react-navigation/native';
import Footer from "../components/Footer";
import AlbumContainer from "../components/AlbumContainer";
import { ScrollView } from "react-native-gesture-handler";


const Albums=()=>{
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <Header title='Purchased Albums' onPress={()=>navigation.navigate('Library')}/>
           <ScrollView style={styles.albumsContainer}>
                <AlbumContainer title="Album" singer="Artist"/>
                <AlbumContainer title="Album" singer="Artist"/>
                <AlbumContainer title="Album" singer="Artist"/>
                <AlbumContainer title="Album" singer="Artist"/>
                <AlbumContainer title="Album" singer="Artist"/>
                <AlbumContainer title="Album" singer="Artist"/>
                
           </ScrollView>
           


            <Footer />
        </View>
    )
}
const styles= StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:'black'

            
        },
        albumsContainer:{
            
            marginTop:53,
            
            
           
           

        },
        
        
    } 
    
)


export default Albums
