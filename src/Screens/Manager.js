import React from 'react'
import { 
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    StatusBar,
    ScrollView
 } from "react-native";
 import { MaterialCommunityIcons,  FontAwesome5 ,FontAwesome, Ionicons, Entypo } from "@expo/vector-icons";

const Manager = ({ navigation }) => {
    return (
        <>
        <StatusBar backgroundColor="#00bcd4" translucent={false} hidden={false} barStyle="dark-content"/>
            <View style={{
                    height:90,
                    paddingTop:20,
                    backgroundColor:'#e9ecef',
                    justifyContent:"center",
                    ...styles.shadow
            }}>
                <View style={{flexDirection:"row"}}>
                    <View style={[styles.shadow,{width:"25%",alignItems:"center"}]}>
                    <Image style={{height:30,width:30}} source={require('../Images/logo.png')} />
                    </View>

                    <View style={{width:"50%",alignItems:"flex-start"}}>
                        <Text style={{fontWeight:"bold",fontSize:20}}>Z ProperTech LTD</Text>
                    </View>

                    <View style={{width:"25%",alignItems:"center"}}>
                    <MaterialCommunityIcons name="bell" size={24} color="#05375a" />
                    </View>

                </View>
            </View>


        <ScrollView>

        <View style = {styles.container}>
            

            <Text>Let's build property management app...</Text>

        </View>
        </ScrollView>



        <View style={{ backgroundColor: "#e9ecef", height: 90, flexDirection: "row",alignItems:"center",borderTopRightRadius:20,borderTopLeftRadius:20}}>



            <TouchableOpacity style={{ marginLeft: "0%",  width: "25%" ,justifyContent:"center",alignItems:"center"}}
            >

                <Entypo name="home" size={30} color="#05375a" />


                <Text style={{ color: "#707070", fontSize: 12, marginTop: 5 }}>Home</Text>
            </TouchableOpacity>


            <TouchableOpacity style={{ marginLeft: "0%",justifyContent:"center",alignItems:"center", width: "25%" }}
            >

            <Ionicons name="chatbox-ellipses" size={30} color="#05375a" />


                <Text style={{ color: "#707070", fontSize: 12, marginTop: 5 }}>Inbox</Text>
            </TouchableOpacity>


            <TouchableOpacity style={{ marginLeft: "0%",justifyContent:"center",alignItems:"center", width: "25%" }}
                onPress={() => navigation.navigate("MyProperties")}
            >

            <FontAwesome5 name="laptop-house" size={30} color="#05375a" />


                <Text style={{ color: "#707070", fontSize: 12, marginTop: 5 }}>Properties</Text>
            </TouchableOpacity>




            <TouchableOpacity style={{ marginLeft: "0%",justifyContent:"center",alignItems:"center", width: "25%" }} >

            <FontAwesome name="user-circle" size={30} color="#05375a" />


                <Text style={{ color: "#707070", fontSize: 12, marginTop: 5 }}>Profile</Text>
            </TouchableOpacity>


        </View>
</>
    );
};


export default Manager;

const styles = StyleSheet.create({

container:{
    flex:1 ,
    alignItems: "center",
    justifyContent: "center"
},
shadow: {
    shadowColor: "#707070",
    shadowOffset: {
        width: 0,
        height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
},

})
