import React from 'react'
import { 
    View,
    Text,
    StyleSheet,
 } from "react-native";

const Login = ({ navigation }) => {
    return (

        <View style = {styles.container}>

            <Text style = {styles.Texties}>Let's build property management app...</Text>

        </View>
    );
};


export default Login;

const styles = StyleSheet.create({

container:{
    flex:1 ,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center"
},
Texties:{
    color:"#fff",
    fontSize: 19,
    fontFamily:"Arial"
}



})
