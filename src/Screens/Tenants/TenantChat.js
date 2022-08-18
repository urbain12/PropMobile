import React,{useState} from 'react'
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
import Modal from 'react-native-modal';


const Chat = ({ navigation }) => {

    const [isVisible, setisVisible] = useState(false)
    

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

                    <TouchableOpacity onPress={() => { setisVisible(true)}} style={{ width: "30%", alignItems: "center" }}>
                        <Entypo name="new-message" size={24} color="#05375a" />
                    </TouchableOpacity>

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


                {/* Modal */}

                <Modal
                isVisible={isVisible}
                transparent={true}
                animationType={'slide'}
                hasBackdrop={true}
                backdropColor={"#000"}
                backdropOpacity={0.80}
            >


                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <>
                        <View style={{ width: '90%', backgroundColor: '#e9ecef', borderRadius: 20 }}>
                            <View style={{ backgroundColor: "#1d2534", width: '100%', borderTopRightRadius: 20, borderTopLeftRadius: 20, marginLeft: 0, height: 60, justifyContent: "center", alignItems: "center" }}>
                                <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}>Send query</Text>
                            </View>
                            <View style={{ marginTop: 10, paddingHorizontal: 20, justifyContent: "center", alignItems: "center" }}>
                                <TextInput
                                    numberOfLines={5}
                                    // value={comment}
                                    multiline={true}
                                    placeholder="Type Here"
                                    placeholderTextColor="#7d7d7d"

                                    style={{ borderRadius: 10, width: '100%', height: 100, margin: 20, padding: 20, color: "white", backgroundColor: "#1d2534" }} 
                                    // onChangeText={(val) => { setComment(val) }}
                                     />
                            </View>

                            <View style={{ flexDirection: "row", borderTopColor: 'grey', borderTopWidth: 0.6, marginTop: 20, backgroundColor: "#1d2534", borderBottomRightRadius: 20, borderBottomLeftRadius: 20, }}>
                                {/* Cancel */}
                                <View style={{ width: "50%" }}>
                                    <TouchableOpacity onPress={() => { setisVisible(!isVisible) }}>
                                        <View style={{ height: 50, width: 100, width: '100%', alignItems: 'center', justifyContent: 'center', borderRightColor: 'grey', borderRightWidth: 0.5 }}>

                                            <Text style={{ color: 'white', fontSize: 20 }}>Maybe later</Text>

                                        </View>
                                    </TouchableOpacity>


                                </View>
                                {/* submit */}
                                <View style={{ width: "50%" }}>
                                    <TouchableOpacity 
                                    // onPress={() => { rate() }}
                                    >
                                        <View style={{ height: 50, width: 100, width: '100%', alignItems: 'center', justifyContent: 'center' }}>

                                            <Text style={{ color: 'white', fontSize: 20 }}>submit</Text>
                                        </View>
                                    </TouchableOpacity>


                                </View>


                            </View>
                        </View>
                    </>
                </View>




            </Modal>



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
