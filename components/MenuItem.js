import React from 'react';
import { View, StyleSheet, Text, Touchable, TouchableOpacity, Image } from "react-native"


const MenuItem = (props) => {
    return (
        <View style={styles.container}>



            <View style={styles.textContainer}>
                <TouchableOpacity onPress={props.onPress}>
                    <Image source={props.source} style={{ width: 22, height: 22 }} />
                </TouchableOpacity>
                <View style={{width:140}}>
                    <Text style={styles.text} numberOfLines={1}>{props.title}</Text>
                </View>

            </View>

            <View style={styles.iconContainer}>
                <TouchableOpacity onPress={props.onPress}>
                    <Image source={require('../assets/images/library/GreaterThan.png')} style={{width:9,height:15}} />
                
                </TouchableOpacity>
            </View>

        </View>
    )

}

const styles = StyleSheet.create(
    {
        container: {
            
            marginTop: 21,
            flex: 1,
            height: 17.5,
            marginLeft: 13,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginRight: 15.03,
        },
        textContainer: {
            flexDirection: 'row',
            width: 105,
            height: 13,
        },
        text: {
            marginLeft: 16,
            color: 'rgba(255,255,255,255)',
            fontSize: 12,
            fontFamily: 'gotham-medium',
        },
        iconContainer: {
            width: 10,
            height: 17,

        }
    }
)

export default MenuItem;