
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


const SongWithoutMargin = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.album}>
                <Image source={props.source} style={styles.imageContainer} />

                <View style={styles.textContainer}>
                    <Text style={styles.title}>{props.title}</Text>
                    <Text style={styles.singer}>{props.singer}</Text>
                   
                </View>

            </View>


        </View>
    )
}


    const styles = StyleSheet.create(
        {
            container: {
    
                marginTop: 11,
    
            },
            
            album: {
                flexDirection: 'row',
                width: 378.58,
                height: 52,
                marginLeft: 11,
            },
            textContainer: {
                flexDirection: 'column',
                width: 310,
                height: 41,
                marginVertical: 10,
                marginLeft:6
    
    
            },
            imageContainer: {
                width: 46,
                height: 46,
                borderRadius: 4,
    
            },
            title: {
                fontSize: 15,
                color: 'white',
                fontFamily: 'gotham-book',
                marginBottom: 3,
    
            },
            singer: {
                fontSize: 10,
                color: 'rgba(255,255,255,0.4)',
                fontFamily: 'gotham-book'
            }
        }
    )



export default SongWithoutMargin;