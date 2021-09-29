import React from "react";
import { StyleSheet, View,Text,Image } from "react-native";


React
const Item =(props)=>{
    return(
       <View style = {styles.container}>
           <View style={styles.imageContainer}>
              <Image source={require('../assets/images/LibraryScreen/Tracks.png')} style={{width:22,height:13,marginBottom:21}}/>
              <Image source={require('../assets/images/LibraryScreen/Album.png')} style={{width:19,height:16,marginBottom:15}}/>
              <Image source={require('../assets/images/LibraryScreen/Favourite.png')} style={{width:20,height:21,marginBottom:18}}/>
              <Image source={require('../assets/images/LibraryScreen/Plasylist.png')} style={{width:19,height:17,marginBottom:21}}/>
           </View>

           <View style={styles.textContainer}>

                <Text style={{marginBottom:21}}>Purchased Tracks</Text>
                <Text style={{marginBottom:20}}>Purchased Albums</Text>
                <Text style={{marginBottom:18,paddingTop:1}}>Favourite</Text>
                <Text style={{marginBottom:21}}>Playlist</Text>
               

           </View>
           <View>
               <Text>Grether Than</Text>
               <Text>Grether Than</Text>
               <Text>Grether Than</Text>
               <Text>Grether Than</Text>
           </View>
       </View>
    )
}

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            flexDirection:'row',
            justifyContent:'space-evenly'
            

        },
        imageContainer:{
            flexDirection:'column'
        },
        textContainer:{
            flexDirection:'column'
        }
    }
)

export default Item;
