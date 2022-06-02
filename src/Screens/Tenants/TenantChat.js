import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    StatusBar,
    ImageBackground,
    ScrollView,
    TextInput,
} from "react-native";
import { MaterialCommunityIcons, FontAwesome5, FontAwesome, Ionicons, Entypo, AntDesign } from "@expo/vector-icons";
import { TextInputMask } from 'react-native-masked-text';


const Chat = ({ navigation }) => {

    const format = (amount) => {
        return Number(amount)
            .toFixed(2)
            .replace(/\d(?=(\d{3})+\.)/g, '$&,')

    };

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
                        <Text style={{ fontWeight: "bold", fontSize: 20, color: "#f4a261" }}>Chat<Text style={{ fontWeight: "bold", fontSize: 20, color: "#000" }}>room</Text></Text>
                    </View>

                    <View style={{ width: "30%", alignItems: "center" }}>
                        {/* <FontAwesome name="exchange" size={24} color="#05375a" /> */}
                    </View>

                </View>
            </View>


            <ScrollView>
                <TouchableOpacity style={styles.container} 
                onPress={() => navigation.navigate("TenantChatroom")}
                 >
                    <View style={{ flexDirection: "row", width: "100%", marginTop: 5 }}>

                        <View style={{ width: "15%", alignItems: "center", marginTop: 10 }}>
                            <Image style={{ height: 40, width: 40, borderRadius: 20, borderColor: "#05375a", borderWidth: 1.5 }} source={require('../../Images/male.jpg')} />
                        </View>

                        <View style={{ width: "55%", marginLeft: -15 }}>
                            <Text style={styles.Title}>Aimable RUKUNDO</Text>
                            <Text style={styles.Texties}>Query</Text>
                        </View>

                        <View style={{ width: "35%" }}>
                            <Text style={styles.Title}>7:40 pm</Text>
                            <Text style={[styles.Title, { marginTop: -1 }]}>5 mar,2022</Text>
                        </View>

                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.container} 
                onPress={() => navigation.navigate("TenantChatroom")}
                >
                    <View style={{ flexDirection: "row", width: "100%", marginTop: 5 }}>

                        <View style={{ width: "15%", alignItems: "center", marginTop: 10 }}>
                            <Image style={{ height: 40, width: 40, borderRadius: 20, borderColor: "#05375a", borderWidth: 1.5 }} source={require('../../Images/male.jpg')} />
                        </View>

                        <View style={{ width: "55%", marginLeft: -15 }}>
                            <Text style={styles.Title}>Simon RUSEKEZA</Text>
                            <Text style={styles.Texties}>Booking</Text>
                        </View>

                        <View style={{ width: "35%" }}>
                            <Text style={styles.Title}>10:40 pm</Text>
                            <Text style={[styles.Title, { marginTop: -1 }]}>25 mar,2022</Text>
                        </View>

                    </View>
                </TouchableOpacity>

            </ScrollView>



            <View style={{ backgroundColor: "#e9ecef", height: 90, flexDirection: "row", alignItems: "center", borderTopRightRadius: 20, borderTopLeftRadius: 20 }}>



                <TouchableOpacity style={{ marginLeft: "0%", width: "25%", justifyContent: "center", alignItems: "center" }}
                    onPress={() => navigation.navigate("Tenant")}
                >

                    <Entypo name="home" size={30} color="#05375a" />


                    <Text style={{ color: "#707070", fontSize: 12, marginTop: 5 }}>Home</Text>
                </TouchableOpacity>


                <TouchableOpacity style={{ marginLeft: "0%", justifyContent: "center", alignItems: "center", width: "25%" }}
                    onPress={() => navigation.navigate("TenantChat")}
                >

                    <Ionicons name="chatbox-ellipses" size={30} color="#05375a" />


                    <Text style={{ color: "#707070", fontSize: 12, marginTop: 5 }}>Inbox</Text>
                </TouchableOpacity>


                <TouchableOpacity style={{ marginLeft: "0%", justifyContent: "center", alignItems: "center", width: "25%" }}
                    onPress={() => navigation.navigate("TenantProperties")}
                >

                    <FontAwesome5 name="laptop-house" size={30} color="#05375a" />


                    <Text style={{ color: "#707070", fontSize: 12, marginTop: 5 }}>Properties</Text>
                </TouchableOpacity>




                <TouchableOpacity style={{ marginLeft: "0%", justifyContent: "center", alignItems: "center", width: "25%" }}
                    onPress={() => navigation.navigate("TenantProfile")} >

                    <FontAwesome name="user-circle" size={30} color="#05375a" />


                    <Text style={{ color: "#707070", fontSize: 12, marginTop: 5 }}>Profile</Text>
                </TouchableOpacity>


            </View>
        </>
    );
};


export default Chat;

const styles = StyleSheet.create({

    container: {
        backgroundColor: "#e0e0e0",
        height: 70,
        width: "92%",
        marginHorizontal: 15,
        marginTop: 25,
        borderRadius: 20,

    },
    Title: {
         
        fontSize: 16,
        fontWeight: "bold",
        marginHorizontal: 15,
        marginTop: 10,
        color: "#05375a"
    },
    Texties: {
         
        fontSize: 12,
        fontWeight: "normal",
        marginHorizontal: 15,
        color: "#f4a261",
        marginTop: 1,

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
    },
    textInput: {

        borderRadius: 10,
        alignSelf: 'center',
        height: 55,
        width: "90%",
        marginTop: 10,
        textAlign: "left",
        padding: 10,
        flex: 1,
        borderBottomWidth: 1
    }

})
