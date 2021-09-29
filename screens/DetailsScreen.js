import { View ,Text, Button} from "react-native"
import React, { useState } from "react";


const DetailsScreen = ({route})=>{

    const {selectSong} = route.params;
    const [song,setSong] = useState([])
    console.log(selectSong)
    const data = ()=>{
        mysongs.map((item)=>setSong(obj))

        
    }
    return(
        <View>
            <Text>This  is Details Screen</Text>
            <Button title='bind' onPress={data}/>

            {
                song.map((item,i)=>{
                    return(
                        <View key={i}>
                            <Text>{item.title}</Text>
                            <Text>{item.lang}</Text>
                        </View>
                    )
                })
            }
        </View>
    )
}

export default DetailsScreen;