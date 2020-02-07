import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';




export default class Header_Sexy extends React.Component {

  render() {
return(
    <View style={styles.header}>
      <Text style={styles.text1}>Procrastinator</Text>
    </View>
)

  }
}

const styles = StyleSheet.create({
  header: {

    height: 60,
width:"100%",
alignItems: 'center',
    justifyContent: 'center',
      paddingBottom: 30,
     paddingTop: 30,
      backgroundColor: 'grey',
      marginBottom:30

  },
  text1:{
    fontSize: 30,
color: "white",
      fontFamily: "raleway-medium"


  },
});
