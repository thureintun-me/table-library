import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  Image,
  Pressable,
} from "react-native";

const MenuItem = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <View>
          <TouchableOpacity onPress={props.onPress}>
            <Image source={props.source} style={{ ...props.style }} />
          </TouchableOpacity>
        </View>

       
          <TouchableOpacity onPress={props.onPress}>
          <View style={{  marginBottom: 50 }}>
            <Text style={styles.text} numberOfLines={1}>
              {props.title}
            </Text>
            </View>
          </TouchableOpacity>
       
      </View>

      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={props.onPress}>
          <Image
            source={require("../assets/images/library/GreaterThan.png")}
            style={{ width: 9, height: 15 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 19.5,
    width: 353,
    marginLeft: 11,
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 15.03,
    marginBottom: 15,
  },
  textContainer: {
    flexDirection: "row",
  },
  text: {
    marginLeft: 16,
    color: "#FFFFFF",
    fontSize: 12,
    fontFamily: "gotham-light",
    paddingVertical: 2,
  },
  iconContainer: {
    width: 10,
    height: 17,
  },
});

export default MenuItem;
