import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    StatusBar,
    ImageBackground,
    ScrollView
} from "react-native";
import { MaterialCommunityIcons, FontAwesome5, FontAwesome, Ionicons, Entypo,AntDesign } from "@expo/vector-icons";

const MyProperties = ({ navigation }) => {
    return (
        <>
            <StatusBar backgroundColor="#00bcd4" translucent={false} hidden={false} barStyle="dark-content" />
            <View style={{
                height: 90,
                paddingTop: 20,
                backgroundColor: '#e9ecef',
                justifyContent: "center",
                ...styles.shadow
            }}>
                <View style={{ flexDirection: "row" }}>
                    <View style={{ width: "70%", alignItems: "flex-start", marginLeft: 20 }}>
                        <Text style={{ fontWeight: "bold", fontSize: 20 }}>My Properties</Text>
                    </View>

                    <TouchableOpacity style={{ width: "30%", alignItems: "center" }}
                    onPress={() => navigation.navigate("AllTransactions")}
                    >
                        <FontAwesome name="exchange" size={24} color="#05375a" />
                    </TouchableOpacity>

                </View>
            </View>

            <View style={{
                height: 35,
                justifyContent: "center",
                marginTop: 5
            }}>
                <TouchableOpacity style={{ flexDirection: "row", marginRight: 20 }}>

                    <View style={{ width: "90%", alignItems: "flex-end" }}>
                        <Text style={{ marginTop: 10 }}>Add New</Text>
                    </View>
                    <View style={{ width: "10%", alignItems: "flex-end" }}>
                        <Ionicons name="add-circle" size={30} color="#05375a" />
                    </View>

                </TouchableOpacity>
            </View>

            <View style={{
                height: 40,
                justifyContent: "center",
                // marginTop:10
            }}>
                <View style={[styles.Tab]}>

                    <TouchableOpacity style={{ zIndex: 2, width: "35%", alignItems: "center", justifyContent: "center", backgroundColor: "#05375a", height: 40, borderRadius: 10, marginRight: -15 }}>
                        <Text style={{ fontWeight: "bold", fontSize: 20, color: "white" }}>All</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ zIndex: 1, width: "30%", alignItems: "center", justifyContent: "center", backgroundColor: "#ffe5d9", height: 40, borderTopRightRadius: 10, borderBottomRightRadius: 10, marginLeft: 10 }}>
                        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Booked</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ width: "35%", alignItems: "center", justifyContent: "center", backgroundColor: "#ADB5BD", height: 40, borderTopRightRadius: 10, borderBottomRightRadius: 10, marginLeft: -6 }}>
                        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Occupied</Text>
                    </TouchableOpacity>

                </View>
            </View>


            <ScrollView>

                <Text style={styles.Title}>Zoom House</Text>
                <Text style={styles.Texties}>Kacyiru-Kigali</Text>
                <View style={styles.container} >

                    <ImageBackground style={{ height: "85%", width: "100%", flexDirection: "row" }} imageStyle={{ borderRadius: 10 }} source={require('../Images/hotel.jpg')} >
                        <TouchableOpacity style={{ width: "95%", alignItems: "flex-end",marginTop:5 }}>
                            <AntDesign name="edit" size={30} color="#fff" />
                        </TouchableOpacity>
                    </ImageBackground>
                <Text style={styles.hoteltitle}>3 Rooms Apartment</Text>
                <Text style={[styles.hoteldesc,{color:"white",fontWeight:"900",fontSize:14}]}>$800</Text>
                <Text style={styles.hoteldesc}>Full Furnished</Text>

                </View>
            </ScrollView>



            <View style={{ backgroundColor: "#e9ecef", height: 90, flexDirection: "row", alignItems: "center", borderTopRightRadius: 20, borderTopLeftRadius: 20 }}>



                <TouchableOpacity style={{ marginLeft: "0%", width: "25%", justifyContent: "center", alignItems: "center" }}
                    onPress={() => navigation.navigate("Manager")}
                >

                    <Entypo name="home" size={30} color="#05375a" />


                    <Text style={{ color: "#707070", fontSize: 12, marginTop: 5 }}>Home</Text>
                </TouchableOpacity>


                <TouchableOpacity style={{ marginLeft: "0%", justifyContent: "center", alignItems: "center", width: "25%" }}
                >

                    <Ionicons name="chatbox-ellipses" size={30} color="#05375a" />


                    <Text style={{ color: "#707070", fontSize: 12, marginTop: 5 }}>Inbox</Text>
                </TouchableOpacity>


                <TouchableOpacity style={{ marginLeft: "0%", justifyContent: "center", alignItems: "center", width: "25%" }}

                >

                    <FontAwesome5 name="laptop-house" size={30} color="#05375a" />


                    <Text style={{ color: "#707070", fontSize: 12, marginTop: 5 }}>Properties</Text>
                </TouchableOpacity>




                <TouchableOpacity style={{ marginLeft: "0%", justifyContent: "center", alignItems: "center", width: "25%" }} >

                    <FontAwesome name="user-circle" size={30} color="#05375a" />


                    <Text style={{ color: "#707070", fontSize: 12, marginTop: 5 }}>Profile</Text>
                </TouchableOpacity>


            </View>
        </>
    );
};


export default MyProperties;

const styles = StyleSheet.create({

    container: {
        backgroundColor: "#a98467",
        height: "250%",
        width: "92%",
        marginHorizontal: 15,
        marginTop: 10,
        borderRadius: 10
    },
    Title: {
        fontFamily: "Arial",
        fontSize: 16,
        fontWeight: "bold",
        marginHorizontal: 15,
        marginTop: 10
    },
    Texties: {
        fontFamily: "Arial",
        fontSize: 12,
        fontWeight: "normal",
        marginHorizontal: 15,
        color:"grey"

    },
    hoteltitle: {
        fontFamily: "Arial",
        fontSize: 16,
        fontWeight: "bold",
        marginHorizontal: 10,
        color:"white",
        marginTop:-20
    },
    hoteldesc: {
        fontFamily: "Arial",
        fontSize: 12,
        fontWeight: "normal",
        marginHorizontal: 10,
        color:"#ced4da"

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
    Tab: {
        flexDirection: "row",
        marginHorizontal: 10,
        marginLeft: 12,
        height: 50,
        flex: 1,
        alignContent: "center",
        alignItems: "center",
        shadowColor: "#707070",
        // shadowOffset: {
        //     width: 0,
        //     height: 5,
        // },
        // shadowOpacity: 0.5,
        // shadowRadius: 4.65,

        // elevation: 8,
    }

})
